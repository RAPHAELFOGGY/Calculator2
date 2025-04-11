const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons");
const specialChars = ["%", "*0", "/", "-", "+", "="];
let output = "";

// Define function to calculate based on button  Clicked.
const calculate = (btnvalue) => {
  display.focus();
  if (btnvalue === "=" && output !== "") {
    // if output has '%' replace with '/100' before evaluating.
    output = eval(output.replace("%", "/100"));
  } else if (btnvalue === "AC") {
    output = "";
  } else if (btnvalue === "DEL") {
    // if DEL button is clicked remove the last character from the output.
    output = output.toString().slice(0, -1);
  } else {
    // if output is empty and button specialchars then return
    if (output === "" && specialChars.includes(btnvalue)) return;
    output += btnvalue;
  }
  display.value = output;
};

// Add event Listener to buttons, call calculate() on click
buttons.forEach((button) => {
  // Button click Listener call calculate() with dataset value as argument.
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
