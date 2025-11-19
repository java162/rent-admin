let foyda = document.querySelector(".foyda");
let oy = document.querySelector(".oy");
let qoshish = document.querySelector(".qoshish");
let summa = document.querySelector(".summa");

const options = {
  chart: {
    height: "100%",
    maxWidth: "100%",
    type: "area",
    fontFamily: "Inter, sans-serif",
    dropShadow: { enabled: false },
    toolbar: { show: false },
  },
  tooltip: { enabled: true, x: { show: false } },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.55,
      opacityTo: 0,
      shade: "#1C64F2",
      gradientToColors: ["#1C64F2"],
    },
  },
  dataLabels: { enabled: false },
  stroke: { width: 10 },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: { left: 2, right: 2, top: 0 },
  },
  series: [
    {
      name: "RENT FOYDA",
      data: [100, 1100, 10000, 400000, 10, 400000, 1000, 200],
      color: "#1A56DB",
    },
  ],
  xaxis: {
    categories: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun"],
    labels: { show: false },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: { show: false },
};

let chart;
if (
  document.getElementById("area-chart") &&
  typeof ApexCharts !== "undefined"
) {
  chart = new ApexCharts(document.getElementById("area-chart"), options);
  chart.render();
}

let jami = options.series[0].data.reduce((a, b) => a + b, 0);
summa.textContent = jami + " $";

qoshish.addEventListener("click", () => {
  let yangifoyda = Number(foyda.value);
  let yangioy = oy.value;

  options.series[0].data.push(yangifoyda);
  options.xaxis.categories.push(yangioy);
  chart.updateSeries([{ data: options.series[0].data }]);
  chart.updateOptions({ xaxis: { categories: options.xaxis.categories } });
  let jami = options.series[0].data.reduce((a, b) => a + b, 0);
  summa.textContent = jami + " $";

  foyda.value = "";
  oy.value = "";
});
