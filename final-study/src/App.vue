<template>
  <v-app id="app">
    <router-view/>
    <Main/>
  </v-app>
</template>

<script>
import Main from '@/views/Main'
export default {
  name: 'App',

  components: {
    Main
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@700&display=swap");

body .v-application {
  font-family: "Nanum Gothic";
}
</style>