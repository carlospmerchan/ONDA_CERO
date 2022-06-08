<template>
    <div>
        <header-phone />
        <card-directo />
        <carrusel />
        <carrusel />
        <audio-player />
    </div>
</template>

<script>
import phoneMenu from '../components/phoneMenu.vue'
import AudioPlayer from '../components/AudioPlayer.vue'
export default{
  components: { phoneMenu, AudioPlayer },
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

