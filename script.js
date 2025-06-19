let humanScore = 0;
let computerScore = 0; 

function getComputerChoice() {
    let x = Math.random() * (3-0);
    if(x<1) {
        return "paper"
    } else if (x<2 && x>1) {
        return "rock"
    } else if (x>2 && x<3) {
        return "scissors"
    }
}
function getHumanChoice() {
    return prompt("Choose rock, paper, or scissors. 'choose 5 times' ").toLowerCase()
}
function playRound () {
    const humanChoice = getHumanChoice()
    const computerChoice = getComputerChoice()

    if (humanChoice === 'rock' && computerChoice === 'scissors'||
        humanChoice === 'paper' && computerChoice === 'rock'||
        humanChoice === 'scissors' && computerChoice === 'paper'
    ) {
        console.log(computerChoice)
        console.log(humanChoice)
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)

        humanScore++

    } else if(humanChoice === computerChoice) {
        console.log(computerChoice)
        console.log(humanChoice)
        console.log("It's a tie!")
    } else {
        console.log(computerChoice)
        console.log(humanChoice)
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)

        computerScore++
    }
}
function playGame() {
    for(i = 0; i<=4; i++) {
        playRound()
        console.log(`The score is You: ${humanScore} Computer ${computerScore}`)
    }
    if (humanScore > computerScore) {
        console.log(`YOU WIN! Final Score: ${humanScore} to ${computerScore}`)
    } else if (humanScore < computerScore) {
        console.log(`YOU LOSE! Final Score: ${computerScore} to ${humanScore}`)
    } else {
        console.log(`A TIE! Final Score: ${computerScore} to ${humanScore}`)
    }
}
playGame()