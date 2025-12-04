<template>

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

    <hr />
    <h2>Evento keypress</h2>

    <label for="id_nombre1">Nombre</label>
    <input v-model="nombre1" id="id_nombre1" type="text" />
    <br />
    <label for="id_apellido1">Apellido</label>
    <input v-model="apellido1" v-on:keypress.enter="agregarEstudiante1" id="id_apellido1" type="text" />
    <ul>
      <li
        v-show="nombre1 !== null"
        v-for="{ nombre1, apellido1 } in arreglo1"
        :key="nombre1"
      >
        Nombre: {{ nombre1 }}, Apellido: {{ apellido1 }}
      </li>
    </ul>

    <div class="centrar-tabla">
      <h2>Tabla2</h2>
      <table>
        <thead>
          <tr>
            <td>Nombre</td>
            <td>Apellido</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="{ nombre1, apellido1 } in arreglo1" :key="nombre1">
            <td>{{ nombre1 }}</td>
            <td>{{ apellido1 }}</td>
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
      nombre1: null,
      apellido1: null,
      arreglo1: [],
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
    agregarEstudiante1() {
      console.log("whaterver");
      if (event.charCode !== 13) {
        return;
      }
      console.log("Presiono ENTER");
      console.log("Se esta agregando un Nombre 1");
      // console.log(event);
      // console.log(event.charCode);
      const estu = {
        nombre1: this.nombre1,
        apellido1: this.apellido1,
      };
      
      this.arreglo1.push(estu);

      this.limpiarFormulario1();
    },
    limpiarFormulario() {
      (this.nombre = null), (this.apellido = null);
    },
    limpiarFormulario1() {
      (this.nombre1 = null), (this.apellido1 = null);
    },
  },
  props: ["apelli"],
};
</script>

<style scoped>



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