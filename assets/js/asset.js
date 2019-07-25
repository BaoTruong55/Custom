//!Chart
var ctx = document.getElementById("myChart").getContext("2d");
var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
gradientStroke.addColorStop(0, "#02afd1");
gradientStroke.addColorStop(1, "#6ae6a7");
var contData = [
  50,
  160,
  55,
  156,
  150,
  245,
  123,
  213,
  156,
  176,
  56,
  34,
  178,
  21,
  34,
  56,
  67,
  154,
  123,
  154,
  160,
  126,
  176,
  123,
  99,
  87,
  65,
  78,
  98,
  65,
  87,
  45
];
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "1 Dec",
      "2 Dec",
      "3 Dec",
      "4 Dec",
      "5 Dec",
      "6 Dec",
      "7 Dec",
      "8 Dec",
      "9 Dec",
      "10 Dec",
      "11 Dec",
      "12 Dec",
      "13 Dec",
      "14 Dec",
      "15 Dec",
      "16 Dec",
      "17 Dec",
      "18 Dec",
      "19 Dec",
      "20 Dec",
      "21 Dec",
      "22 Dec",
      "23 Dec",
      "24 Dec",
      "25 Dec",
      "26 Dec",
      "27 Dec",
      "28 Dec",
      "29 Dec",
      "30 Dec",
      "31 Dec"
    ],
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
        pointRadius: 0,
        pointBorderWidth: 2,
        data: contData
      }
    ]
  },
  options: {
    legend: {
      display: false
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem) {
          return tooltipItem.yLabel;
        }
      },
      backgroundColor: 'rgba(255, 255, 2555, 255)',
      titleFontColor:  '#afb4b9',
      titleFontSize: 16,
      bodyFontColor: '#afb4b9',
      bodyFontSize: 16,
      shadowOffsetX: 3,
      shadowOffsetY: 3,
      shadowBlur: 10,
      shadowColor: 'rgba(0, 0, 0, 0.5)'
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "rgba(0,0,0,0.5)",
            fontStyle: "bold",
            beginAtZero: true,
            maxTicksLimit: 50,
            padding: 20
          },
          gridLines: {
            drawTicks: false,
            display: true,
            borderDash: [10],
            lineWidth: 3
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            zeroLineColor: "transparent",
            display: false
          },
          ticks: {
            padding: 20,
            fontColor: "rgba(0,0,0,0.5)",
            fontStyle: "bold",
            maxTicksLimit: 4
          }
        }
      ]
    }
  }
});

//!Select
$("#tableMenu a").click(function(e) {
  e.preventDefault();
  var selText = $(this).text();
  $("#tableButton").text(selText);
});
