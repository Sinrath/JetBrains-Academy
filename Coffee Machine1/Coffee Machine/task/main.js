// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input');

//coffee
let espresso = {
    water: 250, milk: 0, beans: 16, cost: 4
}
let latte = {
    water: 350, milk: 75, beans: 20, cost: 7
}
let cappuccino = {
    water: 200, milk: 100, beans: 12, cost: 6
}

let coffee = [espresso, latte, cappuccino];

//machine
let hasWater = 400;
let hasMilk = 540;
let hasBean = 120;
let hasCups = 9;
let hasMoney = 550;

function showAll() {
    console.log(`\nThe coffee machine has:
${hasWater} ml of water
${hasMilk} ml of milk
${hasBean} g of coffee beans
${hasCups} disposable cups
$${hasMoney} of money\n`);
}

function buy() {
    let whichCoffee = input(`What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:`);

    if (whichCoffee !== "back") {
        if (hasWater < coffee[whichCoffee - 1].water) {
            console.log("Sorry, not enough water!");
        } else if (hasMilk < coffee[whichCoffee - 1].milk) {
            console.log("Sorry, not enough milk!");
        } else if (hasBean < coffee[whichCoffee - 1].beans) {
            console.log("Sorry, not enough coffee beans!");
        } else if (hasCups < 1) {
            console.log("Sorry, not enough disposable cups!");
        } else {
            removeIngredients(whichCoffee);
            console.log(`I have enough resources, making you a coffee!\n`);
        }
    }
}

function removeIngredients(whichCoffee) {
    hasWater -= coffee[whichCoffee - 1].water;
    hasMilk -= coffee[whichCoffee - 1].milk;
    hasBean -= coffee[whichCoffee - 1].beans;
    hasCups -= 1;
    hasMoney += coffee[whichCoffee - 1].cost;
}

function fill() {
    hasWater += Number(input(`Write how many ml of water you want to add:`));
    hasMilk += Number(input(`Write how many ml of milk you want to add:`));
    hasBean += Number(input(`Write how many grams of coffee beans you want to add:`));
    hasCups += Number(input(`Write how many disposable coffee cups you want to add:`));
}

function take() {
    console.log(`I gave you $${hasMoney}`)
    hasMoney = 0;
}

let run = true;

while (run) {
    let expression = input(`Write action (buy, fill, take, remaining, exit):`);

    switch (expression) {
        case "buy":
            buy();
            break
        case "fill":
            fill();
            break
        case "take":
            take();
            break
        case "remaining":
            showAll();
            break
        case "exit":
            run = false;
            break
    }
}

