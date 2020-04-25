// import {bb} from "billboard.js";

// export const createGenerateChart = (instance) => {
//     return () => {
//         const options = Object.assign({
//             bindto: instance.$el,
//         }, instance.options);
//         return bb.generate(options);
//     }
// }

// export const creatDestoryChart = (instance) => {
//     return () => {
//         try {
//             instance.$chart.destory();
//             instance.$chart = null;
//         } catch (error) {
//             console.error('chart error!!', error);
//         }
//     }
// }

// export const creatLoadDataChart = (instance) => {
//     return(data) => {
//         if(!instance.$chart) {
//             instance.$chart = instance.generateChart(instance.options);
//         }
//         instance.$chart.load(data);
//     }
// }

// var data = [
//     {name: "CNN", loss: 0.96, excu: 0.97, epoch: 10},
//     {name: "RNN", loss: 0.058, excu: 0.89, epoch: 20},
//     {name: "SNN", loss: 0.047, excu: 0.67, epoch: 30}
// ]

// var chart = bb.generate({
//     data: {
//         json: data,
//         keys: { value: ["loss", "excu", "epoch"] }
//     },
//     bindto: "#JSONData"
// });

// setTimeout(function() { 
//     data.push({name: 'TNN', loss: 0.001, excu: 0.67, epoch: 30})
//     chart.load({
//         json: data,
//         keys: {
//             value: ["loss", "excu", "epoch"]
//         }
//     });
// }, 3000);