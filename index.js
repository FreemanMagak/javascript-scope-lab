// Write your solution in this file!
let burgers = ['Hamburger','Cheeseburger'];

let featureDrink = "Strawberry Milkshake";

function addBurger(){
    let newBurger = "Flatburger";
    burgers.push(newBurger);
};

if(true) {
    let anotherNewBurger = 'Maple Bacon Burger';
    burgers.push(anotherNewBurger);
};

function changeFeatureDrink(){
    featureDrink = "The JavaShake"
};

addBurger();

console.log(burgers);
// ['Hamburger', 'Cheeseburger', 'Maple Bacon Burger', 'Flatburger']

console.log(featureDrink);
// 'Strawberry Milkshake'

changeFeatureDrink();

console.log(featureDrink);
// 'The JavaShake'