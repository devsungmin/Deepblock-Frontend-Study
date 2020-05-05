<template>
  <v-content>
    <v-tabs fixed-tabs background-color="indigo" dark>
      <v-tab to=""><v-icon>mdi-console</v-icon>Board</v-tab>
    </v-tabs>
    <pallet/>
    <router-view/>
  </v-content>
</template>

<script>
import pallet from '@/components/Pallet.vue'
export default {
  name: "Board",
  components: {
    pallet
  },
};
</script>
