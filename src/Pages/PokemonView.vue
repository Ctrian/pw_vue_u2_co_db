<template>
  <div>
    <h1 v-show="mensaje">Ganadooroohohohhoorrr</h1>
    <PokemonImagen :pokemonId="pokemonGanador" />
    <PokemonOpciones
      :listaPokemons="pokemonArr"
      @Seleccionado="evaluarGanador($event)"
    />
    
  </div>
</template>
 
<script>
import PokemonImagen from "@/components/PokemonImage.vue";
import PokemonOpciones from "@/components/PokemonOptions.vue";
import { obtenerVectorPokemonFacade } from "@/clients/PokeApiClient.js";
import { obtenerAleatorioFachada } from "@/clients/PokeApiClient.js";
export default {
  data() {
    return {
      pokemonArr: [],
      pokemonGanador: null,
      mensaje: false,
    };
  },
  mounted() {
    console.log("componente PokemonView montado");
    this.iniciarJuego();
  },
  components: {
    PokemonImagen,
    PokemonOpciones,
  },
  methods: {
    async iniciarJuego() {
      this.pokemonArr = await obtenerVectorPokemonFacade();

      const idAleatorio = obtenerAleatorioFachada(0, 3);
      this.pokemonGanador = this.pokemonArr[idAleatorio].id;
    },
    evaluarGanador(idGanador) {
      console.log(
        "valor recibido en el padre desde el componente PokemonOptions"
      );
      console.log(idGanador);
      if (idGanador === this.pokemonGanador) {
        console.log("Grrr");
        this.mensaje = true;
      } else {
        console.log("HAHA");
      }
    },
  },
};
</script>
 
<style>
</style>