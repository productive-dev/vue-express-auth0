<template>
  <div>
    <b-jumbotron header="Notes" lead="An example Vue.js app with Auth0" />

    <b-container>
      <div class="auth-info" v-if="isLoggedIn()">
        <div class="label">
          You are logged in.
        </div>
        <hr/>
        <b-row>
          <b-col>
            <b-badge variant="primary" class="label">
              id_token
            </b-badge>
            <span class="jwt">
            {{ getIdToken() }}
          </span>
          </b-col>
          <b-col>
            <b-badge variant="primary" class="label">
              access_token
            </b-badge>
            <span class="jwt">
          {{ getAccessToken() }}
          </span>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
  import {getAccessToken, getIdToken, getUser, isLoggedIn} from '../utils/auth-service';

  export default {
    name: 'Home',
    components: { },
    data() {
      return {
        idToken: '',
        accessToken: '',
      };
    },
    methods: {
      isLoggedIn() {
        return isLoggedIn();
      },
      getIdToken() {
        return getIdToken();
      },
      getAccessToken() {
        return getAccessToken();
      },
      getUser() {
        return getUser(this.accessToken);
      }
    },
    mounted() {
      this.idToken = this.getIdToken();
      this.accessToken = this.getAccessToken();
      console.log('sending with', this.accessToken)
      getUser(this.accessToken);
    },
  }
</script>

<style>
  .auth-info {
    word-wrap: break-word;
    text-align: left;
    color: #88A;
  }

  .label {
    margin: 0.5rem 0;
    font-weight: bold;
  }
</style>
