const body = document.querySelector('body')
// since buttons are class name so it is written with '.' :
const buttons = document.querySelectorAll('.button')
// console.log(buttons)

buttons.forEach(function (button){
  // console.log(button)
  button.addEventListener('click' , function(ev){
    // console.log(ev)
    // console.log(ev.target)
    // this will give its id name . 
    // console.log(ev.target.id)
    // if(ev.target.id === 'grey'){
    //   body.style.backgroundColor = 'grey'
    // }
    // else if(ev.target.id === 'white'){
    //   body.style.backgroundColor = 'white'
    // }
    // else if(ev.target.id === 'blue'){
    //   body.style.backgroundColor = 'blue'
    // }
    // else if(ev.target.id === 'yellow'){
    //   body.style.backgroundColor = 'yellow'
    // }

    // another simple way . 
    if(true){
      body.style.backgroundColor = ev.target.id ; 
    }
  })
});