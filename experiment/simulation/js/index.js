const charts = {};
const schema = ["elongation", "time"];
const readingData = [
  [0.01, 0.382],
  [0.89149, 0.425],
  [3.36693, 0.4535],
  [6.06603, 0.479],
  [9.19301, 0.5015],
  [12.16965, 0.5135],
  [15.14629, 0.523],
  [18.12293, 0.5335],
  [21.09957, 0.538],
  [24.07621, 0.549],
  [27.05285, 0.557],
  [30.02949, 0.567],
  [33.00613, 0.5755],
  [35.98277, 0.584],
  [38.95941, 0.5925],
  [41.93605, 0.5985],
  [44.91269, 0.606],
  [47.88933, 0.615],
  [50.86597, 0.6215],
  [53.84261, 0.629],
  [56.81925, 0.637],
  [59.79589, 0.644],
  [62.77253, 0.6485],
  [65.74917, 0.655],
  [68.72581, 0.6595],
  /*[71.70245, 0.667],
 [74.67909, 0.6735],
 [77.65573, 0.6835],
 [80.63237, 0.6935],
 [83.60901, 0.701],
 [86.58565, 0.7045],
 [89.56229, 0.71],
 [92.53893, 0.7175],
 [95.51557, 0.725],
 [98.49221, 0.735],
 [101.46885, 0.7435],
 [104.44549, 0.7615],
 [107.42213, 0.7775],
 [110.33263, 0.799],
 [113.57895, 0.828],
 [116.15361, 0.857],
 [118.50185, 0.896],
 [119.40219, 0.8965],
 [121.13503, 0.9365],
 [121.47849, 0.963],
 [123.83876, 1.0275],
 [123.8409, 1.028],
 [126.72895, 1.102],
 [126.23285, 1.0385],
 [127.3987, 1.157],
 [128.95016, 1.3255], */
];

/*[
  [0.01, 0.4055],
  [2.71055, 0.45],
  [4.9443, 0.499],
  [7.1259, 0.5405],
  [10.15515, 0.571],
  [13.16186, 0.5965],
  [16.2708, 0.614],
  [19.11514, 0.633],
  [22.09178, 0.6505],
  [25.06842, 0.666],
  [28.04506, 0.683],
  [31.0217, 0.698],
  [33.99834, 0.706],
  [36.97498, 0.7285],
  [39.8965, 0.7505],
  [42.92826, 0.777],
  [45.84477, 0.793],
  [48.88154, 0.8115],
  [51.85818, 0.828],
  [54.93405, 0.8435],
  [57.81146, 0.86],
  [60.7881, 0.877],
  [63.76474, 0.8965],
  [66.93432, 0.9165],
  [69.65188, 0.9415],
  [72.69467, 0.9585],
  [75.72643, 0.9835],
  [78.78024, 1.012],
  [81.44819, 1.031],
  [84.60123, 1.0625],
  [87.18098, 1.096],
  [89.70699, 1.138],
  [89.89303, 1.104],
  [92.53893, 1.1585],
  [94.77777, 1.206],
  [95.51557, 1.1845],
  [97.61812, 1.236],
  [97.83074, 1.1885],
  [99.99325, 1.283],
  [101.28845, 1.324],
  [102.70361, 1.3835],
  [104.03207, 1.445],
  
  




];*/

// x axis
const time1 = [
  0.01, 0.89149, 3.36693, 6.06603, 9.19301, 12.16965, 15.14629, 18.12293, 21.09957, 24.07621, 27.05285, 30.02949,
  33.00613, 35.98277, 38.95941, 41.93605, 44.91269, 47.88933, 50.86597, 53.84261, 56.81925, 59.79589, 62.77253,
  65.74917, 68.72581 /*71.70245, 74.67909,77.65573,80.63237,83.60901,86.58565,89.56229,92.53893,
  95.51557,98.49221,101.46885,104.44549,107.42213,110.33263,113.57895,116.15361,118.50185,119.40219,121.13503,121.47849,123.83876,
  123.8409,126.72895,126.23285,127.3987,128.95016,*/,
];
// y axis
const elongation1 = [
  0.382, 0.425, 0.4535, 0.479, 0.5015, 0.5135, 0.523, 0.5335, 0.538, 0.549, 0.557, 0.567, 0.5755, 0.584, 0.5925, 0.5985,
  0.606, 0.615, 0.6215, 0.629, 0.637, 0.644, 0.6485, 0.655,
  0.6595 /*0.667,0.6735,0.6835,0.6935,0.701,0.7045,0.71,0.7175,0.725,0.735,0.7435,0.7615,0.7775,0.799,0.828,0.857,0.896,0.8965,0.9365,
  0.963,1.0275,1.028,1.102,1.0385,1.157,1.3255,*/,
];

/*const time2 =[
  0.01,2.71055,4.9443,7.1259,10.15515,13.16186,16.2708,19.11514,22.09178,25.06842,28.04506,31.0217,33.99834,36.97498,39.8965,42.92826,45.84477,48.88154,
  51.85818,54.93405,57.81146,60.7881,63.76474,66.93432,69.65188,72.69467,75.72643,78.78024,81.44819,84.60123,87.18098,89.70699,89.89303,92.53893,
  94.77777,95.51557,97.61812,97.83074,99.99325,101.28845,102.70361,104.03207,
  
];

const elongation2 =[
  0.4055,0.45,0.499,0.5405,0.571,0.5965,0.614,0.633,0.6505,0.666,0.683,0.698,0.706,0.7285,0.7505,0.777,0.793,0.8115,0.828,0.8435,0.86,0.877,
  0.8965,0.9165,0.9415,0.9585,0.9835,1.012,1.031,1.0625,1.096,1.138,1.104,1.1585,1.206,1.1845,1.236,1.1885,1.283,1.324,1.3835,1.445,

];*/

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
  }, 1500);
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
        },
      ],
    },
    "Time in hrs",
    "Strain"
  );

  document.getElementById("btnNext").disabled = true;
  // document.getElementById("arrowNext").classList.add("disabled");

  document.getElementById("startTest").addEventListener("click", function testHandler(e) {
    let tableBody = document.getElementById("testData");
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

    let intr = setInterval(() => {
      if (currPos >= readingData.length) {
        clearInterval(intr);
        document.getElementById("startTest").disabled = false;
        document.getElementById("startTest").innerHTML = "Done";
        document.getElementById("showGraphBtn").disabled = false;
        utm.stop();
        document.getElementById("btnNext").disabled = false;
        // document.getElementById("arrowNext").classList.remove("disabled");
        return;
      }

      tableBody.innerHTML += `
          <tr>
            <td>${readingData[currPos][0]}</td>
            <td>${readingData[currPos][1]}</td>
          </tr>
        `;
      currPos++;

      let progress1 = (elongation1.length / readingData.length) * currPos;
      plotGraph(
        document.getElementById("outputGraphA").getContext("2d"),
        {
          labels: time1,
          datasets: [
            {
              data: elongation1.slice(0, progress1),
              borderColor: "#3e95cd",
              fill: false,
            },
          ],
        },
        "Time in hrs",
        "Strain"
      );

      document.querySelector(".menu").scrollTo(0, document.querySelector(".menu").scrollHeight);
    }, 600);
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

  currentStepProgress = 7;
}

function handleStep7() {
  let pane = document.getElementById("step7");

  pane.classList.add("done");
  pane.classList.remove("active");

  let next = document.getElementById("step8");
  next.classList.add("active");
  next.classList.remove("disabled");

  //last
  document.getElementById("btnNext").disabled = true;
  // document.getElementById("arrowNext").classList.add("disabled");
  document.querySelector("#step8 .content").innerHTML = `
    <table>
      <tr>
        <td>Initial Length</td>
        <td>${sampleLength} mm</td>
      </tr>
      <tr>
        <td>Initial Diameter</td>
        <td>${sampleDiameter} mm</td>
      </tr>
      <tr>
        <td>Final Length</td>
        <td>~${sampleLength} mm</td>
      </tr>
      <tr>
        <td>Final Diameter</td>
        <td>~${sampleDiameter} mm</td>
      </tr>
    </table>
  `;
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
        legend: { display: false },
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
                max: Math.max(...time1),
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
                max: Math.max(...elongation1),
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

/*3. Which of the following stage is also known as the unstable stage?
a) Transient creep stage
b) Constant creep stage
c) Fracture stage
d) Steady stage creep stage

 Which of the following is true?
a) The slope of the strain-time graph increases with temperature and stress
b) The slope of strain-time graph decreases with temperature
c) The slope of strain-time graph decreases with stress
d) The slope of strain-time graph does not depend on temperature or stress

 Creep depends on temperature.
a) True
b) False

In which of the following stages do the deformation rate increases and causes failure?
a) Transient creep stage
b) Constant creep stage
c) Fracture stage
d) Steady stage creep stage

 In which of the stages, do we observe a constant deformation rate?
a) Transient creep stage
b) Constant creep stage
c) Fracture stage
d) Steady stage creep stage*/
