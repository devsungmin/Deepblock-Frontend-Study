<template>
    <div id="chart"></div>
</template>

<script>
    import {
        createGenerateChart,
        createLoadDataChart
    } from "./Bboard.js";

    export default {
        name: "billboard-chart",
        props: {
            options: {
                type: Object,
                required: true
            }
        },
        created() {
            // instance methods
            this.generateChart = createGenerateChart(this);
            this.loadDataChart = createLoadDataChart(this);
        },
        mounted() {
            this.$chart = this.generateChart();
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