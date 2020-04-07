<template>
    <div class="row" >
        <div class="col-3">
            <h3>Model</h3>
            <draggable class="dragArea list-group" :list="list1" :group="{ name: 'layers', pull: 'clone', put: false }" @change="log">
                <div class="list-group-item" v-for="element in list1" :key="element.name">
                    {{ element.name }}
                </div>
            </draggable>
        </div>

        <div class="col-3">
            <h3>Activation Function</h3>
            <draggable class="dragArea list-group" :list="list2" :group="{ name: 'layers', pull: 'clone', put: false }" @change="log">
                <div class="list-group-item"  v-for="element in list2" :key="element.name">
                    {{ element.name }}
                </div>
            </draggable>
        </div>

        <div class="col-3">
            <h3>Layer</h3>
            <draggable class="dragArea list-group" :list="list3" group="layers" @change="log">
                <div class="list-group-item" v-for="element in list3" :key="element.name">
                    {{ element.name }}
                </div>
            </draggable>
        </div>

        <rawDisplayer class="col-3" :value="list1" title="List1" />
        <rawDisplayer class="col-3" :value="list2" title="List2" />
        <rawDisplayer class="col-3" :value="list3" title="List3" />

        <!-- 전송하기 버튼  -->
        <v-col class="text-center" cols="12" sm="4">
            <div class="resultBtn" id='resultBtn'>
                <v-btn rounded @click="saveFile()">전송</v-btn>

            </div>
        </v-col>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'

    export default {
        name: "clone",
        display: "Clone",
        order: 3,
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
            },
            saveFile: function() {
                const data = JSON.stringify(this.list3)
                const blob = new Blob([data], {type: 'text/plain'})
                const e = document.createEvent('MouseEvents'),
                    a = document.createElement('list3');
                a.download = "layer.json";
                a.href = window.URL.createObjectURL(blob);
                a.dataset.downloadurl = ['layer/json', a.download, a.href].join(':');
                e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                a.dispatchEvent(e);
                console.log(data)
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