const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('outcome')
const possibleChoices = document.querySelectorAll('.options_selection')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice ()
  getResult()
}))

function generateComputerChoice () {
  const randomNumber = Math.floor(Math.random () * possibleChoices.length)
  console.log (randomNumber)

  if (randomNumber === 0) {
    computerChoice = 'Rock'
  }
  if (randomNumber === 1) {
    computerChoice = 'Paper'
  }
  if (randomNumber === 2) {
    computerChoice = 'Scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'Lizard'
  }
  if (randomNumber === 4) {
    computerChoice = 'Spock'
  }

  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
  if (computerChoice === userChoice){
    result = 'Its a Draw!'
  }
  if (computerChoice === 'Rock' && userChoice==="Paper"){
    result = 'You Win!'
  }
  if (computerChoice === 'Rock' && userChoice==="Scissors"){
    result = 'You Lose!'
  }
  if (computerChoice === 'Rock' && userChoice==="Lizard"){
    result = 'You Lose!'
  }
  if (computerChoice === 'Rock' && userChoice==="Spock"){
    result = 'You Win!'
  }
  if (computerChoice === 'Paper' && userChoice==="Rock"){
    result = 'You Lose!'
  }
  if (computerChoice === 'Paper' && userChoice==="Scissors"){
    result = 'You Win!'
  }
  if (computerChoice === 'Paper' && userChoice==="Lizard"){
    result = 'You Lose!'
  }
  if (computerChoice === 'Paper' && userChoice==="Spock"){
    result = 'You Win!'
  }
  if (computerChoice === 'Scissors' && userChoice==="Rock"){
    result = 'You Win!'
  }
  if (computerChoice === 'Scissors' && userChoice==="Paper"){
    result = 'You Lose!'
  }
  if (computerChoice === 'Scissors' && userChoice==="Lizard"){
    result = 'You Lose!'
  }
  if (computerChoice === 'Scissors' && userChoice==="Spock"){
    result = 'You Win!'
  }
  if (computerChoice === 'Lizard' && userChoice==="Rock"){
    result = 'You Win!'
  }
  if (computerChoice === 'Lizard' && userChoice==="Paper"){
    result = 'You Lose!'
  }
  if (computerChoice === 'Lizard' && userChoice==="Scissors"){
    result = 'You Win!'
  }
  if (computerChoice === 'Lizard' && userChoice==="Spock"){
    result = 'You Lose!'
  }
  if (computerChoice === 'Spock' && userChoice==="Rock"){
    result = 'You Lose!'
  }
  if (computerChoice === 'Spock' && userChoice==="Paper"){
    result = 'You Win!'
  }
  if (computerChoice === 'Spock' && userChoice==="Scissors"){
    result = 'You Lose!'
  }
  if (computerChoice === 'Spock' && userChoice==="Lizard"){
    result = 'You Win!'
  }
  resultDisplay.innerHTML = result
}

