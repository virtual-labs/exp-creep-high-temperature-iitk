const charts = {};
const schema = ["elongation", "time"];
const readingData1 = [
  [0.01, 0.38],
  //[0.89, 0.43],
  [3.37, 0.45],
  //[6.07, 0.48],
  [9.19, 0.5],
  //[12.17, 0.51],
  [15.15, 0.52],
  //[18.12, 0.53],
  [21.1, 0.53],
  //[24.08, 0.55],
  [27.05, 0.56],
  //[30.03, 0.57],
  [33.01, 0.58],
  // [35.98, 0.58],
  [38.96, 0.59],
  //[41.94, 0.60],
  [44.91, 0.61],
  // [47.89, 0.62],
  [50.87, 0.62],
  //[53.84, 0.63],
  [56.82, 0.64],
  // [59.80, 0.64],
  [62.77, 0.65],
  //[65.75, 0.66],
  [68.73, 0.66],
  //[71.70, 0.67],
  [74.68, 0.67],
  //[77.66, 0.68],
  [80.63, 0.69],
  //[83.61, 0.70],
  [86.59, 0.7],
  //[89.56, 0.71],
  [92.54, 0.72],
  //[95.52, 0.73],
  [98.49, 0.74],
  //[101.47, 0.74],
  [104.45, 0.76],
  //[107.42, 0.78],
  [110.33, 0.8],
  //[113.58, 0.83],
  [116.15, 0.86],
  //[118.50, 0.90],
  [119.4, 0.9],
  //[121.14, 0.94],
  [121.48, 0.96],
  //[123.84, 1.03],
  [123.84, 1.03],
  //[126.73, 1.10],
  [126.23, 1.04],
  //[127.40, 1.16],
  [128.95, 1.33],
];

const readingData2 = [
  [0.01, 0.41],
  //[2.71, 0.45],
  [4.94, 0.5],
  //[7.13, 0.54],
  [10.16, 0.57],
  //[13.16, 0.60],
  [16.27, 0.61],
  //[19.12, 0.63],
  [22.09, 0.65],
  //[25.07, 0.67],
  [28.05, 0.68],
  //[31.02, 0.70],
  [34.0, 0.71],
  //[36.97, 0.73],
  [39.9, 0.75],
  //[42.93, 0.78],
  [45.84, 0.79],
  //[48.88, 0.81],
  [51.86, 0.83],
  //[54.93, 0.84],
  [57.81, 0.86],
  //[60.79, 0.88],
  [63.76, 0.9],
  //[66.93, 0.92],
  [69.65, 0.94],
  //[72.69, 0.96],
  [75.73, 0.98],
  //[78.78, 1.01],
  [81.45, 1.03],
  //[84.60, 1.06],
  [87.18, 1.1],
  //[89.71, 1.14],
  [89.89, 1.1],
  //[92.54, 1.16],
  [94.78, 1.21],
  //[95.52, 1.18],
  [97.62, 1.24],
  //[97.83, 1.19],
  [99.99, 1.28],
  //[101.29, 1.32],
  [102.7, 1.38],
  //[104.03, 1.45],
];
const readingData3 = [
  [0.01, 0.87],
  [0.02, 0.78],
  [0.03, 0.75],
  [1.12, 0.92],
  [1.3, 0.83],
  [1.61, 1.01],
  [1.52, 0.97],
  [3.57, 1.06],
  [5.39, 1.11],
  [7.21, 1.15],
  [9.16, 1.19],
  [10.7, 1.23],
  [12.48, 1.31],
  [12.17, 1.27],
  [13.91, 1.36],
  [15.08, 1.45],
  [14.55, 1.4],
  [15.8, 1.53],
  [14.82, 1.49],
  [16.13, 1.59],
];

// x axis
const time1 = [
  0.01, 0.89, 3.37, 6.07, 9.19, 12.17, 15.15, 18.12, 21.1, 24.08, 27.05, 30.03, 33.01, 35.98, 38.96, 41.94, 44.91,
  47.89, 50.87, 53.84, 56.82, 59.8, 62.77, 65.75, 68.73, 71.7, 74.68, 77.66, 80.63, 83.61, 86.59, 89.56, 92.54, 95.52,
  98.49, 101.47, 104.45, 107.42, 110.33, 113.58, 116.15, 118.5, 119.4, 121.14, 121.48, 123.84, 123.84, 126.73, 126.23,
  127.4, 128.95,
];
// y axis
const elongation1 = [
  0.38, 0.43, 0.45, 0.48, 0.5, 0.51, 0.52, 0.53, 0.54, 0.55, 0.56, 0.57, 0.58, 0.58, 0.59, 0.6, 0.61, 0.62, 0.62, 0.63,
  0.64, 0.64, 0.65, 0.66, 0.66, 0.68, 0.67, 0.68, 0.69, 0.7, 0.7, 0.71, 0.72, 0.73, 0.74, 0.74, 0.76, 0.78, 0.8, 0.83,
  0.86, 0.9, 0.9, 0.94, 0.96, 1.03, 1.03, 1.1, 1.04, 1.16, 1.33,
];

const time2 = [
  0.01, 2.71, 4.94, 7.13, 10.16, 13.16, 16.27, 19.12, 22.09, 25.07, 28.05, 31.02, 34.0, 36.97, 39.9, 42.93, 45.84,
  48.88, 51.86, 54.93, 57.81, 60.79, 63.76, 66.93, 69.65, 72.69, 75.73, 78.78, 81.45, 84.6, 87.18, 89.71, 89.89, 92.54,
  94.78, 95.52, 97.62, 97.83, 99.99, 101.29, 102.7, 104.03,
];

const elongation2 = [
  0.41, 0.45, 0.5, 0.54, 0.57, 0.6, 0.61, 0.63, 0.65, 0.67, 0.68, 0.7, 0.71, 0.73, 0.75, 0.78, 0.79, 0.81, 0.83, 0.84,
  0.86, 0.88, 0.9, 0.92, 0.94, 0.96, 0.98, 1.01, 1.03, 1.06, 1.1, 1.14, 1.1, 1.16, 1.21, 1.18, 1.24, 1.19, 1.28, 1.32,
  1.38, 1.45,
];

const time3 = [
  0.01, 0.02, 0.03, 1.12, 1.3, 1.61, 1.52, 3.57, 5.39, 7.21, 9.16, 10.7, 12.48, 12.17, 13.91, 15.08, 14.55, 15.81,
  14.82, 16.13,
];

const elongation3 = [
  0.87, 0.78, 0.75, 0.92, 0.83, 1.01, 0.97, 1.06, 1.11, 1.15, 1.91, 1.24, 1.31, 1.27, 1.36, 1.45, 1.4, 1.53, 1.49, 1.59,
];

var currPos = 0;

var currentStepProgress = 1;
var sampleLength = 0;
var sampleDiameter = 0;
var sampleFinalLength = 0;
var sampleFinalDiameter = 0;

document.getElementById("step1").classList.remove("disabled");
window.refresh();

window.addEventListener("load", function () {
  setTimeout(() => {
    if (vc) vc.init();
    if (sample1) sample1.init();
    //utm.init();
  }, 1000);
});

function handle() {
  eval(`handleStep${currentStepProgress}()`);
  window.refresh();
}

function handleStep1() {
  let pane = document.getElementById("step1");
  let len = document.getElementById("step1Length").value;
  if (!len) {
    alert("Please enter the length in step 1.");
    return;
  }

  if (len < 42 || len > 45) {
    alert("Wrong readings! Please take your reading correctly via vernier caliper. (Range must be in b/w 42 to 45 mm)");
    return;
  }

  sampleLength = len;

  pane.classList.add("done");
  pane.classList.remove("active");

  let next = document.getElementById("step2");
  next.classList.add("active");
  next.classList.remove("disabled");

  currentStepProgress = 2;
}

function handleStep2() {
  let pane = document.getElementById("step2");
  let len = document.getElementById("step2Dia").value;
  if (!len) {
    alert("Please enter the diameter in step 2.");
    return;
  }

  if (len < 8 || len > 10) {
    alert("Wrong readings! Please take your reading correctly via vernier caliper. (Range must be in b/w 8 to 10 mm)");
    return;
  }

  sampleDiameter = len;

  if (vc) vc.destory();
  if (utm) utm.init();
  if (sample1) sample1.init();

  pane.classList.add("done");
  pane.classList.remove("active");

  let next = document.getElementById("step3");
  next.classList.add("active");
  next.classList.remove("disabled");

  currentStepProgress = 3;
}

function handleStep3() {
  let pane = document.getElementById("step3");

  if (!utm || !utm.isActive()) {
    alert("Please take UTM machine from menu first!");
    return;
  }

  if (!utm.isSampleLoaded()) {
    alert("Please load the sample on the UTM machine first!");
    return;
  }

  //plot blank graph
  plotGraph(
    document.getElementById("outputGraphA").getContext("2d"),
    {
      labels: time1,
      datasets: [
        {
          data: [],
          borderColor: "#3e95cd",
          fill: false,
          label: "Test 1",
        },
      ],
    },
    "Time in hrs",
    "Strain"
  );

  document.getElementById("btnNext").disabled = true;
  document.getElementById("startTest").addEventListener("click", function testHandler(e) {
    e.currentTarget.disabled = true;
    document.getElementById("btnNext").disabled = true;
    // document.getElementById("arrowNext").classList.add("disabled");
    e.currentTarget.innerHTML = "Running...";

    utm.setConfig({
      yield_point: 10, // no yield point
      breaking_point: 0.65,
      finish_point: 0.7,
    });

    setTimeout(() => {
      utm.start(0.015, 1);
    }, 4000);

    let isFirstDone = false;
    let isSecondDone = false;

    let intr1 = setInterval(() => {
      if (currPos >= readingData1.length) {
        clearInterval(intr1);
        isFirstDone = true;
        currPos = 0;
        // document.getElementById("startTest").disabled = false;
        // document.getElementById("startTest").innerHTML = "Done";
        // document.getElementById("showGraphBtn").disabled = false;
        // utm.stop();
        // document.getElementById("btnNext").disabled = false;
        // document.getElementById("arrowNext").classList.remove("disabled");
        return;
      }

      const tableData1 = readingData1; // Change to the appropriate data array for Table 1 (readingData1, readingData2, or readingData3)

      const tableBody1 = document.getElementById("testData1");

      tableBody1.innerHTML += `
        <tr>
          <td>${tableData1[currPos][0]}</td>
          <td>${tableData1[currPos][1]}</td>
        </tr>
      `;

      currPos++;

      let progress1 = (elongation1.length / tableData1.length) * currPos;

      const chart1Data = {
        labels: time1,
        datasets: [
          {
            data: elongation1.slice(0, progress1),
            borderColor: "#3e95cd",
            fill: false,
            label: "Test 1",
          },
        ],
      };

      plotGraph(document.getElementById("outputGraphA").getContext("2d"), chart1Data, "Time in hrs", "Strain");

      // document.querySelector(".menu").scrollTo(0, document.querySelector(".menu").scrollHeight);
    }, 500);

    let intr2 = setInterval(() => {
      if (!isFirstDone) return;

      if (currPos >= readingData2.length) {
        clearInterval(intr2);
        isSecondDone = true;
        currPos = 0;
        // document.getElementById("startTest").disabled = false;
        // document.getElementById("startTest").innerHTML = "Done";
        // document.getElementById("showGraphBtn").disabled = false;
        // utm.stop();
        // document.getElementById("btnNext").disabled = false;
        // document.getElementById("arrowNext").classList.remove("disabled");
        return;
      }

      const tableData2 = readingData2; // Change to the appropriate data array for Table 2 (readingData1, readingData2, or readingData3)

      const tableBody2 = document.getElementById("testData2"); // Change to the appropriate table body ID for Table 2 (testData1

      tableBody2.innerHTML += `
        <tr>
          <td>${tableData2[currPos][0]}</td>
          <td>${tableData2[currPos][1]}</td>
        </tr>
      `;

      currPos++;

      let progress1 = (elongation2.length / tableData2.length) * currPos;

      const chart1Data = {
        labels: time1,
        datasets: [
          {
            data: elongation1,
            borderColor: "#3e95cd",
            fill: false,
            label: "Test 1",
          },
          {
            data: elongation2.slice(0, progress1),
            borderColor: "#ff5733", // Choose a different color
            fill: false,
            label: "Test 2",
          },
        ],
      };
      plotGraph(document.getElementById("outputGraphA").getContext("2d"), chart1Data, "Time in hrs", "Strain");

      // document.querySelector(".menu").scrollTo(0, document.querySelector(".menu").scrollHeight);
    }, 500);

    let intr3 = setInterval(() => {
      if (!isSecondDone) return;

      if (currPos >= readingData3.length) {
        clearInterval(intr3);
        document.getElementById("startTest").disabled = false;
        document.getElementById("startTest").innerHTML = "Done";
        document.getElementById("showGraphBtn").disabled = false;
        utm.stop();
        document.getElementById("btnNext").disabled = false;
        // document.getElementById("arrowNext").classList.remove("disabled");
        return;
      }

      const tableData3 = readingData3; // Change to the appropriate data array for Table 3 (readingData1, readingData2, or readingData3)

      const tableBody3 = document.getElementById("testData3"); // Change to the appropriate table body ID for Table 3 (testData1, testData2, or testData3)

      tableBody3.innerHTML += `
        <tr>
          <td>${tableData3[currPos][0]}</td>
          <td>${tableData3[currPos][1]}</td>
        </tr>
      `;

      currPos++;

      let progress1 = (elongation3.length / tableData3.length) * currPos;

      const chart1Data = {
        labels: time1,
        datasets: [
          {
            data: elongation1,
            borderColor: "#3e95cd",
            fill: false,
            label: "Test 1",
          },
          {
            data: elongation2,
            borderColor: "#ff5733", // Choose a different color
            fill: false,
            label: "Test 2",
          },
          {
            data: elongation3.slice(0, progress1),
            borderColor: "#00ff00", // Choose a different color
            fill: false,
            label: "Test 3",
          },
        ],
      };
      plotGraph(document.getElementById("outputGraphA").getContext("2d"), chart1Data, "Time in hrs", "Strain");

      // document.querySelector(".menu").scrollTo(0, document.querySelector(".menu").scrollHeight);
    }, 500);
  });

  pane.classList.add("done");
  pane.classList.remove("active");

  let next = document.getElementById("step4");
  next.classList.add("active");
  next.classList.remove("disabled");

  currentStepProgress = 4;
}
function handleStep4() {
  let pane = document.getElementById("step4");

  pane.classList.add("done");
  pane.classList.remove("active");

  let next = document.getElementById("step5");
  next.classList.add("active");
  next.classList.remove("disabled");
  utm.destory();
  currentStepProgress = 5;

  modal = new Modal({
    title: "Can you answer the questions?",
    body: [
      {
        page: 1,
        title: "Creep depends on temperature?",
        //image: "images/creep test curve.png",
        options: ["True", "False"],
        correct: 0,
      },
      {
        page: 2,
        title: "In which of the stages, do we observe a constant deformation rate?",
        //image: "images/creep test curve.png",
        options: ["Transient creep stage", "Constant creep stage", "Fracture stage", "Steady stage creep stage"],
        correct: 3,
      },
      {
        page: 3,
        title: "In which of the following stages do the deformation rate increases and causes failure?",
        //image: "images/creep test curve.png",
        options: ["Transient creep stage", "Constant creep stage", "Fracture stage", "Steady stage creep stage"],
        correct: 2,
      },
      {
        page: 4,
        title: "Which of the following is true for Creep Test?",
        options: [
          "The slope of the strain-time graph increases with temperature and stress",
          "The slope of strain-time graph decreases with temperature",
          "The slope of strain-time graph decreases with stress",
          "The slope of strain-time graph does not depend on temperature or stress",
        ],
        correct: 0,
      },
    ],
    onClose: handleStep5,
  });
  modal.show();
}

function handleStep5() {
  let pane = document.getElementById("step5");

  pane.classList.add("done");
  pane.classList.remove("active");

  let next = document.getElementById("step6");
  next.classList.add("active");
  next.classList.remove("disabled");

  currentStepProgress = 6;

  if (vc) vc.init();
  if (utm) utm.destory();
  if (sample1) sample1.init();
}

function handleStep6() {
  let pane = document.getElementById("step6");

  pane.classList.add("done");
  pane.classList.remove("active");

  let next = document.getElementById("step7");
  next.classList.add("active");
  next.classList.remove("disabled");

  
  let btn = document.getElementById("btnNext");
  btn.disabled = true;
  btn.innerHTML = "Finished";

  currentStepProgress = 6;
}

function plotGraph(graphCtx, data, labelX, labelY) {
  let chartObj = charts[graphCtx.canvas.id];
  if (chartObj) {
    chartObj.config.data.labels = data.labels;
    chartObj.config.data.datasets = data.datasets;
    chartObj.update();
  } else {
    charts[graphCtx.canvas.id] = new Chart(graphCtx, {
      type: "line",
      data: data,
      options: {
        responsive: true,
        animation: false,
        scaleOverride: true,
        // legend: { display: false },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: labelX,
              },
              ticks: {
                beginAtZero: true,
                steps: 20,
                stepValue: 10,
                // max: Math.max(...time1),
              },
              // stacked: true,
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: labelY,
              },
              ticks: {
                beginAtZero: true,
                steps: 10,
                stepValue: 5,
                // max: Math.max(...elongation1),
              },
            },
          ],
        },
      },
    });
  }
}

function showGraph() {
  graphModal = new Modal({
    title: "Creep Test Curve",
    body: [
      {
        page: 1,
        title: "Creep Test Curve",
        image: "images/creep_test_curve.png",
      },
    ],
  });
  graphModal.show();
}
