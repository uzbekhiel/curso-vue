<template>
  <div class="contadores" >
      <h1>Contadores</h1>
    <app-contador v-for="c in n" :key="c" />
  </div>
</template>

<script>
import Contador from './Contador.vue'

  export default{
      data: function(){
          return{
              n: 5
          }
      },
      components: {'app-contador': Contador}
  }
</script>

<style>
</style>
