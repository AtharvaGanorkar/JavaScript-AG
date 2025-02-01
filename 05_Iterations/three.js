// For of loop

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}

const greatings = "Hello World!"

for (const great of greatings) {
    // console.log(`Each char is ${great}`);   
}

// Maps //Provies only Unieue key:Values in outupt

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States OF America")
map.set('FR', "France")
map.set('IN', "India")

console.log(map);

for (const [key,value] of map) {
    console.log(key, ':-', value);   
}


const myObject = {
    'game1': 'NFS',
    'game2': 'GTA'
 }
// for (const [key,value] of myObject) {
//     console.log(key, ':-', value);
// }

