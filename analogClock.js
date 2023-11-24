function draw(){
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()


    const secondsRotation = seconds / 60 * 360
    document.querySelector('.second-hand').style.transform = `rotate(${secondsRotation}deg)`
    const minutesRotation = minutes / 60 * 360 + secondsRotation / 360
    document.querySelector('.min-hand').style.transform = `rotate(${minutesRotation}deg)`
    const hourRotation = hours / 12 * 360 + minutesRotation / 360
    document.querySelector('.hour-hand').style.transform = `rotate(${hourRotation}deg)`

    requestAnimationFrame(draw)
}


document.querySelector('.marking-one').innerHTML = "12"
document.querySelector('.marking-two').innerHTML = "3"
document.querySelector('.marking-three').innerHTML = "6"
document.querySelector('.marking-four').innerHTML = "9"


draw()