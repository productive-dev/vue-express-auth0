<template>
  <div class="notes-container">
    <b-container>
      <b-card-group deck>
        <b-card
          bg-variant="primary"
          text-variant="white"
          header="Public Note"
          class="text-center"
          v-for="note in publicNotes"
          :key="note.id"
        >
          <b-card-text>
            {{ note.note }}
          </b-card-text>
        </b-card>
      </b-card-group>

      <hr />

      <b-button
        variant="outline-dark"
        @click="getPrivateNotes"
      >
        Request Private Notes
      </b-button>

      <hr />

      <b-spinner
        v-if="isLoading"
        type="grow"
        variant="info"
        label="Loading...">

      </b-spinner>

      <b-card-group deck>
        <b-card
          bg-variant="success"
          text-variant="white"
          header="Private Note"
          class="text-center"
          v-for="note in privateNotes"
          :key="note.id"
        >
          <b-card-text>
            {{ note.note }}
          </b-card-text>
        </b-card>
      </b-card-group>
    </b-container>
  </div>
</template>
<script>
  import { isLoggedIn } from "../utils/auth-service";
  import { getPublicNotes, getPrivateNotes } from "../utils/notes-service";
  export default {
    name: "publicNotes",
    components: { },
    data() {
      return {
        publicNotes: "",
        privateNotes: "",
        isLoading: false,
      };
    },
    methods: {
      isLoggedIn() {
        return isLoggedIn();
      },

      getPublicNotes() {
        getPublicNotes().then((notes) => {
          this.publicNotes = notes;
        });
      },

      getPrivateNotes() {
        this.isLoading = true;
        getPrivateNotes()
          .then((notes) => {
            this.privateNotes = notes;
          }).catch(() => {
          this.makeToast();
        }).finally(() => {
          this.isLoading = false;
        });
      },

      makeToast() {
        this.$bvToast.toast("You cannot view private notes", {
          title: "Unauthorized",
          variant: "danger",
          solid: true
        });
      }
    },

    mounted() {
      this.getPublicNotes();
    },
  };
</script>
<style scoped>
  .notes-container {
    padding: 1rem;
  }
</style>
