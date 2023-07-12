// Iteration 1: Names and Input

let hacker1 = "Christina"
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Diego"
console.log(`The navigator's name is ${hacker2}`);



// Iteration 2: Conditionals

let hacker1 = "Christina"
const hacker2 = "Diego"

let hacker1length = hacker1.length
let hacker2length = hacker2.length

if(hacker1length > hacker2length){
    console.log(`The driver has the longest name, it has ${hacker1length} characters`);
  } else if (hacker2length > hacker1length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2length} characters.`)
  } else if (hacker1length === hacker2length){
    console.log(`Wow, you both have equally long names, ${hacker1length} characters!.`)
  }

// Iteration 3: Loops

let hacker1 = "Christina"
let newHacker1 = ""

for (let i = 0; i < hacker1.length; i++){
  newHacker1 += hacker1[i].toUpperCase() + " "
}

console.log(newHacker1)

/////////////////

const driversName = "Christina"
letChristinareversed = ""

for(let i = driversName.length -1; i>= 0; i--){
  const char = driversName[i]
 letChristinareversed +=char
}
console.log(letChristinareversed)

////////////////

const hacker1 = "Christina";
const hacker2 = "Diego";

switch(hacker1.localeCompare(hacker2)){
  case -1:
    console.log(`The driver's name goes first.`);
    break;

  case 1:
    console.log(`Yo, the navigator goes first, definitely.`);
    break;

  case 0:
    console.log(`What?! You both have the same name?`);
    break;
    
}


