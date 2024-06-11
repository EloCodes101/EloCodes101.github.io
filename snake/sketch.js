let snake
let rez = 20
let food
let w
let h
let nom
let failure
let turn

function preload() {
    nom = loadSound('nom.mp3')
    failure = loadSound('Failure.mp3')
    turn = loadSound('turn.mp3')
}

function setup() {
    createCanvas(400, 400)
    w = floor(width / rez)
    h = floor(height / rez)
    frameRate(5)
    snake = new Snake()
    foodLocation()
}

function foodLocation() {
    let x = floor(random(w))
    let y = floor(random(h))
    food = createVector(x, y)
}

function keyPressed() {
    if (keyCode == LEFT_ARROW) {
        snake.setDir(-1, 0)
        turn.play()
    } else if (keyCode == RIGHT_ARROW) {
        snake.setDir(1, 0)
        turn.play()
    } else if (keyCode == DOWN_ARROW) {
        snake.setDir(0, 1)
        turn.play()
    } else if (keyCode == UP_ARROW) {
        snake.setDir(0, -1)
        turn.play()
    }
}

function draw() {
    scale(rez)
    background(220)
    if (snake.eat(food)) {
        foodLocation()
        nom.play()
    }
    snake.update()
    snake.show()

    if (snake.endGame()) {
        print("END GAME")
        failure.play()
        background(255, 0, 0)
        noLoop()
    }

    noStroke()
    fill(255, 0, 0)
    rect(food.x, food.y, 1, 1)
}