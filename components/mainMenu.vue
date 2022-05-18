<template>
    <nav>
        <ul>
            <li>
                <NuxtLink to="/">
                    <MIconRabbitvariant />
                    Home
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/rep">
                    <MIconRabbit />
                    About
                </NuxtLink>
            </li>
        </ul>
        <div class="user"
        @click="panelIsOpen = !panelIsOpen"></div>
        <div class="panel"
        v-show="panelIsOpen"></div>
    </nav>
</template>

<style lang="postcss">
nav{
    display: flex;
    justify-content: space-between;
    @apply bg-gray-200;
    ul{
        display: flex;
        flex-direction: row;
        li{
            @apply p-5
        }
    }
    .user{
        display: flex;
        @apply p-5 w-12 h-12 bg-gray-400 rounded-full;
    }

    .panel{
        @apply w-48 h-24 bg-white;
        position: absolute;
        top: 70px;
        right: 0;
    }
}
</style>

<script>
    export default{
        data(){
            return{
                panelIsOpen: false

            }
        }
    }
</script>