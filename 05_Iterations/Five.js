// FOR EACH LOOP

const coading = ['js','rb','py','c++','java','cpp']

// coading.forEach( function (item){
//     console.log(item);
    
// })

// coading.forEach( (item) => {
//      console.log(item);
     
// })


coading.forEach( (item, index , arr) => {
    console.log(item , index, arr);
    

})

const myCoading = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

myCoading.forEach( (item) => {
    console.log(item.languageName);
    
})