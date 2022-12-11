export default defineEventHandler(async (event) => {
    if (event.node.req.method === 'GET') {
        const { username } = getQuery(event)
        const token = useRuntimeConfig().githubToken

        const data = await $fetch(`https://api.github.com/users/${username}`, {
            headers: {
                'Authorization': `token ${token}`,
                'Accept': 'application/vnd.github.v3+json',
            },
        })
        return {
            login: data.login,
            name: data.name,
            bio: data.bio,
            public_repos: data.public_repos,
            avatar_url: data.avatar_url,
            html_url: data.html_url,
        }
    }
})