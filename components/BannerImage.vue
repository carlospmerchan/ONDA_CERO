<template>
    <img class="banner-image" :src="source" :alt="'imagen de prueba'">
</template>

<script>
export default {
    props: ['source']
}
</script>

<style lang="sass">

.banner-image
    @apply w-full
    border: 2px solid $color

</style>