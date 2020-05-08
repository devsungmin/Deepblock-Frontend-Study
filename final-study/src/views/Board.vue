<template>
  <v-content>
    <v-tabs fixed-tabs background-color="indigo" dark>
      <v-tab to=""><v-icon>mdi-console</v-icon>Board</v-tab>
    </v-tabs>
    <pallete>
    </pallete>
    <router-view/>
  </v-content>
</template>

<script>
import pallete from '@/components/Pallete.vue'
export default {
  name: "Board",
  components: {
    pallete
  },
};
</script>
