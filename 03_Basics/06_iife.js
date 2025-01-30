// Immediate Invoke function Expression (IIFE)

(function chai(){
    // Named IIFE
    console.log(`DB CONNECTED`);
    
})();


// Most of the time global scope cause pollution , so to remove this pollution we use iife

( () => {
    console.log(`DB CONNECTED TWO`);
    
})();

( (name) => {
    // Unnamed IIFIE
    console.log(`DB CONNECTED TWO ${name}`);
    
})("Atharva");