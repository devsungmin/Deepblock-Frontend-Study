<template>
    <v-container>
      <v-row>
        <v-col cols="12" align="center">
          <!-- Model -->
          <h2>Model Layer</h2>
          <draggable
            class="model"
            :list="model"
            :group="{ type: 'model', put: true }"
            @change="log"
          >
            <v-card
              class="block"
              id="model"
              v-for="element in model"
              :class="element.key"
              :key="element.ID"
            >
              {{ element.type }}
            </v-card>
          </draggable>
        </v-col>
      </v-row>

      <v-col cols="12" align="end">
        <div class="resultBtn" id="resultBtn">
          <v-btn rounded @click="saveFile()">전송</v-btn>
        </div>
        <div class="resetBtn" id="rsetBtn">
          <v-btn rounded @click="replace()">초기화</v-btn>
        </div>
      </v-col>
    </v-container>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "Block",
  components: {
    draggable,
  },
  data: () => ({
    model: [],
  }),
  methods: {
    log: function(evt) {
      window.console.log(evt);
    },
    saveFile: function() {
      const data = JSON.stringify(this.model);
      const e = document.createEvent("MouseEvents");
      e.initEvent(
        "click",
        true,
        false,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      );
      console.log(data);
    },
    replace: function() {
      this.model = [];
    },
  },
};
</script>

<style lang="sass">
h1
  color: black
  text-align: center


.model
  position: absolute
  width:80%
  height: 100%
  border: 2px solid cornflowerblue
  background: wheat
  border-radius: 10px
  margin: 20px

.activations
  text-align: 30%

.layers.model
  text-align: 20%

.resultBtn,
.resetBtn
  margin: 20px

.block
  width: 50%
  font-size: 100%
  height: auto
  text-align: center

#activations,
#model.activation
  background: yellow
  border: 2px solid yellowgreen

#layers,
#model.layer
  background: cyan
  border: 2px solid black
</style>
