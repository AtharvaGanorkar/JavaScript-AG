const form = document.querySelector('form')
// This use case will give you empty value 
// const weigth = parseInt(document.getElementById('weight').Value)
// const height = parseInt(document.getElementById('height').value)
// if ypu write it before event , best use it inside event


form.addEventListener('submit' , (s) => {
    s.preventDefault();

    const weigth = parseInt(document.querySelector('#weight').Value)
    const height = parseInt(document.querySelector('#height').value)
    const Results = document.getElementById('results')
    
    if(height === '' || height < 0 || isNaN(height)){
       Results.innerHTML = "please give a valid height"
    }

})