
let gameContainer;
let snake;
let food;
let snakeX = 0;
let snakeY = 0;
let foodX;
let foodY;
let score1
let direction = "right";
let gameLoop;
let snakeSegments = [];
let score = 0;
let record1 = 0
let record2 = 0
let record3 = 0
let gameDifficulty;
let name1 = ''
let name2 = ''
let name3 = ''



function randomPosition() {
    return Math.floor(Math.random() * 15) * 20;
}





function updateFoodPosition() {
    foodX = randomPosition();
    foodY = randomPosition();
    food.style.left = foodX + 'px';
    food.style.top = foodY + 'px';
    score1.textContent = `Score: ${score}`;
}
function eatFood() {
    if (snakeX === foodX && snakeY === foodY) {
        if (gameDifficulty === 'easy') {
            score++

        }
        if (gameDifficulty === 'medium') {
            score += 2
        }
        if (gameDifficulty === 'hard') {
            score += 3
        }

        const newSegment = document.createElement('div');
        newSegment.classList.add('snake');
        gameContainer.appendChild(newSegment);

        snakeSegments.push({
            x: snakeX,
            y: snakeY,
            element: newSegment
        });

        updateFoodPosition();

    }
}

function moveSnake() {
    eatFood();


    switch (direction) {
        case 'up':
            snakeY -= 20;
            break;
        case 'down':
            snakeY += 20;
            break;
        case 'left':
            snakeX -= 20;
            break;
        case 'right':
            snakeX += 20;
            break;
    }
    if (snakeSegments.length > 1) {
        for (let i = snakeSegments.length - 1; i > 0; i--) {
            snakeSegments[i].x = snakeSegments[i - 1].x;
            snakeSegments[i].y = snakeSegments[i - 1].y;
        }
    }
    snakeSegments[0] = { x: snakeX, y: snakeY, element: snake };;

    if (snakeX < 0 || snakeX >= 600 || snakeY < 0 || snakeY >= 600 
        // || snakeSegments.some(segment => segment.x === snakeX && segment.y === snakeY)
        ) {
        clearInterval(gameLoop);
        if (gameDifficulty === 'easy') {
            if (record1 < score) {
                record1 = score;
                const playerNameInput = prompt("Congratulations! You made a new record! Please enter your name:");
            if (playerNameInput) {
                name1 = playerNameInput;
            }
                    alert('Game Over! Your Score: ' + score);
            }
        }
        if (gameDifficulty === 'medium') {
            if (record2 < score) {
                record2 = score;
                const playerNameInput = prompt("Congratulations! You made a new record! Please enter your name:");
            if (playerNameInput) {
                name2 = playerNameInput;
            }
                alert('Game Over! Your Score: ' + score);
            }
        }
        if (gameDifficulty === 'hard') {
            if (record3 < score) {
                record3 = score;
                const playerNameInput = prompt("Congratulations! You made a new record! Please enter your name:");
            if (playerNameInput) {
                name3 = playerNameInput;
            }
                alert('Game Over! Your Score: ' + score);
            }
        }
    }


    else {
        for (let i = 0; i < snakeSegments.length; i++) {
            snakeSegments[i].element.style.left = snakeSegments[i].x + "px";
            snakeSegments[i].element.style.top = snakeSegments[i].y + "px";

        }
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' && direction !== 'down') {
        direction = 'up';
    } else if (e.key === 'ArrowDown' && direction !== 'up') {
        direction = 'down';
    } else if (e.key === 'ArrowLeft' && direction !== 'right') {
        direction = 'left';
    } else if (e.key === 'ArrowRight' && direction !== 'left') {
        direction = 'right';
    }
});
function startGame(difficulty) {
    createGameTemplate();


    direction = "right";
    snakeX = 0;
    snakeY = 0;
    score = 0;
    gameDifficulty = difficulty;

    if (difficulty === 'easy') {
        updateFoodPosition();
        gameLoop = setInterval(moveSnake, 300);
    } else if (difficulty === 'medium') {
        updateFoodPosition();
        gameLoop = setInterval(moveSnake, 200);
    } else if (difficulty === 'hard') {
        updateFoodPosition();
        gameLoop = setInterval(moveSnake, 100);
    }
}

