<template>
  <v-navigation-drawer v-model="pallet" clipped app>

    <v-text-field
      v-model="search"
      hide-details
      placeholder="search"
      prepend-inner-icon="mdi-magnify"
    />

    <v-list class="sidebar-list layer" nav rounded elevation expand>
      <v-list-group>
        <template v-slot:activator>
          <v-list-item-title><v-icon style="margin-right: 8%">mdi-layers</v-icon>Convolutional</v-list-item-title>
        </template>
        <draggable :list="convol" :group="{ type: 'convol', pull: 'clone'}">
          <v-list-item
            class="convol"
            v-for="con in convol"
            :key="con.type"
            :group="{ type: 'type', put: false }"
          >
            <v-list-item-content>
              <v-list-item-title class="block">
                {{ con.type }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </draggable>
      </v-list-group>

       <v-list-group>
        <template v-slot:activator>
          <v-list-item-title><v-icon style="margin-right: 8%">mdi-layers</v-icon>Normalization</v-list-item-title>
        </template>
        <draggable :list="nomalization" :group="{ type: 'nomalization', pull: 'clone'}">
          <v-list-item
            class="nomalization"
            v-for="nom in nomalization"
            :key="nom.type"
            :group="{ type: 'type', put: false }"
          >
            <v-list-item-content>
              <v-list-item-title class="block">
                {{ nom.type }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </draggable>
      </v-list-group>

       <v-list-group>
        <template v-slot:activator>
          <v-list-item-title><v-icon style="margin-right: 8%">mdi-layers</v-icon>Pooling</v-list-item-title>
        </template>
        <draggable :list="pooling" :group="{ type: 'pooling', pull: 'clone'}">
          <v-list-item
            class="pooling"
            v-for="pool in pooling"
            :key="pool.type"
            :group="{ type: 'type', put: false }"
          >
            <v-list-item-content>
              <v-list-item-title class="block">
                {{ pool.type }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </draggable>
      </v-list-group>
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
    convol: [
      { key: "convol", type: "conv1d", ID: "c0" },
      { key: "convol", type: "conv2d", ID: "c1" },
      { key: "convol", type: "conv2dTranspose", ID: "c2" },
      { key: "convol", type: "conv3d", ID: "c3" },
      { key: "convol", type: "cropping2D", ID: "c4" },
      { key: "convol", type: "depthwiseConv2d", ID: "c5" },
      { key: "convol", type: "separableConv2d", ID: "c6" },
      { key: "convol", type: "upSampling2d", ID: "c7" }
    ],
    nomalization: [
      { key: "nomalization", type: "batchNormalization", ID: "n0" },
      { key: "nomalization", type: "layerNormalization", ID: "n1" }
    ],
    pooling: [
      { key: "pooling", type: "averagePooling1d", ID: "p0"},
      { key: "pooling", type: "averagePooling2d", ID: "p1"},
      { key: "pooling", type: "averagePooling3d", ID: "p2"},
      { key: "pooling", type: "globalAveragePooling1d", ID: "p3"},
      { key: "pooling", type: "globalAveragePooling2d", ID: "p4"},
      { key: "pooling", type: "globalMaxPooling1d", ID: "p5"},
      { key: "pooling", type: "globalMaxPooling2d", ID: "p6"},
      { key: "pooling", type: "maxPooling1d", ID: "p7"},
      { key: "pooling", type: "maxPooling2d", ID: "p8"},
      { key: "pooling", type: "maxPooling3d", ID: "p9"},
    ], 
  })
};
</script>

<style lang="sass">
h1
  color: black
  text-align: center

#searchbtn
  margin-top: 5%
  align: end

.v-list-item__content
  padding: 2%
  margin-bottom: 2%
  font-size: 16px

.v-list-item,
.v-list--nav .v-list-item:not(:last-child):not(:only-child),
.v-list--rounded .v-list-item:not(:last-child):not(:only-child)
  margin-bottom: 2%

.v-list-group
  margin-bottom: 20px

.block
  width: 50%
  font-size: 100%
  height: auto
  margin-left:5%

.convol,
.pooling,
.nomalization
  width: auto
  font-size: 10px
</style>
