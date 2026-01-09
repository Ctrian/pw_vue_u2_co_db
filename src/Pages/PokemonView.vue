<template>
  <div>
    <h1 v-if="mensaje">Ganadooroohohohhoorrr</h1>
    <h1 v-show="msj2">¡Intenta de nuevo!</h1>

    <PokemonImagen :pokemonId="pokemonGanador" v-if="mostrar" />
    <PokemonOpciones
      :listaPokemons="pokemonArr"
      @Seleccionado="evaluarGanador($event)"
    />
  </div>

  <button v-on:click="destruir()">Destruir</button>
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
      msj2: false,
      mostrar: true,
    };
  },
  /* Crea el componente */
  beforeCreate() {
    console.log("beforeCreate: apenas inicia la instancia del componente");
  },
  created() {
    console.log("created: ya se resolvieron data, computed, methods, watch");
  },
  /* Monta el componente: se renderiza o visualiza el componente */
  beforeMount() {
    console.log(
      "beforeMount: se ejecuta justo antes de renderizar los elementos HTML"
    );
  },
  mounted() {
    console.log("mounted: componente ya renderizado");
    console.log("componente PokemonView montado");
    this.iniciarJuego();
  },
  /* Actualización de un componente */
  beforeUpdate() {
    console.log(
      "beforeUpdate: cuando cambió data/props y Vue está por re-renderizar"
    );
  },
  updated() {
    console.log("updated: cuando ya se actualizo tras la re-renderización");
  },
  beforeUnmount() {
    console.log("beforeUnmount: justo antes de que el componente se destruya");
  },
  unmounted() {
    console.log("unmounted: el componente ya fué removido del DOM y destruido");
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
        this.mostrar = false;
      } else {
        console.log("HAHA");
        this.msj2 = true;
      }
    },
  },
};
</script>
 
<style>
</style>