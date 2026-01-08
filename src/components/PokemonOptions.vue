<template>
  <div class="opciones-container">
    <header></header>
    <nav></nav>
    <section>
      <h1>Componente Pokemon Opciones</h1>
      <ul>
        <li>Pokemon 1</li>
        <li>Pokemon 2</li>
        <li>Pokemon 3</li>
        <li>Pokemon 4</li>
      </ul>
    </section>
    <footer><button v-on:click="obtenerPokemonDatos()">holii</button></footer>
  </div>
</template>

<script>
import { obtenerPokemonFachada } from "../clients/PokeApiClient.js";

export default {
  methods: {
    async obtenerPokemonDatos() {
      let resultado = await obtenerPokemonFachada();
      console.log(resultado);
      // console.log(resultado.config.data[0].data.name);
    },
  },
};
</script>

<style scoped>
.opciones-container {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  background-color: rgb(250, 5, 5);
}

ul {
  list-style-type: none;
}

li {
  background-color: whitesmoke;
  border-radius: 5px;
  border: solid 1px;
  cursor: pointer;
  width: 150px;
  margin-top: 10px;
  text-align: center;
}
</style>