<template>
  <div class="centrar">
    <h1>Pregunta componente</h1>
    <img
      src="https://yesno.wtf/assets/yes/5-64c2804cc48057b94fd0b3eaf323d92c.gif"
      alt="No se puede visualizar"
    />

    <div class="pregunta-container">
      <input type="text" name="" id="" placeholder="Hazme una pregunta" />

      <p>Recuerda terminar con el signo de interrogación (?)</p>
      <h2>Sere millonario</h2>
      <p>Yes, No</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.centrar {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
}

img {
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
  /*flex-direction: column;*/ /* elementos uno debajo del otro */
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


</style>