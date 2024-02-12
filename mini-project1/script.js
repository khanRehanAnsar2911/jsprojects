let days = document.querySelector(".days")
let hours = document.querySelector(".hours")
let minutes = document.querySelector(".minutes")
let seconds = document.querySelector(".seconds")

function countdown() {
  let date = new Date()
  let futureDate = new Date("2024 Mar 10")
  let diff = futureDate.getTime() - date.getTime()
  let d = Math.floor(diff / (1000 * 60 * 60 * 24))
  let h = Math.floor((diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
  let m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let s = Math.floor((diff % (1000 * 60)) / (1000));
  days.innerHTML = d + " days"
  hours.innerHTML = h + " hours"
  minutes.innerHTML = m + " minutes"
  seconds.innerHTML = s + " seconds"
  // console.log(d, h, m, s)
}
setInterval(countdown, 1000)
