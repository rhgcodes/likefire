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