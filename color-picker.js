const background = document.getElementsByTagName('body')[0]

function setColor(color) {
    background.style.backgroundColor = color
}

function randomColor(){
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    const bgColor = `rgb(${red}, ${green}, ${blue})`

    background.style.backgroundColor = bgColor
}