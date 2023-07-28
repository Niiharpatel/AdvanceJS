var sec = 0;
var count = 0;

var timer = false;


function start() {
    timer = true;
    stopWatch();

}

function stop() {

    timer = false;

}

function reset() {

    timer = false;

    sec = 0;
    count = 0;

    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";
}

function stopWatch() {

    if (timer == true) {

        count = count + 1;

        if (count == 100) {
            sec = sec + 1;
            count = 0;
        }

        var secString = sec;
        var countString = count;

        if (sec < 10) {
            secString = "0" + secString;
        }

        if (count < 10) {
            countString = "0" + countString;
        }


        document.getElementById("count").innerHTML = countString;
        document.getElementById("sec").innerHTML = secString;

        setTimeout("stopWatch()", 10);

    }

}