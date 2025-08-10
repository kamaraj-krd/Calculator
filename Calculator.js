const output = document.getElementById("output");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let previousInput = "";
let operator = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        // AC button → Clear everything
        if (value === "AC") {
            currentInput = "";
            previousInput = "";
            operator = "";
            output.textContent = "";
        }
        // C button → Delete last character
        else if (value === "C") {
            currentInput = currentInput.slice(0, -1);
            output.textContent = currentInput;
        }
        // Equal button
        else if (value === "=") {
            if (currentInput && previousInput && operator) {
                try {
                    currentInput = eval(`${previousInput} ${operator} ${currentInput}`).toString();
                } catch {
                    currentInput = "Error";
                }
                output.textContent = currentInput;
                operator = "";
                previousInput = "";
            }
        }
        // Operator buttons
        else if (["+", "-", "*", "/", "%"].includes(value)) {
            if (currentInput) {
                operator = value;
                previousInput = currentInput;
                currentInput = "";
            }
        }
        // Numbers and decimal
        else {
            currentInput += value;
            output.textContent = currentInput;
        }
    });
});
