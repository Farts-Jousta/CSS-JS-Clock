const secondhand = document.querySelector('.second-hand');
const minutehand = document.querySelector('.min-hand');
const hourhand = document.querySelector('.hour-hand');

function now() {
    return new Date()
}

function logSeconds() {
    console.log(now().getSeconds())
    secDegree = (now().getSeconds() / 60) * 360 + 90
    secondhand.style.transform = `rotate(${secDegree}deg)`
    if (secDegree === 90) {
        secondhand.style.transition = "none"
    } else {
        secondhand.style.transition = "1s cubic-bezier(1,-0.09, 0, 2.54)"
    }
    console.log(secDegree)
}

function logMinutes() {
    console.log(now().getMinutes())
    minDegree = ((now().getMinutes() / 60) * 360) + ((now().getSeconds() / 60) * 6) + 90
    minutehand.style.transform = `rotate(${minDegree}deg)`
}

function logHours() {
    console.log(now().getHours())
    hourDegree = ((now().getHours() / 12) * 360) + ((now().getMinutes() / 60) * 30) + 90
    hourhand.style.transform = `rotate(${hourDegree}deg)`
}

setInterval(now, 1000)
setInterval(logSeconds, 1000)
setInterval(logMinutes, 1000)
setInterval(logHours, 1000)