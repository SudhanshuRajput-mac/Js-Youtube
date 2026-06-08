// this is used to generate a random number in every game . 
// let is used as we set its value when game ends . and new game start . 
let num = Math.round(Math.random()*100) + 1 ;

// const form = document.querySelector('form')
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const userGuess = document.querySelector('.guesses')
const remaninig  = document.querySelector('.lastResult')
const LoworHigh = document.querySelector('.lowOrHi')
const Startover = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numguess = 1 ; 
let playgame = true ; 

if(playgame){
    submit.addEventListener('click' , function(ev){
        ev.preventDefault() ; 
        const guess = parseInt(userInput.value) ; 
        // console.log(guess)
        validGuess(guess) ; 
    })
}

function validGuess(guess){
    // this is used to check the number is entered in the range . 
    if(guess >=1 && guess <= 100){
        prevGuess.push(guess) ; 
        if(numguess === 10){
            DisplayGuess(guess) ; 
            const mg = `Game Over. Random number was ${num} .`
            DisplayMsg(mg) ; 
            endGame() ; 
        } 
        else{
            DisplayGuess(guess) ; 
            CheckGuess(guess) ;
        }
    }
    else{
        const mg = `Please Enter number in between the range 1 to 100 .`
        DisplayMsg(mg) ; 
    }
}

function CheckGuess(guess){
    // after validation this will tell about the guess no. vs actual no. .
    if(guess > num){
        const mg = `Enter Lower Number .`
        DisplayMsg(mg) ; 
        numguess++ ; 
    }
    else if(guess < num){
        const mg = `Enter Higher Number .`
        DisplayMsg(mg) ;
        numguess++ ; 
    }
    else{
        const mg = `Bravo You Made it ! `
        DisplayMsg(mg) ;
        endGame() ; 
    }   
}

function DisplayGuess(guess){
    userInput.value = '' ; 
    userGuess.innerHTML += `${guess}  `
    remaninig.innerHTML = `${10 - numguess}` ; 
}

function DisplayMsg(msg){
    // dom manipulation will be done .  
    LoworHigh.innerHTML = `<h2>${msg}</h2>`
}

function endGame(){
    userInput.value = '' ; 
    userInput.setAttribute('disabled' , '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newgame">Start New Game</h2>`
    Startover.appendChild(p) ; 
    playgame = false ; 
    newGame() ; 
}

function newGame(){
    const newGameButton = document.querySelector('#newgame')
    newGameButton.addEventListener('click' , function(e){
        num = Math.round(Math.random()*100) + 1 ; 
        prevGuess = [] ; 
        numguess = 1 ; 
        userGuess.innerHTML = '' ; 
        remaninig.innerHTML = `${11 - numguess}` ;
        userInput.removeAttribute('disabled') ; 
        DisplayMsg(`New Game has been Started .`)
        Startover.removeChild(p) ; 
        playgame = true ; 
    })
}