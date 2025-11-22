<template>
  <div>
    <h1>Hola mundo desde la vista</h1>
    <Contador />
  </div>
</template>

<script>
import Contador from "../components/Contador.vue";

export default {
  /* LÓGICA */
  /* Podemos trabajar de las dos formas, con compositionAPI o con optionAPI, trabajaremos con optionAPI que es lo que vemos en export desault en el componente por defecto de Vue.js */
  components: { Contador },
};
</script>

<style>
</style>