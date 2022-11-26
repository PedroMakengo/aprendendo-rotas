<template>
  <div class="app">
    <Header />
    <hr />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "App",
  components: { Header },
};
</script>

<style scoped></style>
