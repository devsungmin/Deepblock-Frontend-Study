<template>
    <Model>
    <div class="row" >
        <div class="col-3">
            <h3>Layer</h3>
            <draggable class="Layer list-group" :list="layer" :group="{ type: 'type', pull: 'clone', put: false }" @change="log">
                <div class="list-group-item" v-for="element in layer" :key="element.type">
                    {{ element.type }}
                </div>
            </draggable>
        </div>

        <div class="col-3">
            <h3>Activation Function</h3>
            <draggable class="Activation list-group" :list="activation" :group="{ activation: 'activation', pull: 'clone', put: false }" @change="log">
                <div class="list-group-item"  v-for="element in activation" :key="element.activation">
                    {{ element.activation }}
                </div>
            </draggable>
        </div>

        <div class="col-3">
            <h3>Model</h3>
            <draggable class="Model list-group" :list="model" :group= "{type: 'type', put: true}" @change="log">
                <div class="list-group-item" v-for="element in model" :key="element.type">
                    {{ element.type }}
                </div>
            </draggable>
        </div>

        <!-- 버튼  -->
        <v-col class="btn-class">
            <div class="resultBtn" id='resultBtn'>
                <v-btn rounded @click="saveFile()">result</v-btn>
            </div>
            <br>
            <div class="resetBtn" id='rsetBtn'>
                <v-btn rounded @click="reset()">reset</v-btn>
            </div>
            <br>
            <div class="loadBtn" id='loadBtn'>
                <v-btn rounded @click="loadJson()">load Data</v-btn>
            </div>
        </v-col>
        <chart/>
    </div>
    </Model>
</template>

<script>
    import draggable from 'vuedraggable'
    import chart from './Chart'
    import modelsdata from '../assets/data/modelsdata.json'

    const tt = modelsdata.models
    window.tt = tt;
    const data = tt[0]

    export default {
        name: "clone",
        display: "Clone",
        order: 3,
        components: {
            draggable,
            chart
        },
        data() {
            return {
                layer: [
                    {type: "conv2d", ID: 0, loss: 1.0, id: 1},
                    {type: "maxPooling2d", ID: 1},
                    {type: "dense", ID: 2,},
                    {type: "KNN", ID: 3,},
                    {type: "LSTM", ID: 4,}
                ],
                activation: [
                    {activation: "relu", ID: 5},
                    {activation: "Sigmid", ID: 6},
                    {activation: "softmax", ID: 7},
                    {activation: "test_2", ID: 8},
                ],
                loadlayers: modelsdata.models,
                model: data
            }
        },
        methods: {
            log: function(evt) {
                window.console.log(evt);
            },
            saveFile: function() {
                const data = JSON.stringify(this.model)
                const e = document.createEvent('MouseEvents')
                e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                console.log(data);
            },
            reset: function() {
                this.model = [];
            },
            // Json 파일에 layers값 가져오기
            loadJson(){
                for( let _model of this.loadlayers){
                    for( let _layer of _model.layers ) {
                        console.log(_layer) // <- layer ok?
                    }
                }
                window.loadlayers = this.loadlayers
            }
        }
    }
</script>
<style scoped>
    .list-group {
        width: 100px;
        margin: 0 auto;
    }
    .list-group-item{
        /*width: 8vw;*/
        /*height: 3vh;*/
        width: auto;
        height: auto;
        border:3px solid #ddd;
    }
</style>