//USER FORM
const userinformationDiv = document.getElementById("userInformationDiv")
const userForm = document.getElementById("userForm")
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const welcomeParagraph = document.getElementById("welcomeParagraph")
//QUIZ FORM
const quizContentDiv = document.getElementById("quizContentDiv")
const quizForm = document.getElementById("quizForm")
//AFTER SUBMITTING
const resultsDiv = document.getElementById("resultsDiv")
const correctAnswers = document.getElementById("correctAnswers")
const restartButton = document.getElementById("restartButton")

userForm.addEventListener("submit", function (event) {
  event.preventDefault()
  const firstNameInput = firstName.value
  const lastNameInput = lastName.value
  welcomeParagraph.textContent = `Welcome ${firstNameInput} ${lastNameInput}. Let's start the quiz!`
  quizContentDiv.style.display = "block"
  userinformationDiv.style.display = "none"
})

quizForm.addEventListener("submit", function (event) {
  event.preventDefault()
  resultsDiv.style.display = "block"
  correctAnswers.textContent = "GOOD JOB!"
  quizContentDiv.style.display = "none"
  userinformationDiv.style.display = "none"
  welcomeParagraph.style.display = "none"
})

restartButton.addEventListener("click", function () {
  location.reload();
})

