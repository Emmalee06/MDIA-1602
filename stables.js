
horseName = "Eevee"; //prefer double quotes
let horseNickname = "Eves"
let horseAge = " is 159 years old";

const STABLE_MONTHLY_FEE = 100; 
let stableSavings = (STABLE_MONTHLY_FEE*0.1)*3; 
let horseIntroduction = " is the name of my lovely horsie";
let rentIntroduction = `It costs $ ${(STABLE_MONTHLY_FEE*0.9)*3} to board ${horseName} for 3 months saving $ ${stableSavings} with a 10% discount`;
let stableIntroduction = `Welcome to  "${horseName}'s" stable!`;

console.log(stableIntroduction);
console.log(horseName + horseIntroduction);
console.log(horseNickname + horseAge);
console.log(rentIntroduction); 

// LESSON 5 CODE 
let isHorseInside = true;
if (isHorseInside) {
    console.log (horseNickname + " is inside the stable!");
} else { 
    console.log (horseNickname + " is playing outside!"); 
}

//LESSON 6 CODE
// arrays structure -> ["name", age, isHorseInside]
let horseOne = [horseName, horseAge, isHorseInside, horseNickname];
let horseTwo= ["Snorlax", 5, true, "Snorsie"];
let horseThree = ["Piplup", 3000, true, "Pips"];
let areHorsesInside = true;


let horseNames = [horseName, "Snorlax", "Piplup"];
let horseAges = [horseAge, 5, 3000];
let horseNicknames = [horseNickname, " Snorsie", " and Pips"];

let horsesIntro = `There are ${horseNames.length} horses staying at my stable: ${horseNames[0]}, ${horseNames[1]}, and ${horseNames[2]}`

console.log(horseOne);
console.log(horseTwo);
console.log(horseThree);

console.log(horsesIntro);

console.log(horseOne[0] + "'s nickname is " + horseOne[3]);
console.log(`${horseTwo[0]}'s nickname is ${horseTwo[3]}`);
console.log(`${horseThree[0]}'s nickname is ${horseThree[3]}`);

if (areHorsesInside){
    console.log(horseNicknames + " are staying inside the stable!");
}
