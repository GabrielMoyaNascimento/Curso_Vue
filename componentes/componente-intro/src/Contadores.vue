<template>
  <div class="contadores">
    <h1>Contadores</h1>
    <app-contador v-for="c in 5" :key="c"/>
    <button>?</button>
  </div>
</template>

<script>
import Contador from './Contador.vue'

export default {
  components:{ 'app-contador': Contador }
};
</script>

<style>
  
</style>