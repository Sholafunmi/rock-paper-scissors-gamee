const rps = [1, 2, 3];
 const choices = ["🥌", "🧻", "✂"];



 let computerPlay = document.querySelector(".playerBox");
 let playerPlay = document.querySelector(".ComputerBox");
 const playersBtns = document.querySelector(".play-btn");

//  console.log(computerPlay);
//  console.log(playerPlay);

playersBtns.addEventListener("click", () =>{
    initialize();
});

function initialize (){
    let computerDecision = null;
    let playerDecision = null;

    computerDecision =  rps[Math.floor(Math.random() * 3)];
    playerDecision = parseInt(prompt("Choose a number between 1-3"));



    // to indicate the selected items by the player and computer
    computerPlay.textContent = choices[computerDecision - 1];
    playerPlay.textContent = choices[playerDecision - 1];


setTimeout( () =>{
    switch (computerDecision){
        case 1:
            if (playerDecision === 1){
                alert("It is a draw");
            } else if (playerDecision === 2) {
                alert("Player wins the game");
            } else if (playerDecision === 3){
                alert("Computer Wins the game");
            }
            break;

            case 2:
                if (playerDecision === 1){
                    alert("Computer Wins the game");
                } else if (playerDecision === 2) {
                    alert("It is a draw");
                } else if (playerDecision === 3){
                    alert("player Wins the game");
                }
                break;
                case 3:
                    if (playerDecision === 1){
                        alert("PlayerWins the game");
                    } else if (playerDecision === 2) {
                        alert("Computer Wins the game");
                    } else if (playerDecision === 3){
                        alert("It is a draw");
                    }
                    break;
                    default:
                        alert("Try Again");
    }
}, 1000);
}


