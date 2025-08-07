// -------------------------------------------
// Part 1: Variables and Conditionals
// -------------------------------------------
let userName = "Alex";
let userAge = 20;

if (userAge >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}

// -------------------------------------------
// Part 2: Custom Functions
// -------------------------------------------
function greetUser(name) {
  return `Welcome, ${name}!`;
}

function calculateTotal(price, quantity) {
  return price * quantity;
}

console.log(greetUser(userName));            // Welcome, Alex!
console.log(calculateTotal(10, 3));          // 30

// -------------------------------------------
// Part 3: Loops
// -------------------------------------------

// For loop example
for (let i = 1; i <= 5; i++) {
  console.log("Counting: " + i);
}

// While loop example
let count = 3;
while (count > 0) {
  console.log("Countdown: " + count);
  count--;
}

// -------------------------------------------
// Part 4: DOM Interactions
// -------------------------------------------

// 1. Change the text content of a heading
document.getElementById("message").textContent = greetUser(userName);

// 2. Add a click event to the button
document.getElementById("myButton").addEventListener("click", function () {
  alert("Button was clicked!");
});

// 3. Toggle a class on an element
document.getElementById("myButton").addEventListener("click", function () {
  document.getElementById("highlight").classList.toggle("active");
});
