<template>
  <div>
    <h1>Hola mundo desde la vista</h1>
    <Contador tit="Contador 1" :inicio="4+4" :mostrar="true"/>
    <Contador tit="Contador 2" inicio="100" :mostrar="false"/>
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