const colorDisplayHex = document.getElementById("colorDisplay")
const containerHex = document.querySelector(".container")
const resetBtnHex = document.getElementById("reset")
const messageHex = document.getElementById("message")
const boxesHex = document.querySelectorAll(".box")
let items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]
let colorHex = "#"

items.sort(() => 0.5 - Math.random())

renderHexColor()
renderBoxColor()
setupBox()

resetBtnHex.addEventListener("click", () => {
    colorHex = "#"
    items.sort(() => 0.5 - Math.random())
    containerHex.style.backgroundColor = "rgba(153, 209, 231, 0.767)"
    resetBtnHex.value = "Novas cores"
    messageHex.textContent = ""
    renderHexColor()
    renderBoxColor()

    for (let i = 0; i < boxesHex.length; i++) {
        boxesHex[i].style.opacity = 1
    }
})

function renderHexColor() {
    for (let i = 0; i < 6; i++) {
        let randomItem = Math.floor(Math.random() * items.length)

        colorHex += items[randomItem]
    }

    colorDisplayHex.textContent = colorHex
}

function renderBoxColor() {
    const boxesHexArr = Array.from(boxesHex)
    boxesHexArr.sort(() => 0.5 - Math.random())

    const randomBox = Math.floor(Math.random() * boxesHexArr.length)
    boxesHexArr[randomBox].style.backgroundColor = colorHex

    boxesHexArr.forEach(box => {
        let randomBoxColor = "#"
        for (let i = 0; i < 6; i++) {
            if (box != boxesHexArr[randomBox]) {
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
    for (let i = 0; i < boxesHex.length; i++) {
        boxesHex[i].addEventListener("click", (e) => {
            let boxClicked = e.target.style
            let hexToRgbColor = `rgb(${hexToRgb(colorHex).join(", ")})`

            if (boxClicked.backgroundColor === hexToRgbColor) {
                containerHex.style.backgroundColor = colorHex
                resetBtnHex.value = "Jogar novamente"
                messageHex.textContent = "Acertou!"

                for (let i = 0; i < boxesHex.length; i++) {
                    boxesHex[i].style.backgroundColor = colorHex
                    boxesHex[i].style.opacity = 1
                }
            } else {
                boxClicked.opacity = 0
                messageHex.textContent = "Tente novamente!"
            }
        }) 
    }
}