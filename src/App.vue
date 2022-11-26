<template>
  <div class="app">
    <header>
      <div class="container">
        <strong>Vue Nutri</strong>
        <template v-if="true">
          <button style="width: 3%">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="#000"
                d="M3,11a1,1,0,1,0,1,1A1,1,0,0,0,3,11Zm1.93,6.66a1,1,0,1,0,1.41,0A1,1,0,0,0,4.93,17.66ZM6.34,6.34a1,1,0,1,0-1.41,0A1,1,0,0,0,6.34,6.34ZM12,4a1,1,0,1,0-1-1A1,1,0,0,0,12,4Zm5.66,13.66a1,1,0,1,0,1.41,0A1,1,0,0,0,17.66,17.66ZM21,11a1,1,0,1,0,1,1A1,1,0,0,0,21,11ZM17.66,4.93a1,1,0,1,0,1.41,0A1,1,0,0,0,17.66,4.93ZM12,20a1,1,0,1,0,1,1A1,1,0,0,0,12,20ZM12,6a6,6,0,1,0,6,6A6,6,0,0,0,12,6Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,12,16Z"
              />
            </svg>
          </button>
        </template>
        <template v-else>
          <button style="width: 3%">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="#000"
                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
              />
            </svg>
          </button>
        </template>
      </div>
    </header>

    <main>
      <div class="loading" v-if="loading">
        <img src="@/assets/loading.gif" />
      </div>
      <section class="container" v-else>
        <div class="items">
          <article class="item" v-for="(item, index) in nutri" :key="index">
            <strong>{{ item.titulo }}</strong>
            <img :src="item.capa" />
            <span class="category">Categoria: {{ item.categoria }}</span>
            <p>{{ item.subtitulo }}</p>
            <a href="#" class="botao">Acessar</a>
          </article>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import api from "./services/api";

export default {
  name: "App",
  data() {
    return {
      nutri: [],
      loading: true,
    };
  },
  async created() {
    const response = await api.get("?api=posts");
    const data = await response.data;

    this.nutri = data;
    this.loading = false;
  },
};
</script>

<style scoped>
header {
  background: #fff;
  box-shadow: 2px 0 6px #9e9e9e4d;
  height: 10vh;

  position: fixed;
  width: 100%;
  top: 0;
}

header .container {
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

main {
  margin-top: 8rem;
}

main .container .items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  gap: 1rem;
}

main .container .item img {
  height: 30vh;
}

main .container .item .category {
  display: flex;
  margin-top: 15px;
  font-weight: 700;
}

main .container .item .botao {
  display: flex;
  height: 40px;
  border: 1px;
  border: 1px solid #9e9e9e4d;

  justify-content: center;
  align-items: center;

  margin-top: 1rem;

  text-decoration: none;
}

main .container .items .item {
  width: 32%;
  background: #fff;
  box-shadow: 2px 0 6px #9e9e9e4d;

  border-radius: 5px;

  padding: 0.5rem;
}

main .container .items .item img {
  width: 100%;
}

main .loading {
  background: #000;
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;

  display: flex;

  align-items: center;
  justify-content: center;
}

.loading img {
  width: 5%;
}
</style>
