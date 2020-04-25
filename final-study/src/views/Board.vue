<template>
    <v-content>
        <v-container>
            <v-row>
                <v-col align="center">
                    <h3>Layer</h3>
                    <draggable class="layer" :list="layer" :group="{ type: 'layer', pull: 'clone', put: false }" @change="log">
                        <v-card class="layer-group-list" id="layer" v-for="element in layer" :key="element.ID">
                            {{element.type}}
                        </v-card>
                    </draggable>
                    <div>
                        
                    </div>
                </v-col>
                <!-- activation function  -->
                <v-col>
                    <h3>Activation Function</h3>
                    <draggable class="activation" :list="activation" :group="{ type: 'activation', pull: 'clone', put: false }" @change="log">
                        <v-card class="activation-group-item" id="activation" v-for="element in activation" :key="element.ID">
                            {{element.type}}
                        </v-card>
                    </draggable>
                </v-col>
                <!-- model -->
                    <v-col>
                        <h3>Models</h3>
                        <draggable class="Models" :list="models" :group="{ type: 'models', put: true }" @change="log">
                            <v-card class="models-group-item layer_t acti_t" id="models" v-for="element in models" :key="element.ID">
                                {{element.type}}
                            </v-card>
                        </draggable>
                    </v-col>
                    <v-col>
                        <div class="resultBtn" id='resultBtn'>
                            <v-btn rounded @click="saveFile()">전송</v-btn>
                        </div>
                        <div class="resetBtn" id='rsetBtn'>
                            <v-btn rounded @click="replace()">초기화</v-btn>
                        </div>
                    </v-col>
            </v-row>
        <v-col>
            <chart/>
        </v-col>
        </v-container>
    </v-content>
</template>

<script>
    import draggable from 'vuedraggable'
    // import modelsdata from '../assets/data/modelsdata.json'
    import chart from './chart.vue'
    export default {
        name: "Board",
        components: {
            draggable,
            chart
        },
        data : () => ({
            layer: [
                { type: "conv2d", ID: "l0"},
                { type: "maxPooling2d", ID: "l1"},
                { type: "avgPooling2d", ID: "l2"},
                { type: "test_1", ID: "l3"},
                { type: "test_2", ID: "l4"},
                { type: "test_3", ID: "l5"},
                { type: "test_4", ID: "l6"}
            ],
            activation:[
                { type: "relu", ID:"a0" },
                { type: "sigmoid", ID:"a1"}
            ],
            models:[
            ]

        }),
        methods: {
            log: function(evt) {
                window.console.log(evt);
            },
            saveFile: function() {
                const data = JSON.stringify(this.models);
                const e = document.createEvent('MouseEvents');
                e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                console.log(data);
            },
            replace: function() {
                this.models = [];
            }
        }
    }
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@700&display=swap");
@font-face {
  font-family: "Nanum Gothic", sans-serif;
  src: local(NanumGothic),
    url("https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@700&display=swap")
      format("woff2");
}
body {
    font-family: "Nanum Gothic";
}
h1{ color: black; }
h3{ padding-left: 30%;}
.layer, .activation, .Models {
    position: absolute;
    width: 13%;
    height: auto;
    border: 2px solid cornflowerblue;
    background: wheat;
    border-radius: 10px;
    margin: 20px;
    text-align: center;
}
.resultBtn, .resetBtn{
    margin: 20px;
}
#layer, .layer_t{
    width: 60%;
    height: auto;
    background:cyan !important;
    border: 2px solid blue;
    text-align: center;
    border-radius: 10px;
    margin-left: 50px;
  }
  #activation, .acti_t{
    width: 60%;
    height: auto;
    background: yellow !important;
      border: 2px solid yellowgreen;
      text-align: center;
      border-radius: 10px;
      margin-left: 50px;
  }
  #models {
    width: 60%;
    height: auto;
    border: 2px solid black;
    text-align: center;
    border-radius: 10px;
    margin-left: 50px;
  }
</style>