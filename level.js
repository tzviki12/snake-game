const app = document.querySelector(".app");

let BTN_LEVEL_TEMPLATE = ` <div class="buttons-levels">
<h1>SELECT LEVEL</h1>
<button type="button" class="easy" data-btnLevel="easy">easy</button>
<button type="button" class="medium" data-btnLevel="medium">medium</button>
<button type="button" class="hard" data-btnLevel="hard">hard</button>
</div>`;

let GAME_HTML_TEMPLATE = `
<button type="button" class="refresh-game" >REFRESH GAME</button>
<div class="game-container">
<div class="snake"></div>
<div class="food"></div> 
<div class="SnakeSegment"></div> 


</div>
<div class="score"></div>`;
let start_game =
  `<div class="start_game"> 
  <h1>Sneaktion</h1>

<button type="button" class="start" data-btnLevel="start">start</button>
<button type="button" class="records" data-btnLevel="records">records</button>
</div>`
function createStartGame() {
  app.innerHTML = start_game;

  const startButton = document.querySelector(".start");
  const recordsButton = document.querySelector(".records");

  startButton.addEventListener("click", (e) => {
    if (e.target.classList.contains('start'))

      // createGameTemplate();
      crateBtnLevelsTemplate()
  });

  recordsButton.addEventListener("click", (e) => {
    if (e.target.classList.contains('records'))
      recordss()

  });
}

function createGameTemplate() {
  app.innerHTML = GAME_HTML_TEMPLATE;

  food = document.querySelector(".food");
  snake = document.querySelector(".snake");
  score1 = document.querySelector(".score");
  gameContainer = document.querySelector(".game-container");


  let refreshGame = document.querySelector(".refresh-game");

  refreshGame.addEventListener("click", () => {
    clearInterval(gameLoop);
    createStartGame()
    // crateBtnLevelsTemplate();
    snakeSegments = [];
  });
}
function crateBtnLevelsTemplate() {
  app.innerHTML = BTN_LEVEL_TEMPLATE;

}

function recordss() {
  app.innerHTML = `
  
  <h1>Records</h1>

    <table>
    <tr>
        <td class="aa">Easy level record:</td>
        <td class="record-value">${record1}</td>
        <td class="record-value1">${name1}</td>
    </tr>
    <tr>
        <td class="aa">Medium level record:</td>
        <td class="record-value">${record2}</td>
        <td class="record-value1">${name2}</td>
    </tr>
    <tr>
        <td class="aa">Hard level record:</td>
        <td class="record-value">${record3}</td>
        <td class="record-value1">${name3}</td>
    </tr>
</table>

    <button type="button" id="myButton">Return</button>
  `
  const myButton = document.getElementById('myButton');


  myButton.addEventListener('click', () => {
    createStartGame()

  })}

  window.addEventListener("DOMContentLoaded", () => {
    // crateBtnLevelsTemplate();
    createStartGame()

    app.addEventListener("click", (e) => {
      switch (e.target.dataset.btnlevel) {
        case "easy":
          startGame("easy");
          eatFood('easy')
          return;
        case "medium":
          startGame("medium");
          eatFood('medium')
          return;
        case "hard":
          startGame("hard");
          eatFood('hard')
          return;

        default:
          return;
      }
    })
  });
