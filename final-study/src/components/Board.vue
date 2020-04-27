<template>
  <v-content>
    <v-tabs fixed-tabs background-color="indigo" dark>
      <v-tab to="/board"><v-icon>mdi-home</v-icon>Home</v-tab>
      <v-tab to="/board/datasetboard"><v-icon>mdi-database</v-icon>Dataset</v-tab>
      <v-tab to="/board/blockboard"><v-icon>mdi-console</v-icon>Board</v-tab>
      <v-tab to="/board/settingboard"><v-icon>mdi-cog</v-icon>Setting</v-tab>
    </v-tabs>
    <router-view/>
  </v-content>
</template>

<script>
export default {
  name: "Board",
};
</script>