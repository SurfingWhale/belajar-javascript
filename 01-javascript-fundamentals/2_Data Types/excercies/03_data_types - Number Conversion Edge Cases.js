console.log(Number("500"));
console.log(Number("Fauzy"));
console.log(Number(""));
console.log(Number("500abc"));

//Const Bisa di Conversi tetapi gabisa di reassignment


console.log("Const Bisa Di Conversi tapi gabisa di reassignment")

const amount = "250000";

const convertedAmount = Number(amount);

console.log(typeof amount);          // string
console.log(typeof convertedAmount); // number