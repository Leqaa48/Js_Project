// Get the reference to the display element
const display = document.getElementById("display");

// Function to append input to the display
function appendToDisplay(input) {
  display.value += input; // Add the input value to the current display value
}

// Function to clear the display
function cleardisplay() {
  display.value = ""; // Set the display value to an empty string
}

// Function to calculate the result of the expression in the display
function calculate() {
  display.value = eval(display.value); // Evaluate the expression and update the display with the result
}
