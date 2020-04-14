import { bb } from "billboard.js";

export const createGenerateChart = (instance) => {
    return () => {
        const options = Object.assign({
            bindto: instance.$el,
        }, instance.options);
        return bb.generate(options);
    }
}


export const createLoadDataChart = (instance) => {
    return (data) => {
        if(!instance.$chart){
            instance.$chart = instance.generateChart(instance.options);
        }
        instance.$chart.load(data);
    }
}


var chart = bb.generate({
    data: {
        json: [
            {name: "CNN", loss: 0.96, excu: 0.97, epoch: 10},
            {name: "RNN", loss: 0.058, excu: 0.89, epoch: 20},
            {name: "SNN", loss: 0.98, excu: 0.67, epoch: 30},
            {name: "DNN", loss: 0.0001, excu: 0.79, epoch: 40}
        ],
        keys: {
            value: ["loss", "excu"]
        }
    },
    bindto: "#JSONData"
});

setTimeout(function() {
    chart.load({
        json: [
            {name: "CNN", loss: 0.96, excu: 0.97, epoch: 10},
            {name: "RNN", loss: 0.058, excu: 0.89, epoch: 20},
            {name: "SNN", loss: 0.98, excu: 0.67, epoch: 30},
            {name: "DNN", loss: 0.0001, excu: 0.79, epoch: 40}
        ],
        keys: {
            value: ["loss", "excu"]
        }
    });
}, 5);



