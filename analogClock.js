function draw(){
    const date = new Date()
    const hours = date.getHours() + 1
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()


    const secondsRotation = seconds / 60 * 360
    document.querySelector('.second-hand').style.transform = `rotate(${secondsRotation}deg)`
    const minutesRotation = minutes / 60 * 360
    document.querySelector('.min-hand').style.transform = `rotate(${minutesRotation}deg)`
    const hourRotation = hours / 24 * 360
    document.querySelector('.hour-hand').style.transform = `rotate(${hourRotation}deg)`

    requestAnimationFrame(draw)
}

draw()
