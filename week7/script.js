// Function with NO parameters
function showWelcome() {
    document.getElementById("welcomeOutput").innerHTML =
        "Welcome to the JavaScript function demo!";
}

// Function with ONE parameter
function displayColor(color) {
    document.getElementById("colorOutput").innerHTML =
        "Your favorite color is " + color + "!";
}

// This uses prompt() to get user input and passes it as an argument
function askFavoriteColor() {
    var userColor = prompt("What is your favorite color?");
    displayColor(userColor);
}

// Function with TWO parameters AND returns a value
function multiplyPrice(price, quantity) {
    return price * quantity;
}

// Calls the two-parameter function and displays result
function calculateTotal() {
    var price = parseFloat(prompt("Enter the price of the item:"));
    var quantity = parseInt(prompt("Enter the quantity:"));

    var total = multiplyPrice(price, quantity);

    document.getElementById("totalOutput").innerHTML =
        "Total cost: $" + total.toFixed(2);
}