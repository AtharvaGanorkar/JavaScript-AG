// Object De-Structure //

const course = {
    courcename: "js in hindi",
    price: "999",
    courceInstructor: "hitesh"
}

// course.courceInstructor

const {courceInstructor} = course

const {courceInstructor: instructor} = course

console.log(courceInstructor);
console.log(instructor);



