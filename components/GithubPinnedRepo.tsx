"use client";

import type { PinnedRepo } from "@/app/lib/github";
import { formatUpdatedAt } from "@/app/lib/github";

interface GithubPinnedRepoProps {
  repo: PinnedRepo;
}

export function GithubPinnedRepo({ repo }: GithubPinnedRepoProps) {
  return (
    <div>
      <h3 className="project-title">
        <a href={repo.url} target="_blank" rel="noopener noreferrer">
          {repo.name} ↗
        </a>
      </h3>
      {repo.description && (
        <p className="project-description">{repo.description}</p>
      )}
      <div className="project-tags">
        {repo.language && <span>{repo.language}</span>}
        {repo.stargazersCount ? (
          <>
            {repo.language && " • "}
            <span>⭐ {repo.stargazersCount}</span>
          </>
        ) : null}
        {" • "}
        <span>{formatUpdatedAt(repo.updatedAt)}</span>
      </div>
    </div>
  );
}
