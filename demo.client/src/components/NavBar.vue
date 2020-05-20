<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">Notes</b-navbar-brand>

    <b-navbar-nav>
      <b-nav-item href="/">Home</b-nav-item>
      <b-nav-item href="/notes">Notes</b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
      <b-nav-item>
        <b-button
          v-if="!isLoggedIn()"
          @click="handleLogin"
          variant="primary"
          class="my-2 my-sm-0"
          type="submit">
          Sign In
        </b-button>
      </b-nav-item>
      <b-nav-item>
        <b-button
          v-if="isLoggedIn()"
          @click="handleLogout"
          variant="primary"
          class="my-2 my-sm-0"
          type="submit">
          Sign Out
        </b-button>
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>
<script>
  import { isLoggedIn, login, logout } from '../utils/auth-service';
  export default {
    name: 'app-nav',
    methods: {
      handleLogin() {
        login();
      },
      handleLogout() {
        logout();
      },
      isLoggedIn() {
        return isLoggedIn();
      },
    },
  };
</script>
<style scoped>
  .navbar-right { margin-right: 0px !important}
  .log {
    margin: 5px 10px 0 0;
  }
</style>
