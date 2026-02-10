// 1. Create at least three variables
let name;
let age;
let favoriteColor;

// 2. Ask three questions from the user
name = prompt("What is your name?");
age = prompt("How old are you?");
favoriteColor = prompt("What is your favorite color?");

// Get the output container
const output = document.getElementById("output");

// 3. If statement
if (name) {
    output.innerHTML += `<p>Hello, ${name}!</p>`;
}

// 4. If…else statement
if (age >= 18) {
    output.innerHTML += `<p>You are an adult.</p>`;
} else {
    output.innerHTML += `<p>You are a minor.</p>`;
}

// 5. If…else if…else statement
if (favoriteColor.toLowerCase() === "red") {
    output.innerHTML += `<p>Your favorite color is red, bold choice!</p>`;
} else if (favoriteColor.toLowerCase() === "blue") {
    output.innerHTML += `<p>Your favorite color is blue, very calming.</p>`;
} else if (favoriteColor.toLowerCase() === "green") {
    output.innerHTML += `<p>Your favorite color is green, nature lover!</p>`;
} else {
    output.innerHTML += `<p>${favoriteColor} is a unique favorite color!</p>`;
}

// 6. Bonus: switch statement
switch (favoriteColor.toLowerCase()) {
    case "red":
        output.innerHTML += `<p>Switch says: Red is powerful!</p>`;
        break;
    case "blue":
        output.innerHTML += `<p>Switch says: Blue is peaceful!</p>`;
        break;
    case "green":
        output.innerHTML += `<p>Switch says: Green is refreshing!</p>`;
        break;
    default:
        output.innerHTML += `<p>Switch says: ${favoriteColor} is one of a kind!</p>`;
        break;
}
