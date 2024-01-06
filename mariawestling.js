const userForm = document.getElementById("userForm")
const welcomeParagraph = document.getElementById("welcomeParagraph")
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const quizContentDiv = document.getElementById("quizContentDiv")
let openQvalue = document.getElementById("openQ").value
const quizForm = document.getElementById("quizForm")
const resultsDiv = document.getElementById("resultsDiv")

userForm.addEventListener("submit", function (event) {
  event.preventDefault()
  const firstNameInput = firstName.value
  const lastNameInput = lastName.value
  welcomeParagraph.textContent = `Welcome ${firstNameInput} ${lastNameInput}. Let's start the quiz!`
  quizContentDiv.style.display = "block"
  //resultsDiv.style.display = "block"
})

quizForm.addEventListener("submit", function (event) {
  event.preventDefault()
  resultsDiv.style.display = "block"
})


// function Func() {
fetch("https://opentdb.com/api.php?amount=10")
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data));
// }



const apiWeather = 'https://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=07e49e158145921c4197d32487c9067e'
fetch(apiWeather)
  .then((response) => {
    return response.json()
  })
  .then((data) =>
    console.log(data))

console.log(openQvalue)
