<template>
  <div class="pokemon-container">
    <header></header>
    <nav></nav>
    <section>
      <h1>Componente Pokemon Imagen</h1>
      <img v-bind:src="srcImagen" alt="No se puede renderizar" />
    </section>
    <footer></footer>
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
      default: 150,
    },
  },
  computed: {
    srcImagen() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${this.pokemonId}.gif`;
    },
  },
  beforeUnmount() {
    console.log("beforeUnmount: justo antes de que el componente se destruya");
  },
  unmounted() {
    console.log("unmounted: el componente ya fué removido del DOM y destruido");
  },
};
</script>

<style scoped>
.pokemon-container {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
}
img {
  height: 200px;
  right: 32%;
  border: solid 2px rgb(98, 151, 18);
}
</style>