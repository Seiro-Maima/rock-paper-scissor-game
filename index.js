var computerScore = document.getElementById("computerScore");
var playerScore = document.getElementById("playerScore"); 
var tieScore = document.getElementById("tieScore"); 

var playerScoreCount = 0;
var computerScoreCount = 0;
var tieScoreCount = 0;

$(".player").click(function(){

  // generate random choice for computer
  generatedRandomComputerChoice();

  // display image for computer choice
  $(".computerImage").attr("src", "images/" + compChoice + ".png");

  // alert window to display choices (turn off - for debug only)
  //alert(this.id);
  //alert(compChoice);

  // assign image to player choice (LONG WAY)
  // LONG WAY
  // if((this.id) == "rock"){
  //   $(".playerImage").attr("src", "images/rock.png");
  // } else if ((this.id) == "paper"){
  //   $(".playerImage").attr("src", "images/paper.png");
  // } else if((this.id) == "scissor"){
  //   $(".playerImage").attr("src", "images/scissor.png");
  // }

  // assign image to player choice (SHORT WAY)
  $(".playerImage").attr("src", "images/"+(this.id)+".png");

  // save player choice to variable (not needed - for code visual)
  var playerChoice = this.id;

  if(compChoice === playerChoice){
    $("#gameResult").text("It is a tie...");
    tieScoreCount++;
    tieScore.innerHTML = tieScoreCount; 
  } else if (compChoice == "rock" && playerChoice == 'paper') {
    $("h2").text("You win!");
    playerScoreCount++;
    playerScore.innerHTML = playerScoreCount; 
  } else if (compChoice == 'rock' && playerChoice == 'scissor') {
    $("h2").text("Computer wins!");
    computerScoreCount++;
    computerScore.innerHTML = computerScoreCount;
  } else if (compChoice == 'paper' && playerChoice == 'rock') {
    $("h2").text("Computer wins!");
    computerScoreCount++;
    computerScore.innerHTML = computerScoreCount;
  } else if (compChoice == 'paper' && playerChoice == 'scissor') {
    $("h2").text("You win!");
    playerScoreCount++;
    playerScore.innerHTML = playerScoreCount; 
  } else if (compChoice == 'scissor' && playerChoice == 'rock') {
    $("h2").text("You win!");
    playerScoreCount++;
    playerScore.innerHTML = playerScoreCount; 
  } else if (compChoice == 'scissor' && playerChoice == 'paper') {
    $("h2").text("Computer wins!");
    computerScoreCount++;
    computerScore.innerHTML = computerScoreCount;
  }

})

// ----- get random choice for computer -----
function generatedRandomComputerChoice() {

  var randomNumber = Math.floor(Math.random() * (3));

  if (randomNumber === 0){
    return compChoice = 'rock';
  } else if (randomNumber === 1){
    return compChoice = 'paper';
  } else if (randomNumber === 2){
    return compChoice = 'scissor';
  }
  
}

// ----- fuction to reset score ----- 
$(".resetButton").click(function(){

  // reset button is clicked
  alert("Game has been reset!");

  playerScoreCount = 0;
  computerScoreCount = 0;
  tieScoreCount = 0;
  playerScore.innerHTML = playerScoreCount; 
  computerScore.innerHTML = computerScoreCount;
  tieScore.innerHTML = tieScoreCount;

  // reset images for player and computer
  $(".playerImage").attr("src", "images/start.png");
  $(".computerImage").attr("src", "images/start.png");

  $("h2").text("Are you ready?");

})
