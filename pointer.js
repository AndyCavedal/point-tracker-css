const pointBtn3 = document.getElementById('pointButton3');
const pointBtn2 = document.getElementById('pointButton2');
const pointBtn1 = document.getElementById('pointButton1')
const pointBtn0 = document.getElementById('pointButton0');
const pointsP = document.getElementById('pointsP');
const matchsP = document.getElementById('matchsP');
const resetBtn = document.getElementById('reset');

let totalMatchs = 0;
let totalPoints = 0;

//this function refresh the <p> context with it's variables refreshing the innerHTML

const refreshPoints = () => {
    matchsP.innerHTML = totalMatchs;
    pointsP.innerHTML = totalPoints;
}

function updatePoints() {
    totalMatchs++
    matchsP.innerHTML(totalMatchs);

    totalPoints++
    console.log(totalMatchs);
    console.log(totalPoints);
}

pointBtn0.addEventListener('click', pointBtn0Pressed);
pointBtn1.addEventListener('click', pointBtn1Pressed);
pointBtn2.addEventListener('click', pointBtn2Pressed);
pointBtn3.addEventListener('click', pointBtn3Pressed);
resetBtn.addEventListener('click', resetPoints);

// (+) Buttons reactions
function pointBtn3Pressed() {
    totalMatchs++;
    totalPoints++;
    totalPoints++;
    totalPoints++;
    refreshPoints()
};

function pointBtn2Pressed() {
    totalMatchs++;
    totalPoints++;
    totalPoints++;
    refreshPoints()
};

function pointBtn1Pressed() {
    totalMatchs++;
    totalPoints++;
    refreshPoints()
};

function pointBtn0Pressed() {
    totalMatchs++;
    refreshPoints()
};

function resetPoints() {
    totalMatchs = 0;
    totalPoints = 0;
    matchsP.innerHTML = totalMatchs;
    pointsP.innerHTML = totalPoints;
}
