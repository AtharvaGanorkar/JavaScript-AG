const body = document.querySelector('body')
const container = document.querySelector('.center')
const clock = document.querySelector('#clock')

setInterval(() => {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
},1000)


