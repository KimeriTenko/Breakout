const grid = document.querySelector('.grid') 
const scoreDisplay= document.querySelector('#score')
const blockWidth = 100;
const blockHeight = 20;
const ballDiameter = 20;
const boardWidth = 560;
const boardHeight = 800;
let xDirection = -2
let yDirection = 2
let score = 0

/*Assign user start position*/
const userStart = [230, 10];
let currentPosition = userStart; 

/*Ball Starting Position*/
const ballStart = [280, 60];
let ballCurrentPosition = ballStart;

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
    new Block(10, 770),
    new Block(120, 770),
    new Block(230, 770),
    new Block(340, 770),
    new Block(450, 770),
    new Block(10, 740),
    new Block(120, 740),
    new Block(230, 740),
    new Block(340, 740),
    new Block(450, 740),
    new Block(10, 710),
    new Block(120, 710),
    new Block(230, 710),
    new Block(340, 710),
    new Block(450, 710),
]
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


/*Draw Block next to each other, done by using the base element of the Block array*/
function addBlocks() {
    for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement('div')
    block.classList.add('block')
    block.style.left = blocks[i].bottomLeft[0] + 'px'
    block.style.bottom = blocks[i].bottomLeft[1] + 'px'
    grid.appendChild(block)
    console.log(blocks[i].bottomLeft)
    }
}
addBlocks();


/*Add Player*/
const user = document.createElement('div') 
user.classList.add('user')
// user.style.left = currentPosition[0] + "px";
// user.style.bottom = currentPosition[1] + "px";
grid.appendChild(user)
drawUser();

/*Draw Player*/
function drawUser() {
    user.style.left = currentPosition[0] + 'px';
    user.style.bottom = currentPosition[1] + 'px';
}

/*Ball*/
const ball = document.createElement('div')
ball.classList.add('ball')
/*Affix or Append Ball into Playing Grid*/
grid.appendChild(ball) 
drawBall();

/*Draw Ball*/
function drawBall() {
    ball.style.left = currentPosition[0] + 'px';
    ball.style.bottom = currentPosition[1] + 'px';
}
/*Move Ball*/
function moveBall() {
    ballCurrentPosition[0] += xDirection
    ballCurrentPosition[1] += yDirection
    drawBall()
    checkForCollisions()
}

timerID = setInterval(moveBall, 30)

/*Collision Checks, block & wall. Using splice removes blocks visually from the array*/
function checkForCollisions() {
    for (let i = 0; i < blocks.length; i++) {
      if (
        (ballCurrentPosition[0] > blocks[i].bottomLeft[0] && ballCurrentPosition[0] < blocks[i].bottomRight[0]) &&
        (ballCurrentPosition[1] + ballDiameter) > blocks[1].bottomLeft[1] && ballCurrentPosition[1] < blocks[1]
      )  {
        const allBlocks = Array.from(document.querySelectorAll('.block'))
        allBlocks[i].classList.remove('block')
        blocks.splice(i, 1)
        changeDirection()
        score++
        scoreDisplay.innerHTML = score
      }
    }
    if (
    ballCurrentPosition[0] >= (boardWidth - ballDiameter) || 
    ballCurrentPosition[1] >= (boardHeight - ballDiameter) ||
    ballCurrentPosition[0] <= 0
    ) {
    changeDirection()
    }
}
/*Game Over Criteria*/
if (ballCurrentPosition[1] <= 0) {
    clearInterval(timerId)
    scoreDisplay.innerHTML = 'Try Again'
    document.removeElement 
}


function changeDirection() {
    if (xDirection === 2 && yDirection === 2 ) {
        yDirection = -2
        return
    }
    if (xDirection === 2 && yDirection === -2) {
        xDirection = -2
        return
    }
    if (xDirection === -2 && yDirection === -2) {
        yDirection = 2
        return
    }
    if (xDirection === -2 && yDirection === 2) {
        xDirection = 2
        return
    }
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
                currentPosition[0] += 10
                drawUser()
            }
            break;
    }
}

document.addEventListener('keyup', moveUser)

