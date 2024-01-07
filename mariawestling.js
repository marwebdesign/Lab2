const userForm = document.getElementById("userForm")
const welcomeParagraph = document.getElementById("welcomeParagraph")
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const quizContentDiv = document.getElementById("quizContentDiv")
//let openQvalue = document.getElementById("openQ").value
const quizForm = document.getElementById("quizForm")
const resultsDiv = document.getElementById("resultsDiv")
const userinformationDiv = document.getElementById("userInformationDiv")
let correctAnswers = document.getElementById("correctAnswers")
let blue = document.getElementById("blue")
let green = document.getElementById("green")
let red = document.getElementById("red")
const q1 = document.querySelector('input[value="Rachel"]:checked')
const rachel = document.getElementById("rachel")
let street = document.getElementById("q1")
let howMany = document.getElementById("howMany")
let firstQAnswer = document.getElementById("firstQAnswer")
let secondQAnswer = document.getElementById("secondQAnswer")
const q2 = document.getElementById("q2")

// userForm.addEventListener("submit", function (event) {
//   event.preventDefault()
//   const firstNameInput = firstName.value
//   const lastNameInput = lastName.value
//   welcomeParagraph.textContent = `Welcome ${firstNameInput} ${lastNameInput}. Let's start the quiz!`
//   quizContentDiv.style.display = "block"
//   userinformationDiv.style.display = "none"
// })

// quizForm.addEventListener("submit", function (event) {
//   event.preventDefault()
//   resultsDiv.style.display = "block"
//   if (blue.checked === true) {
//     correctAnswers.textContent = "blue!"
//     console.log("gio")
//   }
// })

const arr = []

quizForm.addEventListener("click", function () {
  if (rachel.checked) {
    arr.push = ["rachel"]
  firstQAnswer.textContent = "That's correct!"
} else {
         firstQAnswer.textContent = "Try again!"   
}
console.log(arr)
    })

q2.addEventListener("change", function() {
if (q2.value === "python") {
  arr.push = ["python"]
  secondQAnswer.textContent = "That's correct!"
} else {
         secondQAnswer.textContent = "Try again!"   
}
console.log(arr)

    })







//quizForm.addEventListener("submit", function (event) {
 // event.preventDefault()
 // let openQ = street.value
  
 // if (openQ.includes("street")) {
//numberOfCorrectAnswers.push["street"]
//  } else
  
// if (blue.checked === true)
//    {
// numberOfCorrectAnswers.push["blue"]
//  } 
  //      let total = numberOfCorrectAnswers.length
 //   console.log(numberOfCorrectAnswers.length)
  //    howMany.innerHTML = `you got ${total} out of 5!`

// })
