const CHART = document.getElemenetById("lineChart");
consoler.log(CHART);

let lineChart = new Chart(CHART, {
  type: 'line',
  data: {
    labels: ["Jan", "Feb", "Mar"],
    datasets: [ {
      label: "dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75, 192, 192, 0.4)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "rgba(75, 192, 192, 1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      data: [1, 3, 2],
    }]
  }
});
