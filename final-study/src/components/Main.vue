<template>
  <v-app>
    <Board/>
     <Nav/>
     <router-view/>
  </v-app>
</template>

<script>
import Nav from './NavigationDrawer'
import Board from '../views/Board'
  export default {
    name: 'Main',
    components: {
      'board': Board,
      Nav
      },
  }
</script>