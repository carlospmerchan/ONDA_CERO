<template>
<nav>
  <ul>

    <li>
      <NuxtLink to="/" class="iconText">
        <img src="/inicio.svg" alt="icono inicio">
        <div>inicio</div>
      </NuxtLink>
    </li>

    <li>
      <NuxtLink to="/horario" class="iconText">
        <img src="/horario.svg" alt="icono horario">
        <div>horario</div>
      </NuxtLink>
    </li>
    
    <li >
      <NuxtLink to="/buscador" class="iconText">
        <img src="/buscador.svg" alt="icono horario">
        <div>buscador</div>
      </NuxtLink>
    </li>

    <li>
      <NuxtLink to="/noticias"  class="iconText">
        <img src="/noticias.svg" alt="icono horario">
        <div>noticias</div>
      </NuxtLink>
    </li>

    <li>
      <NuxtLink to="/biblioteca" class="iconText">
        <img src="/biblioteca.svg" alt="icono horario">
        <div>biblioteca</div>
      </NuxtLink>
    </li>
    
  </ul>
</nav>
</template>




<style lang="postcss" scoped>
nav{
    display: flex;
    position: fixed;
    bottom: 0;
    backdrop-filter: blur(10px);
    background-color: white;
    width: 100%;
    z-index: 999;
    

    justify-content: center;
    @apply bg-gray-200;
    ul{
        display: flex;
        flex-direction: row;

        .iconText{
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 45px;
        }
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


