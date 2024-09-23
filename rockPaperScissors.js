let rockDIV = document.getElementById("rock");
let paperDIV = document.getElementById("paper");
let scissiorsDIV = document.getElementById("scissors");

let computerOptions = ["rock", "paper", "scissors"];



let userChoice = "";

let userScore =  0;
let computerScore = 0;





rockDIV.addEventListener("click", () => {
    userChoice = "rock";
    match(userChoice);


    

});

paperDIV.addEventListener("click", () => {
        userChoice = "paper";
        match(userChoice);
    

});


scissiorsDIV.addEventListener("click", () => {
    userChoice = "scissors";
    match(userChoice);
    



});

function addingUserScore(userScore){
  
    document.getElementById("score-number-user").innerText = userScore;
    let con = document.getElementById("content");
    con.innerText = "Congrats!!! You won";
    con.style.backgroundColor= "green";

    



}

function addingComputerScore(computerScore){
    document.getElementById("score-number-comp").innerText = computerScore;
    let con = document.getElementById("content");
    con.innerText = "Sorry!!! You Lost";
    con.style.backgroundColor = "red";

    
  
}


function match(userChoice){
    let computerChoice = computerOptions[Math.floor((Math.random()*computerOptions.length))];
    console.log(computerChoice);
   


    let result  = document.getElementById("content");
    



    if(computerChoice === userChoice){
        console.log("tie");

        result.innerText = "It's a tie. Please play again";
        result.style.backgroundColor = "black";


    }
    else{
        if(userChoice === "rock"){
            if(computerChoice === "paper"){
                console.log("Computer Win");
                computerScore++;
                addingComputerScore(computerScore)

            }

            else{
                console.log("User Win");
                userScore++;
                addingUserScore(userScore)

            }
        }

        else if(userChoice === "paper"){
            if(computerChoice === "rock"){
                console.log("User Win");
                userScore++;
                addingUserScore(userScore)

            }
            else{
                console.log("Computer Win");
                computerScore++;
                addingComputerScore(computerScore)

            }
        }

        else{
            if(computerChoice === "rock")   {
                console.log("Computer Win");
                computerScore++;
                addingComputerScore(computerScore)
            }
            else {
                console.log("User Win");
                userScore++;
                addingUserScore(userScore)


            }
        }
    }

    console.log(computerScore);



}



