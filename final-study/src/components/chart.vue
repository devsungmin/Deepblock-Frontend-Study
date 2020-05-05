<template>
    <v-content>
        <v-container>
            <div id="JSONData"/>
        </v-container>
    </v-content>
</template>

<script>
// import { createGenerateChart, creatDestoryChart, creatLoadDataChart } from '../script/BillboardChart'
// export default {
//     name: "chart",
//     props:{
//         options: {
//             type: Object,
//             required: true
//         }
//     },
//     created() {
//         this.generateChart = createGenerateChart(this);
//         this.destoryChart = creatDestoryChart(this);
//         this.loadDataChart = creatLoadDataChart(this);
//     },
//     mounted() {
//         this.$chart = this.generateChart();
//     },
//     unmounted() {
//         this.destoryChart();
//     },
//     watch: {
//         "options.data": {
//             deep: true,
//             handler(newData) {
//                 this.loadDataChart(newData);
//             }
//         }
//     }
// }
</script>