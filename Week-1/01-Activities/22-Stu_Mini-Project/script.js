function myfunction () {
    //create var for player which will prompt to choose a contender (RPS)
    var player = prompt("Choose Rock, Paper,, or Scissors")
    //enter choice from user and create a random contender (RPS) by computer
    var computer = ""
    var choices = ["Rock","Paper","Scissors"]
    var computersPick = choices.length [Math.floor(Math.random() * 3)]
  choices[1] 
    check(computer, user)
  }

// function to determine weather you lose, draw, or win
// if computer == paper & plaer == paper DRAW!

function check (computersPick, player) {}
var result;
if(
    computersPick == "Paper" && player == "Paper"){
        result = "Draw!!"
    }
    else if (
        computersPick == "Rock" && player == "Rock"){
        result = "Draw!!"
        }  
        else if (
            computersPick == "Scissors" && player == "Scissors"){
            result = "Draw!!"
            }
    else if (
        computersPick == "Paper" && player == "Scissors"){
        result = "You Won !!"
        }
    else if (
            computersPick == "Paper" && player == "Rock"){
            result = "You Lost!!"
            }
            else if (
                computersPick == "Rock" && player == "Scissors"){
                result = "You Lost!!"
                }
                else if (
                    computersPick == "Rock" && player == "Paper"){
                    result = "You Won !!"
                    }
                    else if (
                                computersPick == "Scissors" && player == "Rock"){
                                result = "You Won !!"
                                }
                                else (
                                    computersPick == "Scissors" && player == "Paper")
                                    {
                                    result = "You Won !!"
                                    }
                                
                                    


            alert("computersPick choose")
            alert("You" + result)
      