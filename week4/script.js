// Create and define variables
let firstName = "Emma";
let birthYear = 2005;
let currentYear = 2026;
let school = "Ohio University";

// Calculate age using math
let age = currentYear - birthYear;

// Display variables
document.getElementById("nameText").textContent =
    "Name: " + firstName;

document.getElementById("ageText").textContent =
    "Age: " + age;

document.getElementById("schoolText").textContent =
    "School: " + school;

// Update variables
age = age + 1;
school = school + " (Go Bobcats!)";
firstName = firstName + " S.";

// Display updated variables
document.getElementById("updatedText").textContent =
    "Updated Info: " + firstName + ", Age " + age + ", " + school;

// Math with variables
let doubleAge = age * 2;
let graduationYear = birthYear + 22;

// Display math results
document.getElementById("mathText").textContent =
    "Math Results: Age x2 = " + doubleAge + ", Graduation Year: " + graduationYear;
