// Type definitions for GitHub API responses
export interface GithubRepo {
  id: string; // Changed to string (using URL as unique key)
  name: string;
  description: string | null;
  url: string;
  language: string | null;
  updatedAt: string;
  stargazersCount?: number;
}

export interface PinnedRepo extends GithubRepo {
  isPinned: true;
}

// Fetch pinned repositories using GraphQL
export async function fetchPinnedRepos(
  username: string,
  token: string
): Promise<PinnedRepo[]> {
  const query = `
    query ($login: String!) {
      user(login: $login) {
        pinnedItems(first: 6, types: REPOSITORY) {
          edges {
            node {
              ... on Repository {
                id
                name
                description
                url
                primaryLanguage {
                  name
                }
                updatedAt
                stargazers {
                  totalCount
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        query,
        variables: { login: username },
      }),
    });

    if (!response.ok) {
      throw new Error(`GraphQL API error: ${response.statusText}`);
    }

    const data = await response.json();

    if (data.errors) {
      throw new Error(`GraphQL error: ${data.errors[0]?.message}`);
    }

    return (
      data.data?.user?.pinnedItems?.edges?.map(
        (edge: {
          node: {
            id: string;
            name: string;
            description: string | null;
            url: string;
            primaryLanguage: { name: string } | null;
            updatedAt: string;
            stargazers: { totalCount: number };
          };
        }) => ({
          id: edge.node.url, // Use URL as unique key instead of numeric ID
          name: edge.node.name,
          description: edge.node.description,
          url: edge.node.url,
          language: edge.node.primaryLanguage?.name || null,
          updatedAt: edge.node.updatedAt,
          stargazersCount: edge.node.stargazers.totalCount,
          isPinned: true,
        })
      ) || []
    );
  } catch (error) {
    console.error("Error fetching pinned repos:", error);
    return [];
  }
}

// Fetch recent repositories using REST API
export async function fetchRecentRepos(
  username: string,
  token: string,
  limit: number = 10
): Promise<GithubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`REST API error: ${response.statusText}`);
    }

    const repos = await response.json();

    return repos.map(
      (repo: {
        id: number;
        name: string;
        description: string | null;
        html_url: string;
        language: string | null;
        updated_at: string;
        stargazers_count: number;
      }) => ({
        id: repo.html_url, // Use URL as unique key for consistency
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        language: repo.language,
        updatedAt: repo.updated_at,
        stargazersCount: repo.stargazers_count,
      })
    );
  } catch (error) {
    console.error("Error fetching recent repos:", error);
    return [];
  }
}

// Helper function to format date as "X days ago"
export function formatUpdatedAt(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
}
