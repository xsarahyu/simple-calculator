let screen = document.querySelector(".screen")

let btns = document.querySelectorAll(".btn")
Array.from(btns).forEach(element => element.addEventListener("click", calculate))

function calculate(click) {
    if (click.target.innerText === "AC") {
        screen.innerText = ""
    }
    else if (click.target.innerText === "DEL") {
        screen.innerText = screen.innerText.slice(0, -1)
    }
    else if (click.target.innerText === "=") {
        screen.innerText = eval(screen.innerText)
    }
    else {
        screen.innerText += click.target.innerText
    }
}