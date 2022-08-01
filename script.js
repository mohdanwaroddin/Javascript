
//stop watch
var seconds = 00;
var tens = 00;
var minute=00;
var OutputMinute = document.getElementById('min');
var OutputSeconds = document.getElementById('second');
var OutputTens = document.getElementById('tens');
var buttonStart = document.getElementById('btn-start');
var buttonStop = document.getElementById('btn-stop');
var buttonReset = document.getElementById('btn-reset');
var Interval;

buttonStart.addEventListener('click', () => {
    clearInterval(Interval);
    Interval = setInterval(startTime, 10);
});

buttonStop.addEventListener('click', () => {
    clearInterval(Interval);
});

buttonReset.addEventListener('click', () => {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    minute ="00";
    OutputMinute.innerHTML = minute;
    OutputSeconds.innerHTML = seconds;
    OutputTens.innerHTML = tens;
});

function startTime(){
    tens++;
    if(tens <= 9){
        OutputTens.innerHTML = "0" + tens;
    }

    if(tens > 9){
        OutputTens.innerHTML = tens;
    }

    if(tens > 99){
        seconds++;
        OutputSeconds.innerHTML = "0" + seconds;
        tens = 0;
        OutputTens.innerHTML = "0" + tens;
    }

    if(seconds > 9){
        OutputSeconds.innerHTML = seconds;
    }
    if(seconds > 60){
        minute++;
        OutputMinute.innerHTML = "0" + minute;
        seconds = 0;
        OutputSeconds.innerHTML = "0" + seconds;
    }
    if(minute > 9){
        OutputMinute.innerHTML = minute;
    }
}