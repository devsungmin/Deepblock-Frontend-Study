<template>
  <v-content>
    <v-tabs fixed-tabs background-color="indigo" dark>
      <v-tab :href="'#home'"><v-icon>mdi-home</v-icon>Home</v-tab>
      <v-tab :href="'#dataset'"><v-icon>mdi-database</v-icon>Dataset</v-tab>
      <v-tab :href="'#board'"><v-icon>mdi-console</v-icon>Board</v-tab>
      <v-tab :href="'#setting'"><v-icon>mdi-cog</v-icon>Setting</v-tab>
    </v-tabs>
      <v-row id="board">
        <v-col>
          <v-col>
            <!-- Layers -->
            <h3>Layers</h3>
            <draggable
              class="layers"
              :list="layers"
              :group="{ type: 'layers', pull: 'clone', put: false }"
              @change="log"
            >
              <div
                class="block"
                id="layers"
                v-for="element in layers"
                :key="element.ID"
              >
                {{ element.type }}
              </div>
            </draggable>
            <div></div>
          </v-col>

          <!-- Activations  -->
          <v-col>
            <h3>Activation Functions</h3>
            <draggable
              class="activations"
              :list="activations"
              :group="{ type: 'activations', pull: 'clone', put: false }"
              @change="log"
            >
              <div
                class="block"
                id="activations"
                v-for="element in activations"
                :key="element.ID"
              >
                {{ element.type }}
              </div>
            </draggable>
          </v-col>
        </v-col>

        <!-- Model -->
        <v-col>
          <h3>Model</h3>
          <draggable
            class="model"
            :list="model"
            :group="{ type: 'model', put: true }"
            @change="log"
          >
            <div
              class="block"
              id="model"
              v-for="element in model"
              :class="element.key"
              :key="element.ID"
            >
              {{ element.type }}
            </div>
          </draggable>
        </v-col>

        <v-row>
          <div class="resultBtn" id="resultBtn">
            <v-btn rounded @click="saveFile()">전송</v-btn>
          </div>
          <div class="resetBtn" id="rsetBtn">
            <v-btn rounded @click="replace()">초기화</v-btn>
          </div>
        </v-row>
        
      </v-row>
  </v-content>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "Board",
  components: {
    draggable,
  },
  data: () => ({
    layers: [
      { key: "layer", type: "conv2d", ID: "l0" },
      { key: "layer", type: "maxPooling2d", ID: "l1" },
      { key: "layer", type: "avgPooling2d", ID: "l2" },
      { key: "layer", type: "test_1", ID: "l3" },
      { key: "layer", type: "test_2", ID: "l4" },
      { key: "layer", type: "test_3", ID: "l5" },
      { key: "layer", type: "test_4", ID: "l6" },
    ],
    activations: [
      { key: "activation", type: "relu", ID: "a0" },
      { key: "activation", type: "sigmoid", ID: "a1" },
    ],
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

<style>
h1 {
  color: black;
}
h3 {
  padding-left: 30%;
}
.layers,
.activations,
.model {
  position: absolute;
  width: 13%;
  height: auto;
  border: 2px solid cornflowerblue;
  background: wheat;
  border-radius: 10px;
  margin: 20px;
  text-align: center;
}
.resultBtn,
.resetBtn {
  margin: 20px;
}
.block {
  width: 60%;
  height: auto;
  text-align: center;
  border-radius: 10px;
  margin-left: 50px;
}
#activations,
#model.activation {
  background: yellow;
  border: 2px solid yellowgreen;
}
#layers,
#model.layer {
  background: cyan;
  border: 2px solid black;
}
</style>
