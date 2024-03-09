let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx]
}

const drawGame = () =>{
    console.log("game was draw.");
    msg.innerText = "Game Was Over Play Again!";
    msg.style.backgroundColor = "#0D2631";
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if (userWin){
        console.log("You Win");
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        
    }else{
        console.log("you Lose");
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText =  `You Lose! ${compChoice} beats Your ${userChoice}`;;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) =>{
    console.log("user choice = " , userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice); 

    if (userChoice === compChoice){
        //draw game
        drawGame();
    } else{
        let userWin = true;
        if (userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        if (userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        if (userChoice === "scissors"){
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice , compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});