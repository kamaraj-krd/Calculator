// Get the output display
const output = document.getElementById("output");

// Store all buttons
const buttons = document.querySelectorAll("button");

// Initialize a string to store the expression
let expression = "";

// Add click event to every button
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    switch (value) {
      case "Ac":
        expression = "";
        output.textContent = "0";
        break;

      case "clear":
        // Remove last character
        expression = expression.slice(0, -1);
        output.textContent = expression || "0";
        break;

      case "=":
        try {
          // Evaluate the expression safely
          const result = eval(expression);
          output.textContent = result;
          expression = result.toString();
        } catch {
          output.textContent = "Error";
          expression = "";
        }
        break;

      case "":
        // Ignore empty button
        break;

      default:
        expression += value;
        output.textContent = expression;
    }
  });
});
