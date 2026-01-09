<template>
  <div class="opciones-container">
    <header></header>
    <nav></nav>
    <section>
      <h1>Componente Pokemon Opciones</h1>
      <ul>
        <li
          v-on:click="pasarPadre(pokemon.id)"
          v-for="pokemon in listaPokemons"
          :key="pokemon.id"
        >
          {{ pokemon.nombre }}
        </li>
      </ul>
    </section>
    <footer></footer>
  </div>
</template>

<script>
export default {
  methods: {
    pasarPadre(id) {
      this.$emit('Seleccionado', id);
    },
  },
  props: {
    listaPokemons: {
      type: Array,
      required: true,
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