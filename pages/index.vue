<template>
  <main>
    <banner-image :source="'/img1.jpg'"/>
    <h1>Salu2, esto es la jome</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam animi beatae autem vero quos consequuntur, accusamus soluta suscipit quia voluptatum, culpa voluptatem. Quibusdam quam in, dolores non et facilis odit? Laboriosam animi beatae autem vero quos consequuntur, accusamus soluta suscipit quia voluptatum, culpa voluptatem. Quibusdam quam in, dolores non et facilis odit? Laboriosam animi beatae autem vero quos consequuntur, accusamus soluta suscipit quia voluptatum, culpa voluptatem. Quibusdam quam in, dolores non et facilis odit?</p>
    <ul>
        <li v-for="(mountain,i) of mountains" :key="i">{{ mountain.title }}</li>
    </ul>
  </main>
</template>


<script>
export default{
  name: 'about',
  data() {
    return {
      mountains: []
      }
    },

async fetch() {
      this.mountains = await fetch(
        'https://api.nuxtjs.dev/mountains'
      ).then(res => res.json())
    }
    
    
  }
</script>

<script>
export default{
  name: 'IndexPage'
}
</script>

