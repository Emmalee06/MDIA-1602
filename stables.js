// Welcome to...
// _____                          _       _____ _        _     _
// |  ___|                        ( )     /  ___| |      | |   | |
// | |__ _ __ ___  _ __ ___  _   _|/ ___  \ `--.| |_ __ _| |__ | | ___
// |  __| '_ ` _ \| '_ ` _ \| | | | / __|  `--. \ __/ _` | '_ \| |/ _ \
// | |__| | | | | | | | | | | |_| | \__ \ /\__/ / || (_| | |_) | |  __/
// \____/_| |_| |_|_| |_| |_|\__, | |___/ \____/ \__\__,_|_.__/|_|\___|
//                            __/ |
//                           |___/
//  ,  ,.~"""""~~..                                           ___
// )\,)\`-,       `~._                                     .'   ``._
// \  \ | )           `~._                   .-"""""-._   /         \
// _/ ('  ( _(\            `~~,__________..-"'          `-<           \
// )   )   `   )/)   )        \                            \           |
// ') /)`      \` \,-')/\      (                             \          |
// (_(\ /7      |.   /'  )'  _(`                              |         |
//   \\      (  `.     ')_/`                                |         /
//    \       \   \                                         |        (
//     \ )  /\/   /                                         |         `~._
//      `-._)     |                                        /.            `~,
//                |                          |           .'  `~.          (`
//                 \                       _,\          /       \        (``
//                  `/      /       __..-i"   \         |        \      (``
//                 .'     _/`-..--""      `.   `.        \        ) _.~<``
//               .'    _.j     /            `-.  `.       \      '=< `
//             .'   _.'   \    |               `.  `.      \
//            |   .'       ;   ;               .'  .'`.     \
//            \_  `.       |   \             .'  .'   /    .'
//              `.  `-, __ \   /           .'  .'     |   (
//                `.  `'` \|  |           /  .-`     /   .'
//                  `-._.--t  ;          |_.-)      /  .'
//                         ; /           \  /      / .'
//                        / /             `'     .' /
//                       /,_\                  .',_(
//                      /___(                 /___(
//
// This is a template for the final project. You'll be setting up a stable and making
// sure it runs smoothly.
//
// You can copy and paste this into your stables.js file, and then use it to guide you.
// Please do not create a new file!
// Feel free to keep the headings (e.g.: "Variables"), but please delete any boilerplate
// comments. (Your own comments, where necessary, are acceptable.)
//
// NOTE: UNLESS SPECIFIED, VARIABLE NAMING IS UP TO YOU. THERE SHOULD BE NO HARD-CODED
// NUMBERS OR STRINGS WHERE VARIBALES WOULD BE PREFERRED.

//------------------------- Seting up shop -------------------------//

let horses = [];
let visitorMessage = "Welcome to Emmalee's Stable!";
let latePay = 50;
let numStalls = 5;
console.log(visitorMessage);
//------------------------- First day -------------------------//

function Horse(
    name,
    nickname,
    favSnack,
    age,
    monthlyRent,
    payPerDay,
    isInside,
    color,
    favGame
) {
    this.name = name;
    this.nickname = nickname;
    this.favSnack = favSnack;
    this.age = age;
    this.monthlyRent = monthlyRent;
    this.payPerDay = payPerDay;
    this.isInside = isInside;
    this.color = color;
    this.favGame = favGame;
    this.introduction = function () {
        console.log(
            `This is ${this.name}, their nickname is ${nickname}! Their fav video game is ${this.favGame}`
        );
    };
    this.rentInfo = function (payPerDay) {
        console.log(
            `${this.name}'s daily rental is $${payPerDay}, and their monthly rent is $${this.monthlyRent}! Please pay accordingly!`
        );
    };
    this.changeHorsesPosition = function () {
        console.log(`${this.name}'s status is ${this.isInside}`);
        if (this.isInside) {
            this.isInside = false;
            console.log(`${this.name}'s changed status as ${this.isInside}`);
        } else {
            this.isInside = true;
            console.log(`${this.name}'s changed status as ${this.isInside}`);
        }
    };
}
let psyduck = new Horse(
    "Psyduck",
    "Ducky",
    "weeds",
    15,
    900,
    30,
    true,
    "Pink",
    "Persona 5"
);
let piplup = new Horse(
    "Piplup",
    "Pips",
    "Dazzling Honey",
    10,
    1200,
    50,
    true,
    "Orange",
    "Super Mario Sunshine"
);
let snorlax = new Horse(
    "Snorlax",
    "Snorsie",
    "bananas",
    20,
    1000,
    40,
    true,
    "Blue",
    "Stardew Valley"
);

let newHorse = {
    name: "Hatenna",
    nickname: "Enny",
    favSnack: "grass",
    age: 3,
    monthlyRent: 800,
    payPerDay: 20,
    isInside: true,
    color: "purple",
    favGame: "Legend of Zelda Majora's Mask",
};

horses.push(piplup);
horses.push(snorlax);
horses.push(psyduck);
horses.push(newHorse);

piplup.isHungry = true;
snorlax.isHungry = true;
psyduck.isHungry = true;
newHorse.isHungry = true;

//console.log(horses);

//------------------------- Stable roster -------------------------//

// [
//     Horse {
//       name: 'Piplup',
//       nickname: 'Pips',
//       favSnack: 'Dazzling Honey',
//       age: 10,
//       monthlyRent: 1200,
//       payPerDay: 50,
//       isInside: true,
//       color: 'Orange',
//       favGame: 'Super Mario Sunshine',
//       introduction: [Function (anonymous)],
//       rentInfo: [Function (anonymous)],
//       isHungry: true
//     },
//     Horse {
//       name: 'Snorlax',
//       nickname: 'Snorsie',
//       favSnack: 'bananas',
//       age: 20,
//       monthlyRent: 1000,
//       payPerDay: 40,
//       isInside: true,
//       color: 'Blue',
//       favGame: 'Stardew Valley',
//       introduction: [Function (anonymous)],
//       rentInfo: [Function (anonymous)],
//       isHungry: true
//     },
//     Horse {
//       name: 'Psyduck',
//       nickname: 'Ducky',
//       favSnack: 'weeds',
//       age: 15,
//       monthlyRent: 900,
//       payPerDay: 30,
//       isInside: true,
//       color: 'Pink',
//       favGame: 'Persona 5',
//       introduction: [Function (anonymous)],
//       rentInfo: [Function (anonymous)],
//       isHungry: true
//     },
//     {
//       name: 'Hatenna',
//       nickname: 'Enny',
//       favSnack: 'grass',
//       age: 3,
//       monthlyRent: 800,
//       payPerDay: 20,
//       isHungry: true
//     }
//   ]

//------------------------- Stable roster -------------------------//

// [
//     Horse {
//       name: 'Piplup',
//       nickname: 'Pips',
//       favSnack: 'Dazzling Honey',
//       age: 10,
//       monthlyRent: 1200,
//       payPerDay: 50,
//       isInside: true,
//       color: 'Orange',
//       favGame: 'Super Mario Sunshine',
//       introduction: [Function (anonymous)],
//       rentInfo: [Function (anonymous)],
//       changeHorsesPosition: [Function (anonymous)],
//       isHungry: true
//     },
//     Horse {
//       name: 'Snorlax',
//       nickname: 'Snorsie',
//       favSnack: 'bananas',
//       age: 20,
//       monthlyRent: 1000,
//       payPerDay: 40,
//       isInside: true,
//       color: 'Blue',
//       favGame: 'Stardew Valley',
//       introduction: [Function (anonymous)],
//       rentInfo: [Function (anonymous)],
//       changeHorsesPosition: [Function (anonymous)],
//       isHungry: true
//     },
//     Horse {
//       name: 'Psyduck',
//       nickname: 'Ducky',
//       favSnack: 'weeds',
//       age: 15,
//       monthlyRent: 900,
//       payPerDay: 30,
//       isInside: true,
//       color: 'Pink',
//       favGame: 'Persona 5',
//       introduction: [Function (anonymous)],
//       rentInfo: [Function (anonymous)],
//       changeHorsesPosition: [Function (anonymous)],
//       isHungry: true
//     },
//     {
//       name: 'Hatenna',
//       nickname: 'Enny',
//       favSnack: 'grass',
//       age: 3,
//       monthlyRent: 800,
//       payPerDay: 20,
//       isInside: true,
//       color: 'purple',
//       favGame: "Legend of Zelda Majora's Mask",
//       isHungry: true
//     }
//   ]

//---------------------- Growing business ----------------------//
let numNewStalls = 5 - 4;

if (numNewStalls < 2) {
    console.log("We need to build more stalls!");
} else {
    console.log(`We have ${numNewStalls} available!`);
}
//overrided the previous stall numvber with my new one

let rentPaid = false;

function rentPaidChecker(rentPaid, latePay) {
    if (rentPaid == true) {
        console.log("Good job for paying your rent on time!");
    } else {
        console.log(
            `Uh oh! You have to pay $${latePay} in late rent fees! Don't let it happen again!`
        );
    }
}
rentPaidChecker(rentPaid, latePay);
//because rent paid is false, it will log out the false statement
//the loop below made was difficult, but I did a for loop, then made some let variables to let the likesWeeds as the favourite string so the loop knows what to look for. Loop stops once it reaches the correct horse -> psyduck
for (let i = 0; i < horses.length; i++) {
    let horse = horses[i];
    let horseName = horse["name"];
    let favorite = horse["favSnack"];
    let likesWeeds = favorite === "weeds";
    if (!likesWeeds) {
        console.log(horseName + " hates eating weeds! Try another horse.");
    } else if (likesWeeds) {
        console.log(
            horseName + " LOVES eating weeds! They could eat it forever"
        );
        break;
    }
}

function horseNickname(horse, nickname) {
    return `${horse}'s nickname is ${nickname}!`;
}
console.log(horseNickname(piplup.name, piplup.nickname));

//------------------------- Day to day operations -------------------------//

//unique function that references a unique feature of my horse Snorlax
function uniqueHorseIntro(horse, videogame) {
    if (videogame === "Stardew Valley") {
        console.log(`${horse}'s favorite video game is ${videogame}!`);
    } else console.log(`${horse} doesn't like that game very much...`);
}
uniqueHorseIntro(snorlax.name, "Stardew Valley");

function moveHorses() {
    for (let i = 0; i < horses.length; i++) {
        if (horses[i].isInside === true) {
            horses[i].isInside = false;
            console.log(
                `${horses[i].name} is now outside soaking up the sunshine!`
            );
        } else {
            for (let i = 0; i < horses.length; i++) {
                if (horses[i].isInside === true) {
                    horses[i].isInside = false;
                    console.log(
                        `${horses[i].name} the sun is setting! Come back inside to go eebies!`
                    );
                }
            }
        }
    }
}
moveHorses();
//sunset/ dark is not logging out because its not dark.

// console.log(horses[0]);
// horses[0].changeHorsesPosition();
//this changes the position of the horse, whether it is inside or outside. Commented out as we do not need it right now.

function feedHorses() {
    for (let i = 0; i < horses.length; i++) {
        if (horses[i].isInside === false) {
            horses[i].isInside = true;
            console.log(
                `${horses[i].name} come to the stables! I have some ${horses[i].favSnack}!`
            );
        }
    }
}
feedHorses();

//-----------FIN-----------\\
//i tried my best :(
