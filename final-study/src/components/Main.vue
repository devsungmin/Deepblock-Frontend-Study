<template>
  <v-app>
    <NavigationDrawer/>
    <Board/>
  </v-app>
</template>

<script>
import Board from '../views/Board'
import NavigationDrawer from './NavigationDrawer'
  export default {
    name: 'HelloWorld',
    components: { NavigationDrawer, Board },
    // data: () => ({
    //   ecosystem: [
    //     {
    //       text: 'vuetify-loader',
    //       href: 'https://github.com/vuetifyjs/vuetify-loader',
    //     }]
    // })
  }
</script>