<template>
    <div class="row">
    <div class="col-3">
      <h3>Model</h3>
      <draggable
        class="dragArea list-group"
        :list="list1"
        :group="{ name: 'people', pull: 'clone', put: false }"
        @change="log"
      >
        <div
          class="list-group-item"
          v-for="element in list1"
          :key="element.name"
        >
          {{ element.name }}
        </div>
      </draggable>
    </div>

    <div class="col-3">
     <h3>Activation Function</h3>
      <draggable
        class="dragArea list-group"
        :list="list2"
        :group="{ name: 'people', pull: 'clone', put: false }"
        @change="log"
      >
        <div
          class="list-group-item"
          v-for="element in list2"
          :key="element.name"
        >
          {{ element.name }}
        </div>
      </draggable>
    </div>

    <div class="col-3">
      <h3>Layer</h3>
      <draggable
        class="dragArea list-group"
        :list="list3"
        group="people"
        @change="log"
      >
        <div
          class="list-group-item"
          v-for="element in list3"
          :key="element.name"
        >
          {{ element.name }}
        </div>
      </draggable>
    </div>

    <rawDisplayer class="col-3" :value="list1" title="List 1" />

    <rawDisplayer class="col-3" :value="list2" title="List 2" />

    <rawDisplayer class="col-3" :value="list3" title="List 3" />
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: "clone",
  display: "Clone",
  order: 2,
  components: {
    draggable
  },
  data() {
    return {
      list1: [
        { name: "CNN", id: 1 },
        { name: "RNN", id: 2 },
        { name: "SNN", id: 3 },
        { name: "Layer", id: 4 },
        { name: "KNN", id: 5 },
        { name: "LSTM", id: 6 }
      ],
      list2: [
        {name: "ReLu", id: 7},
        {name: "Sigmid", id: 8},
        {name: "test_1", id: 9},
        {name: "test_2", id: 10},
      ],
      list3: [
        {name: "test Model", id: 11}
      ]
    };
  },
  methods: {
    log: function(evt) {
      window.console.log(evt);
    }
  }
};
</script>
<style scoped></style>
