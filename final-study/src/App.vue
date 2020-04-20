<template>
  <v-app>
    <v-app-bar app color="primary" dark>
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
    </v-app-bar>
  </v-app>
</template>

<script>
    // import NavigationDrawer from "./components/NavigationDrawer";
export default {
  name: 'App',

  components: {
      // NavigationDrawer
  },

  data: () => ({
    //
  }),
};
</script>