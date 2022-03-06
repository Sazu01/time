"use strict";

setInterval(()=>{
    const time = new Date()
    const sec = time.getSeconds()
    const min = time.getMinutes()
    let hour = time.getHours()
    let am_pm = "AM"

    if (hour >= 12){
        am_pm = "PM"
        hour = hour - 12
    }
    
    const clock = document.getElementById("clock")
    clock.textContent = `${hour}:${min}:${sec} ${am_pm}`
}, 1000)

