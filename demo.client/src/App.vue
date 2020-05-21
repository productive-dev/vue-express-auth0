<template>
  <div>
    <nav-bar />
    <router-view/>
  </div>
</template>

<script>
  import NavBar from "@/components/NavBar.vue";

  export default {
    name: "App",
    components: {
      NavBar
    }
  };
</script>

<style lang="scss">
  @import "~bootstrap";
  @import "~bootstrap-vue";

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
