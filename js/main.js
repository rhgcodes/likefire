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
}

var populationGame = [
    [1820, 946],
    [1840, 1070],
    [1860, 1630],
    [1880, 2317],
    [1900, 5320],
    [1920, 8664],
    [1940, 13076],
    [1960, 15538],
    [1980, 14890],
    [2000, 14535]
];

console.log(populationGame[0]);

var randomYear = yearOptions[Math.floor(Math.random()*yearOptions.length)];
// console.log(randomYear);
document.getElementById('year').innerHTML = "In the year " + randomYear + " Hanover's population was";