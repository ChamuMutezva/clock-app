const quortes = document.querySelector(".quortes")
const author = document.querySelector(".author")
const wrapper = document.querySelector(".wrapper")
const time__zone = document.querySelector(".time__zone")
const located = document.querySelector(".location")
const refresh = document.querySelector(".refresh")
const toggleSwitch = document.querySelector('input[type="checkbox"]')
const list__values = Array.from(document.querySelectorAll(".list__value"))
console.log(list__values[0])
let current__date = ""
let current__time = ""
let hour = ""
let min = ""
let time__abbr = ""
const time__status = document.querySelector(".time__status")
console.log(quortes)

const timeApi = () => {
    fetch('http://worldtimeapi.org/api/ip')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(data.datetime)
            const date__arr = data.datetime.split("T")
            const time__arr = date__arr[1].split(".")
            current__date = date__arr[0]
            current__time = time__arr[0]
            hours = Number(current__time.split(":")[0])
            min = Number(current__time.split(":")[1])
            console.log(current__date)
            console.log(time__arr)
            console.log(current__time)
            console.log(min)
            console.log(Number(hours))
            hours <= 12 ?
                wrapper.classList.remove("evening") :
                wrapper.classList.add("evening")

            time__zone.innerHTML = data.abbreviation

            min = min < 10 ? `0${min}` : min
            hours = hours < 10 ? `0${hours}` : hours
            time__status.innerHTML = `${hours}:${min}`

            list__values[1].innerHTML = data.day_of_year + 1
            list__values[2].innerHTML = data.day_of_week + 1
            list__values[3].innerHTML = data.week_number + 1
        })

}


const reFreshQuortes = () => {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            console.log(`${data.content} —${data.author}`)
            quortes.innerHTML = data.content
            author.innerHTML = data.author
        })
}


fetch('https://freegeoip.app/json/')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        console.log(data.time_zone)
        located.innerHTML = `In ${data.city}, ${data.country_name}`
       list__values[0].innerHTML = data.time_zone
      
    })



timeApi()
reFreshQuortes();

refresh.addEventListener("click", reFreshQuortes)

setInterval(() => {
    console.log("counter")
    timeApi()
    reFreshQuortes();
}, 60000)

toggleSwitch.addEventListener("click", ()=> {
    console.log("toggle button clicked")
    const toggle__intro = document.querySelector(".intro")
    const time__section = document.querySelector(".time__section")
    toggle__intro.classList.toggle("intro__out")
    time__section.classList.toggle("time__toggle")
})