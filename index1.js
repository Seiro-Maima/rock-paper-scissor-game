$("#computer").click(function(){

  generatedRandomChoice();

  $(".computerImage").attr("src", "images/" + choice + ".png");

  gameResult();

})

$(".player").click(function(){


  generatedRandomChoice();

  $(".computerImage").attr("src", "images/" + choice + ".png");



  // check id of which button was clicked by player

  // LONG WAY
  // if((this.id) == "rock"){
  //   $(".playerImage").attr("src", "images/rock.png");
  // } else if ((this.id) == "paper"){
  //   $(".playerImage").attr("src", "images/paper.png");
  // } else if((this.id) == "scissor"){
  //   $(".playerImage").attr("src", "images/scissor.png");
  // }



  // SHORT WAY
  $(".playerImage").attr("src", "images/"+(this.id)+".png");


  gameResult();





})






// ----- get random choice for computer -----
function generatedRandomChoice() {

  var randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0){
    return choice = 'rock';
  } else if (randomNumber === 1){
    return choice = 'paper';
  } else if (randomNumber === 2){
    return choice = 'scissor';
  }

}

// ----- get game results -----
function gameResult() {

  if(player == computer){
    $("h2").text("tie...");
  } else if (player == 0 && computer == 1) {
    $("h2").text("computer wins!");
  } else if (player == 0 && computer == 2) {
    $("h2").text("you win!");
  } else if (player == 1 && computer == 0) {
    $("h2").text("you win!");
  } else if (player == 1 && computer == 2) {
    $("h2").text("computer wins!");
  } else if (player == 2 && computer == 0) {
    $("h2").text("computer wins!");
  } else if (player == 2 && computer == 1) {
    $("h2").text("you win!");
  }

}
