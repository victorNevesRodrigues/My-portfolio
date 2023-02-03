const dinamicContainer = document.getElementById("dinamicContent")
const buttonNotProgramer = document.querySelector(".optionContainer button")
const buttonProgramer = document.querySelectorAll(".optionContainer button")[1]

buttonNotProgramer.addEventListener("click", () => {
    dinamicContainer.classList.remove("show")
    buttonNotProgramer.classList.add("selected")
    buttonProgramer.classList.remove("selected")
})

buttonProgramer.addEventListener("click", () => {
    dinamicContainer.classList.add("show")
    buttonProgramer.classList.add("selected")
    buttonNotProgramer.classList.remove("selected")
})