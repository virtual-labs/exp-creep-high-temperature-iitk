const charts = {};
const schema = ["elongation", "time"];
const ANIMATION_DELAY = 500;

const readingData1 = [[0.01,0.38],[0.89,0.43],[3.37,0.45],[6.07,0.48],[9.19,0.5],[12.17,0.51],[15.15,0.52],[18.12,0.53],[21.1,0.54],[24.08,0.55],[27.05,0.56],[30.03,0.57],[33.01,0.58],[35.98,0.58],[38.96,0.59],[41.94,0.6],[44.91,0.61],[47.89,0.62],[50.87,0.62],[53.84,0.63],[56.82,0.64],[59.8,0.64],[62.77,0.65],[65.75,0.66],[68.73,0.66],[71.7,0.67],[74.68,0.67],[77.66,0.68],[80.63,0.69],[83.61,0.7],[86.59,0.7],[89.56,0.71],[92.54,0.72],[95.52,0.73],[98.49,0.74],[101.47,0.74],[104.45,0.76],[107.42,0.78],[110.33,0.8],[113.58,0.83],[116.15,0.86],[118.5,0.9],[119.4,0.9],[121.14,0.94],[121.48,0.96],[123.84,1.03],[123.84,1.03],[126.73,1.1],[126.23,1.04],[127.4,1.16],[128.95,1.33]];

const readingData2 = [[0.01,0.41],[2.71,0.45],[4.94,0.5],[7.13,0.54],[10.16,0.57],[13.16,0.6],[16.27,0.61],[19.12,0.63],[22.09,0.65],[25.07,0.67],[28.05,0.68],[31.02,0.7],[34,0.71],[36.97,0.73],[39.9,0.75],[42.93,0.78],[45.84,0.79],[48.88,0.81],[51.86,0.83],[54.93,0.84],[57.81,0.86],[60.79,0.88],[63.76,0.9],[66.93,0.92],[69.65,0.94],[72.69,0.96],[75.73,0.98],[78.78,1.01],[81.45,1.03],[84.6,1.06],[87.18,1.1],[89.71,1.14],[89.89,1.1],[92.54,1.16],[94.78,1.21],[95.52,1.18],[97.62,1.24],[97.83,1.19],[99.99,1.28],[101.29,1.32],[102.7,1.38],[104.03,1.45]];

const readingData3 = [[0.01,0.87],[0.02,0.78],[0.03,0.75],[1.12,0.92],[1.3,0.83],[1.61,1.01],[1.52,0.97],[3.57,1.06],[5.39,1.11],[7.21,1.15],[9.16,1.19],[10.7,1.24],[12.48,1.31],[12.17,1.27],[13.91,1.36],[15.08,1.45],[14.55,1.4],[15.81,1.53],[14.82,1.49],[16.14,1.59]];

const graphData1 = readingData1.map((x) => ({x: x[0], y: x[1]}));
const graphData2 = readingData2.map((x) => ({x: x[0], y: x[1]}));
const graphData3 = readingData3.map((x) => ({x: x[0], y: x[1]}));

const maxX = Math.ceil(Math.max(...graphData1.map((x) => x.x, ...graphData2.map((x) => x.x, ...graphData3.map((x) => x.x)))) + 1);
const maxY = Math.ceil(Math.max(...graphData1.map((x) => x.y, ...graphData2.map((x) => x.y, ...graphData3.map((x) => x.y)))));

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

  if (len < 48 || len > 53) {
    alert("Wrong readings! Please take your reading correctly via vernier caliper. (Range must be in b/w 48 to 53 mm)");
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
      // labels: time1,
      datasets: [
        {
          data: [],
          borderColor: "#000",
          fill: false,
          label: "Test 1",
        },
      ],
    },
    "Time in hrs",
    "Elongation (ΔL)"
  );

  document.getElementById("btnNext").disabled = true;

  let isFirstDone = false;
  let isSecondDone = false;

  document.getElementById("changeSample").addEventListener("click", () => {
    document.getElementById("startTest").disabled = false;
    document.getElementById("changeSample").disabled = true;
  });

  document.getElementById("startTest").addEventListener("click", function testHandler(e) {
    e.currentTarget.disabled = true;
    document.getElementById("btnNext").disabled = true;
    // document.getElementById("arrowNext").classList.add("disabled");
    e.currentTarget.innerHTML = "Running...";

    if (isFirstDone == false) {
      let intr1 = setInterval(() => {
        if (currPos >= readingData1.length) {
          clearInterval(intr1);
          isFirstDone = true;
          currPos = 0;
          document.getElementById("startTest").innerHTML = "Start Test";
          document.getElementById("changeSample").disabled = false;
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

        let progress1 = (graphData1.length / tableData1.length) * currPos;

        const chart1Data = {
          // labels: time1,
          datasets: [
            {
              data: graphData1.slice(0, progress1),
              borderColor: "#000",
              fill: false,
              label: "Test 1",
            },
          ],
        };

        plotGraph(
          document.getElementById("outputGraphA").getContext("2d"),
          chart1Data,
          "Time in hrs",
          "Elongation (ΔL)"
        );

        // document.querySelector(".menu").scrollTo(0, document.querySelector(".menu").scrollHeight);
      }, ANIMATION_DELAY);
    }

    if (isFirstDone && isSecondDone == false) {
      let intr2 = setInterval(() => {
        if (!isFirstDone) return;

        if (currPos >= readingData2.length) {
          clearInterval(intr2);
          isSecondDone = true;
          currPos = 0;
          document.getElementById("startTest").innerHTML = "Start Test";
          document.getElementById("changeSample").disabled = false;
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

        let progress1 = (graphData2.length / tableData2.length) * currPos;

        const chart1Data = {
          // labels: time1,
          datasets: [
            {
              data: graphData1,
              borderColor: "#000",
              fill: false,
              label: "Test 1",
            },
            {
              data: graphData2.slice(0, progress1),
              borderColor: "#ff5733", // Choose a different color
              fill: false,
              label: "Test 2",
            },
          ],
        };
        plotGraph(
          document.getElementById("outputGraphA").getContext("2d"),
          chart1Data,
          "Time in hrs",
          "Elongation (ΔL)"
        );

        // document.querySelector(".menu").scrollTo(0, document.querySelector(".menu").scrollHeight);
      }, ANIMATION_DELAY);
    }

    if (isFirstDone && isSecondDone) {
      let intr3 = setInterval(() => {
        if (!isSecondDone) return;

        if (currPos >= readingData3.length) {
          clearInterval(intr3);
          // document.getElementById("startTest").disabled = false;
          document.getElementById("startTest").innerHTML = "Done";
          // document.getElementById("showGraphBtn").disabled = false;
          utm.stop();
          document.getElementById("btnNext").disabled = false;
          // document.getElementById("arrowNext").classList.remove("disabled");
          let cnt = document.getElementById("furnaceTemp");
          let count = 800;
          let intr = setInterval(() => {
            if (count < 25) {
              clearInterval(intr);
              return;
            }
            cnt.innerHTML = count--;
           }, 30);
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

        let progress1 = (graphData3.length / tableData3.length) * currPos;

        const chart1Data = {
          // labels: time1,
          datasets: [
            {
              data: graphData1,
              borderColor: "#000",
              fill: false,
              label: "Test 1",
            },
            {
              data: graphData2,
              borderColor: "#ff5733", // Choose a different color
              fill: false,
              label: "Test 2",
            },
            {
              data: graphData3.slice(0, progress1),
              borderColor: "#3e95cd", // Choose a different color
              fill: false,
              label: "Test 3",
            },
          ],
        };
        plotGraph(
          document.getElementById("outputGraphA").getContext("2d"),
          chart1Data,
          "Time in hrs",
          "Elongation (ΔL)"
        );

        // document.querySelector(".menu").scrollTo(0, document.querySelector(".menu").scrollHeight);
      }, ANIMATION_DELAY);
    }
  });

  document.getElementById("startTest").innerHTML = "Heating up...";
  let cnt = document.getElementById("furnaceTemp");
  let count = 25;
  let intr = setInterval(() => {
    if (count > 800) {
      clearInterval(intr);
      document.getElementById("startTest").innerHTML = "Start Test";
      document.getElementById("startTest").disabled = false;
      return;
    }
    cnt.innerHTML = count++;
   }, 10);

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
}

function handleStep5() {
  let pane = document.getElementById("step5");

  pane.classList.add("done");
  pane.classList.remove("active");

  let next = document.getElementById("step6");
  next.classList.add("active");
  next.classList.remove("disabled");

  let btn = document.getElementById("btnNext");
  btn.disabled = true;
  btn.innerHTML = "Finished";

  currentStepProgress = 5;

  modal = new Modal({
    title: "Can you answer the questions?",
    body: [
      {
        "page": 1,
        "title": "In which stage, the creep rate is constant?",
        "options": ["Primary", "Secondary", "Tertiary", "It is not constant in all the three stages"],
        "correct": 1
      },
      {
        "page": 2,
        "title": "In which of the following tests load is generally kept constant?",
        "options": ["Creep testing", "Compression Testing", "Impact Testing", "Tensile Testing"],
        "correct": 0
      },
      {
        "page": 3,
        "title": "It is given that aluminium can creep at and above 0.4 Tm, where Tm has its usual meaning. Calculate the minimum temperature (in oC) at which aluminium can creep? Melting point of aluminum is 660 oC",
        "options": ["Room temperature", "264", "100.2", "660"],
        "correct": 2
      },
      {
        "page": 4,
        "title": "What is/are true for Stage III (tertiary stage) of creep?",
        "options": ["The strain rate is the minimum in this stage", "This stage is of shorter duration than secondary stage", "The material deforms with a continuously decreasing creep rate", "The strain hardening rate balances the recovery rate"],
        "correct": 1
      },
      {
        "page": 5,
        "title": "In which stage the effect of strain hardening is more than softening?",
        "options": ["Stage I", "Stage II", "Stage III", "Strain hardening is never higher in any stage"],
        "correct": 0
      },
      {
        "page": 6,
        "title": "Creep rate in the tertiary stage",
        "options": ["Increases", "Decreases", "Remains constant", "First increases and then decreases"],
        "correct": 0
      },
      {
        "page": 7,
        "title": "It is given that copper can creep at and above 0.5 Tm, where Tm has its usual meaning. Calculate the minimum temperature (in oC) at which Copper can creep? Melting point of copper is 1084 oC",
        "options": ["542", "405.5", "Room temperature", "1084"],
        "correct": 1
      },
      {
        "page": 8,
        "title": "Void formation takes place in which stage?",
        "options": ["Stage II", "Stage III", "Stage I", "When instantaneous strain develops"],
        "correct": 1
      },
      {
        "page": 9,
        "title": "In which stage there is a balance between strain hardening and softening?",
        "options": ["Stage III", "When instantaneous stain develops.", "Stage II", "Stage I"],
        "correct": 2
      },
      {
        "page": 10,
        "title": "Which stage is of longest duration?",
        "options": ["Stage I", "Duration where instantaneous strain develops", "Stage III", "Stage II"],
        "correct": 3
      },
      {
        "page": 11,
        "title": "Time to start the tertiary creep stage __________ with increase in the temperature",
        "options": ["Decrease", "Increases", "Remains constant", "It first decreases and then increases with time"],
        "correct": 0
      }
    ],
    onClose: () => {
      let pane = document.getElementById("step6");
      pane.classList.add("done");
      pane.classList.remove("active");
    },
  });
  modal.show();
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
              type: 'linear',
              display: true,
              scaleLabel: {
                display: true,
                labelString: labelX,
              },
              ticks: {
                beginAtZero: true,
                max: maxX,
              },
              stacked: true,
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
                max: maxY,
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
        image: "images/img/results.jpeg",
      },
    ],
  });
  graphModal.show();
}
