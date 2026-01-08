<template>
    <PokemonImage :pokemonId="658"/>
    <PokemonOptions />
</template>

<script>
import PokemonImage from "../components/PokemonImage.vue";
import PokemonOptions from "../components/PokemonOptions.vue";
export default {
  components: {
    PokemonImage,
    PokemonOptions,
  },
};
</script>

<style scoped>
</style>