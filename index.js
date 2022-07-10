const grid = document.querySelector("grid") 
const blockWidth = 100;
const blockHeight = 20;
const boardWidth = 560;

/*Assign user start position*/
const userStart = [230, 10];
let currentPosition = userStart; 


/*Create Block*/
class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
}
/*Every Block*//*Anchor Block*/

/*Tier 1*/
const blocks = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),
    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),
    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210),
]
/*
/*Tier 2*/
/*const blocks = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),
    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),
    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210),

    /*Tier 3*/
/*const blocks = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),
    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),
    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210),
*/ 
/*Draw Block*/
function addBlock() {
    for (let i = 0; i < blocks.length; i++) {
    const block = document.createElemenet("div")
    block.classList.add("block")
    block.style.left = blocks[i].bottomLeft[0] + "px";
    block.style.bottom = blocks[i].bottomLeft[1] + "px";
    grid.appendChild(block)
    }
}
addBlock()

/*Add Player*/
const user = document.createElement("div") 
user.classList.add("user")
grid.appendChild(user)
user.style.left = currentPosition[0] + "px";
user.style.bottom = currentPosition[1] + "px";
grid.appendChild(user)

/*Draw User*/
function drawUser () {
    user.style.left = currentPosition[0] + "px";
    user.style.bottom = currentPosition[1] + "px";
}

/*User Movement using switch case*/
/*if function keeps the user paddle from going off screen*/
function moveUser(e) {
    switch(e.key) {
        case "ArrowLeft":
            if (currentPosition[0] > 0) {
                currentPosition[0] -= 10
            drawUser()
            }
            break;
        case "ArrowRight":
            if (currentPosition[0] < boardWidth - blockWidth) {
                currentPosition[0] +=10
                drawUser()
            }
    }
}

document.addEventListener("keyup", moveUser)

/*Ball*/
const ball = document.createElement("div")
ball.classList.add("ball")
