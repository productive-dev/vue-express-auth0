<template>
</template>
<script>
  import { setIdToken, setAccessToken } from "../utils/auth-service";
  export default {
    name: "Callback",
    mounted() {
      this.$nextTick(() => {
        setAccessToken();
        setIdToken();
        window.location.href = "/";
      });
    },
  };
</script>
