function getName() {
    var person = prompt("What's your name?");
    if (person != null) {
        document.getElementById("name").innerHTML =
            "Hello " + person + "! How are you today? and welcome. It's";
    }
}

function yesGif() {
    document.getElementById("saidyes").innerHTML = "So do we! Here's a cat gif!";
}

function noGif() {
    document.getElementById("saidno").innerHTML = "Aw!";
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // add zero in front of numbers < 10
    return i;
};

var populationGame = [
    [1820, 946, 511, 1488, 0],
    [1840, 1070, 1090, 2568, 2490],
    [1860, 1630, 1569, 2389, 1893],
    [1880, 2317, 2133, 2093, 3670],
    [1900, 5320, 5120, 7288, 6873],
    [1920, 8664, 9832, 11834, 12852],
    [1940, 13076, 12993, 13419, 14782],
    [1960, 15538, 15902, 16386, 17452],
    [1980, 14890, 14123, 15736, 16294],
    [2000, 14535, 14762, 15982, 16201]
];

var random = Math.floor(Math.random() * populationGame.length);
var question = populationGame[random][0]; //random question 
var answerA = populationGame[random][1];
var answerB = populationGame[random][2];
var answerC = populationGame[random][3];
var answerD = populationGame[random][4];

//Choose a random question with relative answers from the array
function randomize() {
    random = Math.floor(Math.random() * populationGame.length);
    question = populationGame[random][0]; //random question 
    answerA = populationGame[random][1];
    answerB = populationGame[random][2];
    answerC = populationGame[random][3];
    answerD = populationGame[random][4];
}

//Display one question at a time with relative answer
function renderQuestions() {
    var test = document.getElementById("test");
    var questionNumber = 1;
    test.innerHTML = "<div id='question'>" + questionNumber++ + ")" + question + "</div>";
    test.innerHTML += "<div id='answerA'><button id='correct' onclick='next(this.id)' value='A' name='choices'>" + "(a) " + answerA + "</button></div>";
    test.innerHTML += "<div><button id='wrong' onclick='next(this.id)' value='B' name='choices'>" + "(b) " + answerB + "</button></div>";
    test.innerHTML += "<div><button id='wrong' onclick='next(this.id)' value='C' name='choices'>" + "(c) " + answerC + "</button></div>";
    test.innerHTML += "<div><button id='wrong' onclick='next(this.id)' value='D' name='choices'>" + "(d) " + answerD + "</button></div>";
}

randomize();
renderQuestions();

//question
//When the answer is clicked next question is rendered randomly
function next() {
    alert('Correct!')
    randomize();
    renderQuestions();
};