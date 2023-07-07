// Part 1

let userChoice = prompt("Heads or tails?");
let randomNumber = Math.round(Math.random());
let computerChoice;

if (randomNumber === 0) {
    computerChoice = "heads";
} else {
    computerChoice = "tails";
}

if (userChoice === computerChoice) {
    alert("You guessed right! The coin flip landed on " + userChoice);
} else {
    alert("Sorry, the coin flip landed on " + computerChoice);
}

// Part 2

let birthYear = prompt("What year were you born in?");
let age = 2023 - birthYear;

if (age > 21) {
    alert("You are old enough to drink in the US");
} else if (age === 21) {
    alert("You are old enough to drink in the US...barely");
} else {
    alert("Sorry, you are not old enough to drink in the US");
}