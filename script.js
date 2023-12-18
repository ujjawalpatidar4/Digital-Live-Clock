const clockTime = document.getElementById('clock')

setInterval(function () {
    let myDate = new Date()
    // console.log(myDate.toLocaleTimeString())

    clockTime.innerHTML = myDate.toLocaleTimeString();
}, 1000)