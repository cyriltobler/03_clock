function draw(){
    const date = new Date()
    const hours = date.getHours() + 8
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    //rotate the hands
    const secondsRotation = seconds / 60 * 360
    document.querySelector('.second-hand').style.transform = `rotate(${secondsRotation}deg)`
    const minutesRotation = minutes / 60 * 360 + secondsRotation / 360
    document.querySelector('.min-hand').style.transform = `rotate(${minutesRotation}deg)`
    const hourRotation = hours / 12 * 360 + minutesRotation / 360
    document.querySelector('.hour-hand').style.transform = `rotate(${hourRotation}deg)`

    //activate day/night modus
    checkTime(hours)

    //repeat this function
    requestAnimationFrame(draw)
}

//write the numbers in the marking
document.querySelector('.marking-one').innerHTML = "12"
document.querySelector('.marking-two').innerHTML = "3"
document.querySelector('.marking-three').innerHTML = "6"
document.querySelector('.marking-four').innerHTML = "9"

//day/nigth switch function
function checkTime(hours){
    if(hours > 18 || hours < 6){
        //Design for the night
        document.querySelector('body').style.backgroundColor = "#222"
        document.querySelectorAll('.marking').forEach(element =>{
        element.style.color = "wheat"
    })
    document.querySelectorAll('.hand').forEach(element =>{
        element.style.backgroundColor = "wheat"
    })
    }else{
        //Design for the day
        document.querySelector('body').style.backgroundColor = "#fff"
        document.querySelectorAll('.marking').forEach(element =>{
            element.style.color = "black"
        })
        document.querySelectorAll('.hand').forEach(element =>{
            element.style.backgroundColor = "black"
        })
    }
}

draw()