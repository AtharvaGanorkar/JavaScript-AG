// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1); // Always compare with same Data Type
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);  // Avoid all such Comparisition
console.log(null >= 0); // same goes with "Undefined"

// The reason is that th equality check == and comparisions > < >=
//    <= Work differently.
// comparisions convert null to a Number. treating it as 0.
// Thats why (3) null >= 0 is True and (1) null > 0 is False


// ===
console.log("2" === 2); //False





