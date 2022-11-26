<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="detalhe-produto">
    <h2>Detalhe do produto</h2>
    <span
      >Código do Produto: <strong>{{ id }}</strong>
    </span>
  </div>
</template>

<script>
export default {
  props: ["id"],
};
</script>

<style scoped></style>
