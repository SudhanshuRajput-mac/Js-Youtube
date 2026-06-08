const form = document.querySelector('form')
// console.log(form)

form.addEventListener('submit' , function(ev){
    ev.preventDefault() ; // Prevent page refresh

    const height = parseInt(document.querySelector('#height').value) 

    const weight = parseInt(document.querySelector('#weight').value)

    const result = document.querySelector('#results')
    // console.log(height) ; 
    // console.log(typeof(height)) ; 
    // console.log(ev) ; 
    // console.log(weight)

    // safety check on height and weight . 
    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please give a valid height ${height}`
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight ${weight}`
    }
    else{
        const bmi = Math.round(((weight*100*100)/(height*height))*1000)/1000 ;
        if(bmi < 18.6){
            result.innerHTML = `<span style = "color:aqua; ">You BMI is :-> ${bmi} <br> You Are UnderWeight</span>`
        }
        else if(bmi > 18.6 && bmi < 24.9){
            result.innerHTML = `<span style = "color:pink ; ">You BMI is :-> ${bmi} <br> You Are Normal Range</span>`
        }
        else{
            result.innerHTML = `<span style = "color:yellow;">You BMI is :-> ${bmi} <br> You Are OverWeight</span>`
        }
    }
    // alert(`BMI is : ${bmi}`) ; 


    // another way . 
    // const value = document.getElementById("height").value;
    // console.log(value);
}); 