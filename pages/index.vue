<template>
    <div class="main">
        <div class="content">
            <h1 class="title">About Me</h1>
            <section>
                <h3 class="font-bold">Introduction</h3>
                Hello everyone. My name is Nutpapop Yasawut.
                Currently, aged {{ calculate_age() }}, studying Computer Engineering at KMUTNB. <br>
                I have a hobby of programming softwares using
                C#, python and more.<br>
                I am currently studying about Embedded Systems and IOT.
            </section>
            <section>
                <h3 class="font-bold">My Skills</h3>
                <ul>
                    <li>Programming: 
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/processing/processing-original.svg" alt="Processing" />
                    </li>
                    <li>Game Development: 
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" alt="Unity" />
                    </li>
                    <li>Web Development: 
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg" alt="Nuxt.js" />
                    </li>
                    <li>Database: 
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="MySQL" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
                    </li>
                    <li>Embedded System: 
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" alt="Arduino" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" alt="RaspberryPI" />
                    </li>
                    <li>Version Control: 
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                    </li>
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
        var diff_ms = Date.now() - new Date(2004, 3, 9).getTime();
        var age_dt = new Date(diff_ms); 
    
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
</script>

<style lang="scss" scoped>
    ul {
        @apply rounded-2xl bg-white text-black p-4 divide-y-2;
        li {
            @apply align-middle py-2;
            img, svg {
                @apply w-14 h-14 inline-block;
            }
        }
    }

    i {
        @apply text-6xl;
    }
</style>