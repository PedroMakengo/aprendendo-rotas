<template>
  <div class="app">
    <Header />
    <hr />
    <div class="content-view">
      <router-view />
    </div>
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
