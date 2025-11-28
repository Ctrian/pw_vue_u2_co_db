<template>
  <h1>Directivas Componente</h1>
  <div>
    <label for="id_nombre"> Nombre </label>
    <input v-model="nombre" id="id_nombre" type="text" />
    <br />
    <label for="id_apellido"> Apellido </label>
    <input v-model="apellido" id="id_apellido" type="text" />
    <p>{{ nombre }}</p>
    <p>{{ apellido }}</p>
    <button v-on:click="imprimirNombre()">Imprimir nombre</button>
    <button v-if="nombre !== null" v-on:click="agregarEstudiante()">
      Agregar estudiante
    </button>
    <!-- <h1>{{ arreglo[0] }}</h1> -->

    <ul>
      <li
        v-show="nombre !== null"
        v-for="{ nombre, apellido } in arreglo"
        :key="nombre"
      >
        Nombre: {{ nombre }}, Apellido: {{ apellido }}
      </li>
    </ul>

    <div class="centrar-tabla">
      <h2>Tabla</h2>
      <table>
        <thead>
          <tr>
            <td>Nombre</td>
            <td>Apellido</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="{ nombre, apellido } in arreglo" :key="nombre">
            <td>{{ nombre }}</td>
            <td>{{ apellido }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: null,
      apellido: null,
      arreglo: [],
    };
  },
  methods: {
    imprimirNombre() {
      console.log(this.nombre);
    },
    agregarEstudiante() {
      const estu = {
        nombre: this.nombre,
        apellido: this.apellido,
      };
      console.log("Se esta agregando un estudiante");
      console.log(estu);
      this.arreglo.push(estu);

      this.limpiarFormulario();
    },
    limpiarFormulario() {
      (this.nombre = null), (this.apellido = null);
    },
  },
  props: ["apelli"],
};
</script>

<style>
table,
th,
td {
  border: 1px solid;
  width: 200px;
  height: 40px;
  text-align: center;
}

.centrar-tabla {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
}
</style>