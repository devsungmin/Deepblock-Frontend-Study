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
      <v-btn icon href="/board">
        <v-icon>mdi-laptop</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- <Helloworld/> -->
    <Board/>
  </v-app>
</template>

<script>
// import Helloworld from './components/HelloWorld'
import Board from './components/Board'
export default {
  name: 'App',

  components: {
    Board
    // Helloworld
  },

  data: () => ({
    //
  }),
};
</script>