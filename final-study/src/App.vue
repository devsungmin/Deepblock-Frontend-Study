<template>
  <v-app>
    <!-- <v-app-bar app color="primary" dark>
        <v-app-bar-nav-icon >

        </v-app-bar-nav-icon>
      <v-toolbar-title>Deep Block</v-toolbar-title>
      <v-spacer/>
     <v-btn icon href="/">
       <v-icon>mdi-home</v-icon>
     </v-btn>
      <v-btn icon href="/models">
        <v-icon>mdi-laptop</v-icon>
      </v-btn>
    </v-app-bar> -->
    <Models/>
  </v-app>
</template>

<script>
    import Models from "./components/Models";
export default {
  name: 'App',

  components: {
      Models
  },

  data: () => ({
    //
  }),
};
</script>