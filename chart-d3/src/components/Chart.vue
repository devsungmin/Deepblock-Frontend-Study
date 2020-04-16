<template>
    <comment col-3>
        <div id="JSONData"/>
    </comment>
</template>

<script>
import { createGenerateChart, createDestoryChart, createLoadDataChart } from "./Billboard.js"

    export default {
        name: "billboard-chart",
        props: {
            options: {
                type: Object,
                required: true
            }
        },
        created() {
            this.generateChart = createGenerateChart(this);
            this.destoryChart = createDestoryChart(this);
            this.loadDataChart = createLoadDataChart(this);
        },
        mounted() {
            this.$chart = this.generateChart();
        },
        unmounted() {
            this.destoryChart();
        },
        watch: {
            "options.data": {
                deep: true,
                handler(newData) {
                    this.loadDataChart(newData);
                }
            }
        }
    };
</script>