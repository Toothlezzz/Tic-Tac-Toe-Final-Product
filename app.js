//All different variables used for the game, querySelector selects the corresponding "cells"(objects) from the html and css.
//There's a few flags xTurn and gameOver to check for turns and if the game is over, also setting every value to an empty string for the start of the game
let cells = document.querySelectorAll(".row > div");
let restart = document.querySelector("#restart");
let winner = document.querySelector("#winner");
restart.textContent = "restart"; 
let xTurn = true;
let gameOver = false;
winner.textContent = "";
cells[0].textContent = "";
cells[1].textContent = "";
cells[2].textContent = "";
cells[3].textContent = "";
cells[4].textContent = "";
cells[5].textContent = "";
cells[6].textContent = "";
cells[7].textContent = "";
cells[8].textContent = "";
//main game logic
for(let i = 0; i < cells.length; i++){
    
    cells[i].addEventListener("click", cellClicked);
}
restart.addEventListener("click", resetGame);

//function for making the restart button visible
function showRestartButton(){
    restart.style.visibility = "visible"; 
}
//function for resetting the game
function resetGame() {
    // Clear all cells
    cells.forEach(cell => cell.textContent = "");

    // Reset game state variables
    xTurn = true;
    gameOver = false;

    // Hide the restart button
    let restart = document.querySelector("#restart");
    restart.style.visibility = "hidden";

    // Clear the winner message
    document.querySelector("#winner").textContent = "";
}
//function for the game logic, checks whose turn it is and if game is over returns, otherwise switches turns
function cellClicked(){
    //
    if(gameOver == true){
    return;
    }
    if(event.target.textContent == "" && xTurn == true){
        event.target.textContent = "X";
        checkForWinner();
        xTurn = false;
    } 
    else if(event.target.textContent == "" && xTurn == false){
        event.target.textContent = "O";
        checkForWinner();
        xTurn = true;
    }
}
//all different variations of wins
function checkForWinner(){
    if(cells[0].textContent == "X" && cells[1].textContent == "X" && cells[2].textContent == "X"){
        winner.textContent = "X WINS!";
        showRestartButton();
        gameOver = true;
        return;
    }
    else if(cells[0].textContent == "X" && cells[3].textContent == "X" && cells[6].textContent == "X"){
        winner.textContent = "X WINS!";
        showRestartButton();
        gameOver = true;
        return;
    }
    else if(cells[0].textContent == "X" && cells[4].textContent == "X" && cells[8].textContent == "X"){
        winner.textContent = "X WINS!";
        showRestartButton();
        gameOver = true;
        return;
    }
    else if(cells[2].textContent == "X" && cells[5].textContent == "X" && cells[8].textContent == "X"){
        winner.textContent = "X WINS!";
        showRestartButton();
        gameOver = true;
        return;
    }
    else if(cells[6].textContent == "X" && cells[7].textContent == "X" && cells[8].textContent == "X"){
        winner.textContent = "X WINS!";
        showRestartButton();
        gameOver = true;
        return;
    }
    else if(cells[2].textContent == "X" && cells[4].textContent == "X" && cells[6].textContent == "X"){
        winner.textContent = "X WINS!";
        showRestartButton();
        gameOver = true;
        return;
    }
    else if(cells[1].textContent == "X" && cells[4].textContent == "X" && cells[7].textContent == "X"){
        winner.textContent = "X WINS!";
        showRestartButton();
        gameOver = true;
        return;
    }
    else if(cells[3].textContent == "X" && cells[4].textContent == "X" && cells[5].textContent == "X"){
        winner.textContent = "X WINS!";
        showRestartButton();
        gameOver = true;
        return;
    }
    else if(cells[0].textContent == "O" && cells[1].textContent == "O" && cells[2].textContent == "O"){
        winner.textContent = "O WINS!";
        showRestartButton();
        gameOver = true;
        return;
    }
    else if(cells[0].textContent == "O" && cells[3].textContent == "O" && cells[6].textContent == "O"){
        winner.textContent = "O WINS!";
        showRestartButton();
        gameOver = true;
        return;
    }
    else if(cells[0].textContent == "O" && cells[4].textContent == "O" && cells[8].textContent == "O"){
        winner.textContent = "O WINS!";
        showRestartButton();
        gameOver = true;
        return;
    }
    else if(cells[2].textContent == "O" && cells[5].textContent == "O" && cells[8].textContent == "O"){
        winner.textContent = "O WINS!";
        showRestartButton();
        gameOver = true;
        return;
    }
    else if(cells[6].textContent == "O" && cells[7].textContent == "O" && cells[8].textContent == "O"){
        winner.textContent = "O WINS!";
        showRestartButton();
        gameOver = true;
        return;
    }
    else if(cells[2].textContent == "O" && cells[4].textContent == "O" && cells[6].textContent == "O"){
        winner.textContent = "O WINS!";
        showRestartButton();
        gameOver = true;
        return;
    }
    else if(cells[1].textContent == "O" && cells[4].textContent == "O" && cells[7].textContent == "O"){
        winner.textContent = "O WINS!";
        showRestartButton();
        gameOver = true;
        return;
    }
    else if(cells[3].textContent == "O" && cells[4].textContent == "O" && cells[5].textContent == "O"){
        winner.textContent = "O WINS!";
        showRestartButton();
        gameOver = true;
        return;
    }
    else if(isBoardFull() && !gameOver){
        gameOver = true;
        showRestartButton();
        winner.textContent = "It's a draw :(";
        return;
    }
    //helper function to check if the board is full or not to check for draw
    function isBoardFull(){
        for(let i = 0; i < cells.length; i++){
            if(cells[i].textContent == ""){
                return false;
            }
        }
        return true;
    }
}