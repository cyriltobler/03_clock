function draw(){
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    //rotate the hands
    const secondsRotation = seconds / 60 * 360
    document.querySelector('.second-hand').style.transform = `rotate(${secondsRotation}deg)`
    const minutesRotation = minutes / 60 * 360 + secondsRotation / 360
    document.querySelector('.min-hand').style.transform = `rotate(${minutesRotation}deg)`
    const hourRotation = hours / 12 * 360 + minutesRotation / 360
    document.querySelector('.hour-hand').style.transform = `rotate(${hourRotation}deg)`

    //set weekday
    const weekdayNumber = date.getDay()
    weekday = ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag' ]
    document.querySelector('.left-text').innerHTML = weekday[weekdayNumber]

    //month and monthday
    const monthNumber = date.getMonth() + 1
    const dayNumber = date.getDate()
    document.querySelector('.right-text').innerHTML = `${dayNumber} ${monthNumber}`

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

        document.querySelectorAll(".side-text").forEach(element =>{
            element.style.color = "wheat"
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

        document.querySelectorAll(".side-text").forEach(element =>{
            element.style.color = "black"
        })

    }
}

//add side text
document.write('<p class="side-text left-text">Hallo</p>')
document.write('<p class="side-text right-text">Hallo</p>')


draw()