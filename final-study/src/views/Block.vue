<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12"> </v-col>

      <!-- Model -->
      <v-col cols="12">
        <h2 style="margin-left: 42%">Model</h2>
        <draggable
          class="model"
          :list="model"
          :group="{ type: 'model', put: true }"
          @change="log"
        >
          <v-card
            v-model="model"
            class="modelblock"
            id="model"
            v-for="element in model"
            :class="element.key"
            :key="element.ID"
          >
            {{ element.type }}
          </v-card>
        </draggable>
      </v-col>

      <v-col cols="12" align="end">
        <div class="resultBtn" id="resultBtn">
          <v-btn rounded @click="saveFile()">전송</v-btn>
        </div>
        <div class="resetBtn" id="rsetBtn">
          <v-btn rounded @click="replace()">초기화</v-btn>
        </div>
      </v-col>
    </v-row>
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
  width: 88%
  height: 100%
  border: 2px solid #78909C
  background: white
  border-radius: 10px
  margin-top: 20px
  text-align: center
  overflow: inherit

.resultBtn,
.resetBtn
  margin: 20px

.block
  width: 50%
  font-size: 100%
  margin-top: 2%
  margin-bottom: 2%

.modelblock
  width: 50%
  font-size: 100%
  margin-top: 2%
  margin-bottom: 2%
  margin-left:25%

#model.pooling
  background: #B2DFDB
  border: 2px solid #26A69A

#model.convol
  background: #E1BEE7
  border: 2px solid #AB47BC

#model.nomalization
  background: #DCE775
  border: 2px solid #827717
</style>
