<template>
  <div class="container-vista-directivas">
   <h2>Prueba</h2>
    <Directivas />
  </div>
</template>

<script>
import Directivas from "@/components/Directivas.vue";

export default {
  components: {
    Directivas,
  },
};
</script>

<style scoped>
.container-vista-directivas {
  display: flex;
  justify-content: center;
  align-items: center;
}
h2 {
  font-size: 50px;

}

</style>