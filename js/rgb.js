const colorDisplay = document.getElementById("colorDisplay")
const container = document.querySelector(".container")
const resetBtn = document.getElementById("reset")
const message = document.getElementById("message")
const boxes = document.querySelectorAll(".box")
let colorRgb = ""

renderRgbColor()
renderBoxColor()
setupBox()

resetBtn.addEventListener("click", () => {
    colorRgb = ""
    container.style.backgroundColor = "rgba(153, 209, 231, 0.767)"
    resetBtn.value = "Novas cores"
    message.textContent = ""
    renderRgbColor()
    renderBoxColor()

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.opacity = 1
    }
})

function renderRgbColor() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    colorRgb = `rgb(${r},${g},${b})`

    colorDisplay.textContent = colorRgb
}

function renderBoxColor() {
    const boxesArr = Array.from(boxes)
    boxesArr.sort(() => 0.5 - Math.random())

    const randomBox = Math.floor(Math.random() * boxesArr.length)
    boxesArr[randomBox].style.backgroundColor = colorRgb

    boxesArr.forEach(box => {
        for (let i = 0; i < 6; i++) {
            if (box != boxesArr[randomBox]) {
                let r = Math.floor(Math.random() * 256)
                let g = Math.floor(Math.random() * 256)
                let b = Math.floor(Math.random() * 256)

                let randomColor = `rgb(${r},${g},${b})`
                box.style.backgroundColor = randomColor
            }
        }
    })
}

function setupBox() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("click", (e) => {
            let boxClicked = e.target.style

            if (boxClicked.backgroundColor === colorRgb) {
                container.style.backgroundColor = colorRgb
                resetBtn.value = "Jogar novamente"
                message.textContent = "Acertou!"

                for (let i = 0; i < boxes.length; i++) {
                    boxes[i].style.backgroundColor = colorRgb
                    boxes[i].style.opacity = 1
                }
            } else {
                boxClicked.opacity = 0
                message.textContent = "Tente novamente!"
            }
        }) 
    }
}