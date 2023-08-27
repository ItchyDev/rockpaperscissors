
//predetermined player choice 
let playerOption = ""
let win = 0;
let loss = 0;
let draws = 0;


document.getElementById("score").textContent = "The score is " + win +" wins, "+ loss +" losses and " + draws + " draws";


    let options = ["rock","paper","scissors"]
//gets a random number according to the length of the array
let computerChoice = Math.floor(Math.random() * options.length) + 1;


//player images
const playerrock = document.querySelector(".playerrock")
const playerpaper = document.querySelector(".playerpaper")
const playerscissors = document.querySelector(".playerscissors")
//computer images
const computerrock = document.querySelector(".computerrock")
const computerpaper = document.querySelector(".computerpaper")
const computerscissors = document.querySelector(".computerscissors")
//vs screen 
const vs = document.querySelector(".vsimg")

function playRound(playerOption){
    //interprets player option into a string
    if(playerOption === 1){
        playerOption = "rock"
    }else if(playerOption === 2){
        playerOption = "paper"
    }else if(playerOption === 3){
        playerOption = "scissors"
    }
   console.log(playerOption)
//gets computers answer
    computerChoice = Math.floor(Math.random() * options.length) + 1;
//compairs that number and assigns it a choice 
if(computerChoice === 1){
    computerChoice = "rock"
}else if(computerChoice === 2){
    computerChoice = "scissors"
}else if(computerChoice === 3){
    computerChoice = "paper"
}
console.log(`The computer has chosen ${computerChoice}`)

//reset images 
playerrock.style.display = "none"
playerpaper.style.display = "none"
playerscissors.style.display = "none"

computerrock.style.display = "none"
computerpaper.style.display = "none"
computerscissors.style.display = "none"

vs.style.display = "flex"

//takes the 2 imputs and sets 2 images to be visible 
if(playerOption === "rock"){
    playerrock.style.display = "flex"
}else if(playerOption === "paper"){
playerpaper.style.display = "flex"
}else if(playerOption === "scissors"){
    playerscissors.style.display = "flex"
}

if(computerChoice === "rock"){
    computerrock.style.display = "flex"
}else if(computerChoice === "paper"){
    computerpaper.style.display = "flex"
}else if(computerChoice === "scissors"){
    computerscissors.style.display = "flex"
}



//compairs 2 answers to find the winner
    if(computerChoice === "rock" && playerOption === "rock"){
        console.log("This match is a draw.")
        draws++
    }else if(computerChoice === "rock" && playerOption === "paper"){
        console.log("Player Wins!")
        win++
    }else if(computerChoice === "rock" && playerOption === "scissors"){
        console.log("AI Wins!")
        loss++
    }else if(computerChoice === "paper" && playerOption === "paper"){
        console.log("This match is a draw.")
        draws++
    }else if(computerChoice === "paper" && playerOption === "scissors"){
        console.log("Player Wins!")
        win++
    }else if(computerChoice === "paper" && playerOption === "rock"){
        console.log("AI Wins!")
        loss++
    }else if(computerChoice === "scissors" && playerOption === "scissors"){
        console.log("This match is a draw.")
        draws++
    }else if(computerChoice === "scissors" && playerOption === "rock"){
        console.log("Player Wins!")
        win++
    }else if(computerChoice === "scissors" && playerOption === "paper"){
        console.log("AI Wins!")
        loss++
    }

    console.log(win + " wins")
    console.log(loss+ " losses")
    document.getElementById("score").textContent = "The score is " + win +" wins, "+ loss +" losses and " + draws + " draws";
    document.getElementById("computer").textContent = "The AI chose "+computerChoice + " and you chose " + playerOption;
    if(win === 5){
        document.getElementById("score").textContent = "You WIN, you have "+ win + " wins "+ "and "+loss+" losses resetting the score!";
        win = 0
        loss = 0
        draws = 0
        window.location.href = "./victory.html";
    }else if(loss === 5){
        document.getElementById("score").textContent = "You LOSE, you have "+ win + " wins "+ "and "+loss+" losses resetting the score!";
        win = 0
        loss = 0
        draws = 0
        window.location.href = "./defeat.html";
    }
    

}


