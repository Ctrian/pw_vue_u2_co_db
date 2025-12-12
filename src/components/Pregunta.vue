<template>
  <div class="centrar">
    <h1>Pregunta componente</h1>
    <img :v-if="imagen"
      :src="imagen"
      alt="No se puede visualizar"
    />
    <div class="obscuro">

    </div>

    <div class="pregunta-container">
      <input
        v-model="pregunta"
        type="text"
        name=""
        id=""
        placeholder="Hazme una pregunta"
      />
      <p>Recuerda terminar con el signo de interrogación (? (ALT+63))</p>

      <h2>{{pregunta}}</h2>
      <p>{{respuesta}}</p>
      <p></p>
    </div>
  </div>
</template>

<script>
import { consumirAPIfachada } from "../clients/YesNoClient.js";

export default {
  data() {
    return {
      pregunta: null,
      respuesta: null,
      imagen: null
    };
  },
  watch: {
    pregunta(value, oldValue) {
      // console.log(value);
      // console.log(oldValue);

      if (value.includes("?")) {
        //llamar Api
        this.respuesta="pensando..."
        this.consumir();
      }
    },
  },
  methods: {
    async consumir() {
      const res = await consumirAPIfachada();
      console.log("Respuesta final");
      console.log(res.answer);
      this.respuesta = res.answer;
      this.imagen = res.image;
      console.log(res.image);
    },
  },
};
</script>

<style scoped>
.centrar {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
}

img , .obscuro  {
  height: 100vh;
  width: 100vw;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
}

.pregunta-container {
  position: relative;
  color: whitesmoke;
  min-height: 100vh; /* altura de toda la pantalla */
  display: flex;
  flex-direction: column; /* elementos uno debajo del otro */
  justify-content: center; /* centrado vertical */
  align-items: center; /* centrado horizontal */
  text-align: center;
}

input {
  border: none;
  width: 500px;
  padding: 10px 15px;
  border-radius: 20px;
}

input:focus {
  outline: none;
}

p {
  font-size: 20px;
}

h2 {
  margin-top: 150px;
}

.obscuro {
  background-color: black ;
}

</style>