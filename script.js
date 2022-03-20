const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');


const newYears = "1 jan 2023"

function countdown(){
    const newYearsDate = new Date(newYears)
    const currentDate = new Date();

    const totalSecond = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSecond / 3600 / 24)
    const hours = Math.floor(totalSecond / 3600) % 24
    const minutes = Math.floor(totalSecond / 60) % 60;
    const seconds = Math.floor(totalSecond) % 60;

    // console.log(days,hours,minutes,seconds)
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML =  formatTime(seconds);
}
countdown()

function formatTime(time)
{
    return time < 10 ? `0${time}` : time;
}

setInterval(countdown,1000)