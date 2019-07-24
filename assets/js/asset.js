//!Chart
var ctx = document.getElementById("myChart").getContext("2d");
var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
gradientStroke.addColorStop(0, "#02afd1");

gradientStroke.addColorStop(1, "#6ae6a7");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["1 Dec", "8 Dec", "16 Dec", "31 Dec"],
    datasets: [
      {
        label: "Monthly",
        lineTension: 0.3,
        backgroundColor: "rgba(78, 115, 223, 0.05)",
        borderColor: gradientStroke,
        pointBorderColor: gradientStroke,
        pointBackgroundColor: gradientStroke,
        pointHoverBackgroundColor: gradientStroke,
        pointHoverBorderColor: gradientStroke,
        pointHoverRadius: 3,
        pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [12, 19, 3, 17, 6, 3, 7]
      }
    ]
  }
});

//!Select
$("#tableMenu a").click(function(e) {
  e.preventDefault();
  var selText = $(this).text();
  $("#tableButton").text(selText);
});
