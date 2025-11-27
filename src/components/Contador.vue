<template>
  <div>
    <h1>{{ tit }}</h1>
    <p>{{ numero }} <sup>3</sup> = {{ calculaCubo }}</p>
    <p>{{ numero }} <sup>3</sup> = {{ obtenerCubo() }}</p>
    <p>{{ numero }} <sup>2</sup> = {{ calculaCuadrado }}</p>
    <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadrados() }}</p>
    <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadrados() }}</p>
    <div>
      <button @:click="incrementar()">+1</button>
      <button @:click="decrementar()">-1</button>
      <button v-show="mostrar">Mostrar</button>
    </div>
  </div>
</template>

<script>
export default {
  // <!-- Propiedades reactivas (options API) como variables que tenemos dentro de nuestro componente -->
  data() {
    return {
      numero: this.inicio,
      titulo: "Contador",
    };
  },
  methods: {
    obtenerCuadrados() {
      console.log("Entro a obtener cuadrado");
      return this.numero * this.numero;
    },
    obtenerCubo() {
      return this.numero * this.numero * this.numero;
    },
    incrementar() {
      console.log(this.tit);
      this.numero++;
    },
    decrementar() {
      this.numero--;
    },
  },
  computed: {
    /* elemento que se ejecuta solo si cambia el resultado */
    /* No puede recibir argumentos, like methods */
    calculaCuadrado() {
      console.log("Entro a propiedad computada");
      return this.numero * this.numero;
    },
    calculaCubo() {
      console.log("Entro a propiedad computada");
      return this.numero * this.numero * this.numero;
    },
  },
  // props: ['tit', 'inicio', 'mostrar'], /* declaración básica de props */
  props: {
    tit: String,
    inicio: {
      type: Number,
      default:99,
      validator(value) {
        return value > 10;
      }
    },
    mostrar: Boolean,
    vector: Array,
    persona: Object,
    obtenerPeso: Function,
    numerote: BigInt,

  },
};
</script>

<style>
</style>