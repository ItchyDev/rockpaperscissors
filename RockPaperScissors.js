
//predetermined player choice 
let playerOption = ""
let win = 0;
let loss = 0;
let draws = 0;


document.getElementById("score").textContent = "The score is " + win +" wins, "+ loss +" losses and " + draws + " draws";


    let options = ["rock","paper","scissors"]
//gets a random number according to the length of the array
let computerChoice = Math.floor(Math.random() * options.length) + 1;



//compairs that number and assigns it a choice 
if(computerChoice === 1){
    computerChoice = "rock"
}else if(computerChoice === 2){
    computerChoice = "scissors"
}else if(computerChoice === 3){
    computerChoice = "paper"
}



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

}



/*
while(win < 5 && loss < 5){
    playRound();
}

if(win === 5){
    console.log("You have won!")
}else if(loss === 5){
    console.log("You have lost!")
}
*/
