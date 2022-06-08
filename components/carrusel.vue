  <template>

  <div>
    <h1 class="destacadoCard">Podcast</h1>
    <flickity  class="flickity" ref="flickity" :options="flickityOptions">
        <CardPodcast class="carousel-cell"/>
        <CardPodcast class="carousel-cell"/>
        <CardPodcast class="carousel-cell"/>
        <CardPodcast class="carousel-cell"/>
        <CardPodcast class="carousel-cell"/>
        <CardPodcast class="carousel-cell"/>
        <CardPodcast class="carousel-cell"/>
        
    



  </flickity>
  </div>
      
  </template>


<style scoped>
    .destacadoCard{
        font-weight: bold;
        margin: 20px 0 4px 20px ;
    }
</style>




<script>
    import Flickity from 'vue-flickity'
    import CardPodcast from './cardPodcast.vue'

    export default {
    components: {
    Flickity,
    CardPodcast
},
    data () {
        return {
        flickityOptions: {
            initialIndex: 3,
            prevNextButtons: false,
            pageDots: false,
            wrapAround: true,
            freeScroll: true
            // any options from Flickity can be used
        }
        }
    }
    }
</script>