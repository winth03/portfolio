<template>
    <el-card>
        <el-row :align="'middle'" :gutter="20">
            <el-col :span="6">
                <el-avatar shape="circle" size="large" :src="data.avatar_url"></el-avatar>
            </el-col>
            <el-col :span="18">
                <h2>{{ data.name }}</h2>
                <el-text type="info" tag="b">{{ data.login }}</el-text><br>
                <el-text>Public Repositories: {{ data.public_repos }}</el-text><br>
                <el-text>{{ data.bio }}</el-text>
            </el-col>
        </el-row>            
        <el-row justify="center">
            <el-button type="info" tag="a" target="_blank" :href="data.html_url">
                <el-avatar size="small" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                <el-text>View on GitHub</el-text>
            </el-button>
        </el-row>
    </el-card>
</template>


<script setup>
    const { username } = defineProps({
        username: {
            type: String,
            required: true
        }
    })
    
    const { data } = useLazyFetch('/api/user',
        {
            query: {
                username: username
            },
            default: () => {
                return {
                    login: 'Loading...',
                    name: 'Loading...',
                    bio: 'Loading...',
                    public_repos: 'Loading...',
                    avatar_url: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
                    html_url: ''
                }
            }
        })
</script>

<style lang="scss" scoped>
    .el-card {
        @apply max-w-max rounded-xl space-y-2;
        .el-avatar--large {
            @apply w-16 h-16 sm:w-24 sm:h-24;
        }

        .el-button {
            @apply mt-2;
            .el-avatar--small {
                @apply mr-2;
            }
        }
    }
</style>