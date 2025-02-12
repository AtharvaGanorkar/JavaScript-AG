//  generate a random color

const randomColor = ()=>{
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
       color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};

let intervalID;

console.log(randomColor());

const startchangingcolor = ()=>{
    if (!intervalID){
    intervalID = setInterval(changeBgcolor,1000);
    };
   
   function changeBgcolor() {
    document.body.style.backgroundColor = randomColor() 
   };

};

const stopchangingcolor = ()=>{
    clearInterval(intervalID);
    intervalID = null;
}

document.querySelector('#start').addEventListener('click',startchangingcolor)

document.querySelector('#stop').addEventListener('click',stopchangingcolor)










