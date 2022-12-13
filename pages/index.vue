<template>
    <div class="main">
        <div class="content">
            <h1 class="font-bold text-2xl text-center">About Me</h1>
            <section>
                <h3 class="font-bold">Introduction</h3>
                Hello everyone. My name is Nutpapop Yasawut.
                Currently, aged {{ calculate_age() }}, studying Computer Engineering at KMUTNB. <br>
                I have a hobby of programming softwares using
                C#, python and more.<br>
                I am currently studying HTML, CSS and JavaScript.
            </section>
            <section>
                <h3 class="font-bold">My Skills</h3>
                <ul>
                    <li>Programming: C#, Python, HTML, CSS, JavaScript, Processing</li>
                    <li>Game Development: Unity</li>
                    <li>Web Development: Vue.js, Nuxt.js, Node.js</li>
                    <li>Database: MySQL, PostgreSQL</li>
                    <li>Version Control: Git</li>
                </ul>
            </section>
            <section>
                <h3 class="font-bold">Check me out on GitHub</h3>
                <GitHubCard username="winth03" />
            </section>
        </div>
    </div>
</template>

<script setup>
    const calculate_age = () => { 
        var diff_ms = Date.now() - new Date(2004, 4, 9).getTime();
        var age_dt = new Date(diff_ms); 
    
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
</script>

<style lang="scss" scoped>
    .content {
        @apply max-w-5xl space-y-4;
    }
</style>