<template>
    <div class="small">
        <line-chart :data="chartData"></line-chart>
    </div>
</template>

<script>
    import LineChart from './LineChart.js'

    export default {
        components: {
            LineChart
        },
        data () {
            return {
                chartData: [['Jan', 44], ['Feb', 27], ['Mar', 60], ['Apr', 55], ['May', 37], ['Jun', 40], ['Jul', 69], ['Aug', 33], ['Sept', 76], ['Oct', 90], ['Nov', 34], ['Dec', 22]]
            }
        }
    }
</script>

<style>
    .small {
        max-width: 600px;
        margin:  150px auto;
    }
</style>