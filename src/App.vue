<template>
  <div>
    <h1>Hola mundo</h1>
    <!-- <ContadorView /> -->
    <DirectivasView/>
  </div>
</template>

<script>
import ContadorView from "../src/Pages/ContadorView.vue";
import DirectivasView from './Pages/DirectivasView.vue';

export default {
  components: { 
    ContadorView,
    DirectivasView

   },
};
</script>

<style>
</style>