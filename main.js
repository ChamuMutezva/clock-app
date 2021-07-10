const quortes = document.querySelector(".quortes")
const author = document.querySelector(".author")
const wrapper = document.querySelector(".wrapper")
let current__date = ""
let current__time =""
let hour = ""
console.log(quortes)

fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
     // console.log(data)
    console.log(`${data.content} —${data.author}`)
    quortes.innerHTML = data.content
    author.innerHTML = data.author
  })

  fetch('http://worldtimeapi.org/api/ip')
  .then(response => response.json())
  .then(data => {      
      console.log(data)   
      console.log(data.datetime)
      const date__arr = data.datetime.split("T")
      const time__arr = date__arr[1].split(".")
      current__date =  date__arr[0]
      current__time = time__arr[0]
      hours = current__time.split(":")[0]
      console.log(current__date)
      console.log(time__arr)
      console.log(current__time)
      console.log(hours)
      console.log(Number(hours))
      Number(hours) >= 0 || Number(hours) <= 12 ? wrapper.classList.remove("evening") : wrapper.classList.add("evening")
  }) 
