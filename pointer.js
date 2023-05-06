const pointBtn3 = document.getElementById('pointButton3');
const pointBtn2 = document.getElementById('pointButton2');
const pointBtn1 = document.getElementById('pointButton1')
const pointBtn0 = document.getElementById('pointButton0');





pointBtn0.addEventListener('click', pointBtn0Pressed);
pointBtn1.addEventListener('click', pointBtn1Pressed);
pointBtn2.addEventListener('click', pointBtn2Pressed);
pointBtn3.addEventListener('click', pointBtn3Pressed);

// (+) Buttons reactions
function pointBtn3Pressed () {
    console.log('Button 3 pressed');
};

function pointBtn2Pressed () {
    console.log('Button 2 pressed');
};

function pointBtn1Pressed () {
    console.log('Button 1 pressed');
};

function pointBtn0Pressed () {
    console.log('Button 0 pressed');
};