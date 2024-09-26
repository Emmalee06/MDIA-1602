console.log("horse!")
let horseName = "LilLad"; 
horseName = "Eevee"; //prefer double quotes
let horseAge = 159;
console.log(horseName); // this is a comment/ note
console.log(horseAge);
let isHorseInStable = true;
console.log(isHorseInStable);
isHorseInStable = false;

 // basically typeof lets you know what you're using 

const STABLE_MONTHLY_FEE = 100; 
let horseAgeIn10Years = horseAge + 10;
console.log(horseAgeIn10Years);
console.log(STABLE_MONTHLY_FEE);
let horseIntroduction = " is the name of my lovely horsie";
//let rentIntroduction = "it costs " + STABLE_MONTHLY_FEE + " to board " + horseName;
let rentIntroduction = `It costs ${STABLE_MONTHLY_FEE} to board ${horseName}`;
let stableIntroduction = `Welcome to  "${horseName}" 's stable!`;
console.log(stableIntroduction);
console.log(horseName + horseIntroduction);
console.log(rentIntroduction);


