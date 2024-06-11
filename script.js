const rockElement = document.querySelector(".box1");
const paperElement = document.querySelector(".box3");
const scissorElement = document.querySelector(".box2");
const playerChoiceDiv = document.querySelector(".ourside");
const enemyChoiceDiv = document.querySelector(".enemy");

const randomArray = [rockElement, paperElement, scissorElement];


let playerWins = 0;
let enemyWins = 0;

function resultcheck() {
    const playerImage = playerChoiceDiv.style.backgroundImage;
    const enemyImage = enemyChoiceDiv.style.backgroundImage;

    if (playerImage === enemyImage) {
        alert("No one wins!");
    } else if (
        (playerImage.includes("rocks") && enemyImage.includes("scissor")) ||
        (playerImage.includes("hand") && enemyImage.includes("rocks")) ||
        (playerImage.includes("scissor") && enemyImage.includes("hand"))
    ) {
        console.log("You win!");
        alert("You win!");
        playerWins++;
    } else {
        console.log("You lose!");
        alert("You lose!");
        enemyWins++;
    }

    document.getElementById("playerWins").innerText = playerWins;
    document.getElementById("enemyWins").innerText = enemyWins;
}


