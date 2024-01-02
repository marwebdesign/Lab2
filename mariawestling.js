const form = document.getElementById("form")
const welcomeParagraph = document.getElementById("welcomeParagraph")
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const quizContentDiv = document.getElementById("quizContentDiv")

form.addEventListener("submit", function (event) {
  event.preventDefault()
  const firstNameInput = firstName.value
  const lastNameInput = lastName.value
  welcomeParagraph.textContent = `Welcome ${firstNameInput} ${lastNameInput}. Let's start the quiz!`
  quizContentDiv.style.display = "block"
})