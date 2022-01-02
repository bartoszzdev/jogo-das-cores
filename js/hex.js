const colorDisplay = document.getElementById("colorDisplay")
const container = document.querySelector(".container")
const resetBtn = document.getElementById("reset")
const message = document.getElementById("message")
const boxes = document.querySelectorAll(".box")
let items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]
let colorHex = "#"

items.sort(() => 0.5 - Math.random())

renderHexColor()
renderBoxColor()
setupBox()

resetBtn.addEventListener("click", () => {
    colorHex = "#"
    container.style.backgroundColor = "rgba(153, 209, 231, 0.767)"
    resetBtn.value = "Novas cores"
    message.textContent = ""
    renderHexColor()
    renderBoxColor()
})

function renderHexColor() {
    for (let i = 0; i < 6; i++) {
        let randomItem = Math.floor(Math.random() * items.length)

        colorHex += items[randomItem]
    }

    colorDisplay.textContent = colorHex
}

function renderBoxColor() {
    const boxesArr = Array.from(boxes)
    boxesArr.sort(() => 0.5 - Math.random())

    const randomBox = Math.floor(Math.random() * boxesArr.length)
    boxesArr[randomBox].style.backgroundColor = colorHex

    boxesArr.forEach(box => {
        let randomBoxColor = "#"
        for (let i = 0; i < 6; i++) {
            if (box != boxesArr[randomBox]) {
                let randomItem = Math.floor(Math.random() * items.length)

                randomBoxColor += items[randomItem]
                box.style.backgroundColor = randomBoxColor
            }
        }
    })
}

const hexToRgb = hex =>
    hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
                ,(m, r, g, b) => '#' + r + r + g + g + b + b)
        .substring(1).match(/.{2}/g)
        .map(x => parseInt(x, 16))

function setupBox() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("click", (e) => {
            let boxClicked = e.target.style
            let hexToRgbColor = `rgb(${hexToRgb(colorHex).join(", ")})`

            if (boxClicked.backgroundColor === hexToRgbColor) {
                container.style.backgroundColor = colorHex
                resetBtn.value = "Deseja jogar mais uma vez?"
                message.textContent = "Acertou!"

                for (let i = 0; i < boxes.length; i++) {
                    boxes[i].style.backgroundColor = colorHex
                    boxes[i].style.opacity = 1
                }
            } else {
                boxClicked.opacity = 0
                message.textContent = "Tente novamente!"
            }
        }) 
    }
}