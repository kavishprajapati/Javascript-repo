// Digital Clock

setInterval(displayTime, 1000)

function displayTime() {
    let time = new Date();

    let hrs = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    if (hrs > 12) {
        hrs = hrs - 12;
    }
    if (hrs == 0) {
        hrs = 12;
    }
    document.getElementById('clock_container').innerHTML = (`Time: ${hrs}hr:${min}min:${sec}sec`);
}


// Current Date
setInterval(displaydate, 1000)

function displaydate() {

    let date = new Date();

    let month_name = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let date1 = date.getDate();
    let month = month_name[date.getMonth()];
    let year = date.getFullYear();
    console.log(`Date: ${date1} ${month} ${year}`);

    document.getElementById('date_container').innerHTML = (`Date: ${date1} ${month} ${year}`);
}

//Stopwatch

let hr = 0;
let min = 0;
let sec = 0;
let ms = 0;

let timer = false;

function start() {
    timer = true;
    stopwatch();
    document.getElementById("start").disabled = true;

}

function stop() {
    timer = false;
    // document.getElementById("start").disabled = true;
    document.getElementById("resume").disabled = false;
    document.getElementById("reset").disabled = false;
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = true
}

function resume() {
    timer = true;
    stopwatch();

    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("resume").disabled = true

}

function reset() {
    timer = false;

    document.getElementById("start").disabled = false;

    hr = 00;
    min = 00;
    sec = 00;
    ms = 00;

    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("msec").innerHTML = "00";
    
    document.getElementById("stop").disabled = true;
    document.getElementById("resume").disabled = true;
}



function stopwatch() {
    if (timer == true) {
        ms += 1;

        if (ms == 100) {
            sec += 1;
            ms = 0;
        }

        if (sec == 60) {
            min += 1;
            sec = 0;
        }

        if (min == 60) {
            hr += 1;
            min = 0;
            sec = 0;
        }

        document.getElementById("hr").innerHTML = hr;
        document.getElementById("min").innerHTML = min;
        document.getElementById("sec").innerHTML = sec;
        document.getElementById("msec").innerHTML = ms;



        setTimeout("stopwatch()", 10);
    }
}