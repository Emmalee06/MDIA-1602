
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