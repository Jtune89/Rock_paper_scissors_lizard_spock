const selectionButtons = document.querySelectorAll ('[data-selection')
const SELECTIONS = [
    {
        name: 'rock',
        beats:'scissors'
    },
    {
        name: 'scissors',
        beats:'paper'
    },
    {
        name: 'paper',
        beats:'rock'
    },
    {
        name: 'lizard',
        beats:'spock'
    },
    {
        name: 'spock',
        beats:'rock'
    },
]

selectionButtons.forEach (selectionButton => {
    selectionButton.addEventListener ('click', e => {
       const selectionName = selectionButton.dataset.selection
       const selection = SELECTIONS.find(selection => selection.name === selectionName,)
       makeSelection (selection)
    })
})

function makeSelection(selection) {
    const computerSelection = randomSelection ()
    const yourWinner = isWinner (selection, computerSelection)
    const computerWinner = isWinner (computerSelection.name)

    addSelectionResult (computerSelection, computerWinner)
    addSelectionResult (selection, yourWinner)

    {console.log(isWinner)};
}


function addSelectionResult (selection, winner){

}

function isWinner (selection, opponentSelection){
    return selection.beats === opponentSelection.name
}

function randomSelection () {
    const randomIndex = Math.floor (Math.random() * SELECTIONS.length)
    return SELECTIONS [randomIndex]
}