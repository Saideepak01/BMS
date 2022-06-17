// https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001

// fetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001", {
//   method: "GET",
// }).then((response) => {
//   console.log(response);
// });

var labels = [];
var arr = [];
let min = 1;
let max = 45;
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let no = Math.floor(Math.random() * (max - min) + min);
  arr.push(no);
}
for (let i = 1; i <= 45; i++) {
  getRandomInt();
}
console.log(arr);
for (let i = 1; i <= 30; i++) {
  labels.push(i);
}

const data = {
  labels: labels,
  datasets: [
    {
      label: "SOC",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: arr,
    },
  ],
};
console.log(data);
const config = {
  type: "line",
  data: data,
  options: {},
};

const myChart = new Chart(document.getElementById("myChart"), config);
