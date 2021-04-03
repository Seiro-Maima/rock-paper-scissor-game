let userChosen
let computerChosen

const displayResult = document.getElementById('results')
const userChoice = document.getElementById('user-choice')

var result = results()

const possibleChoices = document.querySelectorAll('.choices')
const computerChoice = document.getElementById('computer-choice')

// get userChosen
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChosen = e.target.id 
    generatedRandCompChoice()
    results() 
    userChoice.innerHTML = userChosen
    computerChoice.innerHTML = computerChosen
    displayResult.innerHTML = result
}))

//get a random computer choice
function generatedRandCompChoice(){
    const randomNumber = Math.round(Math.random() * (3))

    if (randomNumber === 1 ){
        return computerChosen = 'rock'
    }else if(randomNumber === 2){
        return computerChosen = 'paper'
    }else if(randomNumber === 3){
        return computerChosen = 'scissors'
    }
}

//get results
function results (){
    if(userChosen === computerChosen) {
        return result = "tie." 
    } else if(computerChosen === 'rock' && userChosen === 'paper'){
        return result = "you win."
    } else if(computerChosen === 'paper' && userChosen === 'rock'){
        return result = "you lose."
    } else if(computerChosen === 'rock' && userChosen === 'scissors'){
        return result = "you lose."
    } else if(computerChosen === 'scissors' && userChosen === 'rock'){
        return result = "you win."
    } else if(computerChosen === 'paper' && userChosen === 'scissors'){
        return result = "you win."
    } else if(computerChosen === 'scissors' && userChosen === 'paper'){
        return result = "you lose."
    }
}