<template>
    <div class="top">
        <img class="iconLogo" src="/logoOndaCero.svg" alt="marca ondacero">
        <img class="headerIcon" src="/ajustes.svg" alt="icono ajustes">
    </div>
</template>


<style lang="postcss" scoped>
    .top{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 20px;
        max-width: 100%;

        .headerIcon{
            height: 20px;
        }

        .iconLogo{
            height: 40px;
        }
        
    }

</style>