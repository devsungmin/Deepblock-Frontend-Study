<template>
  <v-navigation-drawer v-model="pallet" clipped app>
    <v-combobox label="Selete Input Type" :items="items" />
      <v-list rounded nav class="sidebar-list layer">
        <draggable class="pallet">
        <v-list-item
          class="layers"
          v-for="layer in layers"
          :key="layer.type"
          @click="moveItem"
        >
          <v-list-item-content>
            <v-list-item-title class="block">
              {{ layer.type }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </draggable>
      </v-list>
  </v-navigation-drawer>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "Pallet",
  components: {
    draggable,
  },
  data: () => ({
    layers: [
      { key: "layer", type: "conv2d", ID: "l0" },
      { key: "layer", type: "maxPool2d", ID: "l1" },
      { key: "layer", type: "avgPool2d", ID: "l2" },
      { key: "layer", type: "test_1", ID: "l3" },
      { key: "layer", type: "test_2", ID: "l4" },
      { key: "layer", type: "test_3", ID: "l5" },
      { key: "layer", type: "test_4", ID: "l6" },
    ],
    items: ["Layer", "compile", "Fit"],
  }),
  methods: {
    moveItem: function() {
      console.log("클릭 함!");
    },
  },
};
</script>

<style lang="sass">
h1
  color: black
  text-align: center

.block
  width: 50%
  font-size: 100%
  height: auto
  text-align: center

.layers
  width: auto
  background: cyan
  border: 2px solid black
  text-align: center
</style>
