const colorDisplayRgb = document.getElementById("colorDisplay")
const containerRgb = document.querySelector(".container")
const resetBtnRgb = document.getElementById("reset")
const messageRgb = document.getElementById("message")
const boxesRgb = document.querySelectorAll(".box")
let colorRgb = ""

renderRgbColor()
renderBoxColor()
setupBox()

resetBtnRgb.addEventListener("click", () => {
    colorRgb = ""
    containerRgb.style.backgroundColor = "rgba(153, 209, 231, 0.767)"
    resetBtnRgb.value = "Novas cores"
    messageRgb.textContent = ""
    renderRgbColor()
    renderBoxColor()

    for (let i = 0; i < boxesRgb.length; i++) {
        boxesRgb[i].style.opacity = 1
    }
})

function renderRgbColor() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    colorRgb = `rgb(${r}, ${g}, ${b})`
 
    colorDisplayRgb.textContent = colorRgb
}

function renderBoxColor() {
    const boxesRgbArr = Array.from(boxesRgb)
    boxesRgbArr.sort(() => 0.5 - Math.random())

    const randomBox = Math.floor(Math.random() * boxesRgbArr.length)
    boxesRgbArr[randomBox].style.backgroundColor = colorRgb

    boxesRgbArr.forEach(box => {
        for (let i = 0; i < 6; i++) {
            if (box != boxesRgbArr[randomBox]) {
                let r = Math.floor(Math.random() * 256)
                let g = Math.floor(Math.random() * 256)
                let b = Math.floor(Math.random() * 256)

                let randomColor = `rgb(${r}, ${g}, ${b})`
                box.style.backgroundColor = randomColor
            }
        }
    })
}

function setupBox() {
    for (let i = 0; i < boxesRgb.length; i++) {
        boxesRgb[i].addEventListener("click", (e) => {
            let boxClicked = e.target.style

            if (boxClicked.backgroundColor === colorRgb) {
                containerRgb.style.backgroundColor = colorRgb
                resetBtnRgb.value = "Jogar novamente"
                messageRgb.textContent = "Acertou!"

                for (let i = 0; i < boxesRgb.length; i++) {
                    boxesRgb[i].style.backgroundColor = colorRgb
                    boxesRgb[i].style.opacity = 1
                }
            } else {
                boxClicked.opacity = 0
                messageRgb.textContent = "Tente novamente!"
            }
        }) 
    }
}