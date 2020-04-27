<template>
  <v-content>
    <v-tabs fixed-tabs background-color="indigo" dark>
      <v-tab to="/board"><v-icon>mdi-console</v-icon>Board</v-tab>
    </v-tabs>
    <router-view />
  </v-content>
</template>

<script>
export default {
  name: "Board",
};
</script>
