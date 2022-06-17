// https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001

// fetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001", {
//   method: "GET",
// }).then((response) => {
//   console.log(response);
// });


function sohRoute(){
  var labels = [];
var arr = [];
function getRandomInt() {
  let no = Math.floor((Math.random() * 10) + 1)
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
      label: "SOH",
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
}
