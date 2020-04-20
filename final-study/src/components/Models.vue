<template>
    <div class="col">
        <div class="col-auto row-auto">
            <draggable class="dragArea list-group" :list="list1" :clone=clone
            <h3>Layer</h3>
            <draggable class="LayerList" :list="layer" :group="{ type: 'layertype', pull: 'clone', put: false}">
                <div>
                    <div class="list-group-item" id="layer" v-for="element in layer" :key="element.type">
                        {{element.type}}
                        {{element.ID}}
                    </div>
                </div>
            </draggable>
        </div>
        <!-- activation function  -->
        <div class="col-auto row-auto">
            <h3>Activation Function</h3>
            <draggble class="ActivationFunction" :lsit="activation" :group="{ type: 'layertype', pull: 'clone', put: false}">
                <div class="list-group-item" id="activation" v-for="element in activation" :key="element.type">
                        {{element.type}}
                    </div>
            </draggble>
        </div>``
        <!-- model -->
        <div class="col row">
            <div class="col-auto row-auto">
                <h3>Models</h3>
                <draggble class="Models" :list="models" :group="{ type: 'layers', put: 'clone'}">
                    <div class="list-group-item" v-for="element in models" :key="element.type">
                        {{element.type}}
                    </div>
                </draggble>
            </div>
        </div>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'
    // import modelsdata from '../assets/data/modelsdata.json'
    export default {
        name: "Models",
        components: {
            draggable 
        },
        data : () => ({
            layer: [
                { type: "conv2d", ID: "0"},
                { type: "maxPooling2d", ID: "1"}
            ],
            activation:[
                { type: "relu" },
                { type: "sigmoid" }
            ],
            models:[
                { }
            ]

        }),
        methods: {

        }
    }
</script>

<style scoped>
h1{
    color: black;
}
#layer {
    width: 200px;
    height: 100px;
    background:cyan;
    border: 2px solid black;
    text-align: center;
  }
  #activation {
      width: 200px;
      height: 100px;
      background: yellow;
      border: 2px solid black;
      text-align: center;
  }
</style>