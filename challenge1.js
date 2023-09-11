//Challenge 1: Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
console.log("Challenge 1");

// Data 1
let markWeight1 = 78; // Mark's weight in kg
let markHeight1 = 1.69; // Mark's height in meters

let johnWeight1 = 92; // John's weight in kg
let johnHeight1 = 1.95; // John's height in meters

// Data 2
let markWeight2 = 95; // Mark's weight in kg
let markHeight2 = 1.88; // Mark's height in meters

let johnWeight2 = 85; // John's weight in kg
let johnHeight2 = 1.76; // John's height in meters

// Calculate BMIs
let markBMI1 = markWeight1 / (markHeight1 * markHeight1);
let johnBMI1 = johnWeight1 / (johnHeight1 * johnHeight1);

let markBMI2 = markWeight2 / (markHeight2 * markHeight2);
let johnBMI2 = johnWeight2 / (johnHeight2 * johnHeight2);

// If Mark has a higher BMI than John for both data sets
let markHigherBMI1 = markBMI1 > johnBMI1;
let markHigherBMI2 = markBMI2 > johnBMI2;




// Display the results
console.log("Data 1:");
console.log(`Mark's BMI: ${markBMI1.toFixed(2)}`);
console.log(`John's BMI: ${johnBMI1.toFixed(2)}`);
console.log(`Mark has a higher BMI than John in Data 1: ${markHigherBMI1}`);

console.log("\nData 2:");
console.log(`Mark's BMI: ${markBMI2.toFixed(2)}`);
console.log(`John's BMI: ${johnBMI2.toFixed(2)}`);
console.log(`Mark has a higher BMI than John in Data 2: ${markHigherBMI2}`);


//Challenge 2: Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
console.log("\n-------------------------------------------------");
console.log("\nChallenge 2");

// Who has a higher BMI in Data 1
// Print the result using a template literal
let higherBMI1;
let BMI1higher;
let BMI1lower
if (markBMI1 > johnBMI1) {
    higherBMI1 = "Mark";
    BMI1higher = markBMI1;
    BMI1lower = johnBMI1;
    console.log(`In Data 1, ${higherBMI1}'s BMI (${BMI1higher.toFixed(1)}) is higher than ${higherBMI1 === "Mark" ? "John's" : "Mark's"} (${BMI1lower.toFixed(1)})!`);
} else if (johnBMI1 > markBMI1) {
    higherBMI1 = "John";
    BMI1higher = johnBMI1;
    BMI1lower = markBMI1;
    console.log(`In Data 1, ${higherBMI1}'s BMI (${BMI1higher.toFixed(1)}) is higher than ${higherBMI1 === "Mark" ? "John's" : "Mark's"} (${BMI1lower.toFixed(1)})!`);

} else {
    higherBMI1 = "Mark and John have the same BMI";
    console.log('In Data1, ${higherBMI2}');
}

// Who has a higher BMI in Data 2
// Print the result using a template literal
let higherBMI2;
let BMI2higher;
let BMI2lower;
if (markBMI2 > johnBMI2) {
    higherBMI2 = "Mark";
    BMI2higher = markBMI2;
    BMI2lower = johnBMI2;
    console.log(`In Data 2, ${higherBMI2}'s BMI (${BMI2higher.toFixed(1)}) is higher than ${higherBMI2 === "Mark" ? "John's" : "Mark's"} (${BMI2lower.toFixed(1)})!`);
} else if (johnBMI2 > markBMI2) {
    higherBMI2 = "John";
    BMI2higher = johnBMI2;
    BMI2lower = markBMI2;
    console.log(`In Data 2, ${higherBMI2}'s BMI (${BMI2higher.toFixed(1)}) is higher than ${higherBMI2 === "Mark" ? "John's" : "Mark's"} (${BMI2lower.toFixed(1)})!`);
} else {
    higherBMI2 = "Mark and John have the same BMI";
    console.log('In Data2, ${higherBMI2}');
}

//Challenge 3: There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
console.log("\n-------------------------------------------------");
console.log("\nChallenge 3");

// Data 1
const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];

// Calculate average scores
const calcAverage = (scores) => scores.reduce((total, score) => total + score, 0) / scores.length;

const dolphinsAverage1 = calcAverage(dolphinsScores1);
const koalasAverage1 = calcAverage(koalasScores1);

//console.log(dolphinsAverage1);
//console.log(koalasAverage1);

// Compare average scores and determine the winner
if (dolphinsAverage1 > koalasAverage1) {
    console.log(`Data 1: Dolphins win with an average score of ${dolphinsAverage1.toFixed(1)}`);
} else if (koalasAverage1 > dolphinsAverage1) {
    console.log(`Data 1: Koalas win with an average score of ${koalasAverage1.toFixed(1)}`);
} else if (dolphinsAverage1 === koalasAverage1) {
    console.log("Data 1: It's a draw!");
}

// Data Bonus 1
const dolphinsScoresBonus1 = [97, 112, 101];
const koalasScoresBonus1 = [109, 95, 123];

const dolphinsAverageBonus1 = calcAverage(dolphinsScoresBonus1);
const koalasAverageBonus1 = calcAverage(koalasScoresBonus1);

//console.log(dolphinsAverageBonus1);
//console.log(koalasAverageBonus1);

// Compare average scores and determine the winner
if (dolphinsAverageBonus1 > koalasAverageBonus1 && dolphinsAverageBonus1 >= 100) {
    console.log(`Data Bonus 1: Dolphins win with an average score of ${dolphinsAverageBonus1}`);
} else if (koalasAverageBonus1 > dolphinsAverageBonus1 && koalasAverageBonus1 >= 100) {
    console.log(`Data Bonus 1: Koalas win with an average score of ${koalasAverageBonus1}`);
} else if (dolphinsAverageBonus1 === koalasAverageBonus1 && dolphinsAverageBonus1 >= 100 && koalasAverageBonus1 >= 100) {
    console.log("Data Bonus 1: It's a draw!");
} else {
    console.log("Data Bonus 1: No one wins the trophy.");
}

// Data Bonus 2
const dolphinsScoresBonus2 = [97, 112, 101];
const koalasScoresBonus2 = [109, 95, 106];

const dolphinsAverageBonus2 = calcAverage(dolphinsScoresBonus2);
const koalasAverageBonus2 = calcAverage(koalasScoresBonus2);

//console.log(dolphinsAverageBonus2);
//console.log(koalasAverageBonus2);

// Compare average scores and determine the winner
if (dolphinsAverageBonus2 > koalasAverageBonus2 && dolphinsAverageBonus2 >= 100) {
    console.log(`Data Bonus 2: Dolphins win with an average score of ${dolphinsAverageBonus2}`);
} else if (koalasAverageBonus2 > dolphinsAverageBonus2 && koalasAverageBonus2 >= 100) {
    console.log(`Data Bonus 2: Koalas win with an average score of ${koalasAverageBonus2}`);
} else if (dolphinsAverageBonus2 === koalasAverageBonus2 && dolphinsAverageBonus2 >= 100 && koalasAverageBonus2 >= 100) {
    console.log("Data Bonus 2: It's a draw!");
} else {
    console.log("Data Bonus 2: No one wins the trophy.");
}

//Challenge 4: Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
console.log("\n-------------------------------------------------");
console.log("\nChallenge 4");

// Test data
const billValues = [275, 40, 430];

// Calculate the tip using a ternary operator
const tips = billValues.map((bill) => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2);

// Calculate the total value (bill + tip)
const totalValues = billValues.map((bill, index) => bill + tips[index]);

// Print the results
totalValues.forEach((total, index) => {
    const bill = billValues[index];
    const tip = tips[index];
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);
});