document.addEventListener("DOMContentLoaded", function () {
  const calculator = document.querySelector(".calculator");
  const display = document.querySelector(".value");
  let currentInput = "0";
  let previousInput = "";
  let operation = null;
  let resetScreen = false;
  let lastOperation = null;

  // Aggiorna il display
  function updateDisplay() {
    display.value = currentInput;
  }

  // Aggiungi un numero o punto decimale
  function appendNumber(number) {
    if (currentInput === "0" || resetScreen) {
      currentInput = number;
      resetScreen = false;
    } else {
      // Controlla che non ci siano già punti decimali
      if (number === "." && currentInput.includes(".")) return;
      // Gestione speciale per '00'
      if (number === "00" && currentInput !== "0") {
        currentInput += "00";
      } else if (number !== "00") {
        currentInput += number;
      }
    }
    updateDisplay();
  }

  // Scegli l'operazione
  function chooseOperation(op) {
    if (currentInput === "") return;
    if (previousInput !== "") {
      calculate();
    }
    operation = op;
    previousInput = currentInput;
    resetScreen = true;
    lastOperation = null; // Resetta l'ultima operazione quando ne viene scelta una nuova
  }

  // Calcola il risultato
  function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(current)) return;

    // Se non c'è un'operazione memorizzata ma c'è un'ultima operazione, usa quella
    const opToUse = operation || lastOperation;

    if (isNaN(prev)) {
      // Se non c'è un precedente input, non fare nulla
      if (opToUse) {
        // Se c'è un'ultima operazione ma non un precedente input, usa currentInput come precedente
        previousInput = currentInput;
        operation = opToUse;
      }
      return;
    }

    switch (opToUse) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "*":
        result = prev * current;
        break;
      case "/":
        if (current === 0) {
          alert("Non puoi dividere per zero!");
          clear();
          return;
        }
        result = prev / current;
        break;
      default:
        return;
    }

    currentInput = result.toString();
    previousInput = currentInput; // Memorizza il risultato come precedente input
    lastOperation = opToUse; // Memorizza l'ultima operazione
    operation = null; // Resetta l'operazione corrente
    resetScreen = true;
    updateDisplay();
  }

  // Pulisci tutto
  function clear() {
    currentInput = "0";
    previousInput = "";
    operation = null;
    lastOperation = null;
    updateDisplay();
  }

  // Gestione click sui pulsanti
  calculator.addEventListener("click", function (e) {
    if (!e.target.classList.contains("num")) return;

    const value = e.target.textContent;

    if ((value >= "0" && value <= "9") || value === "." || value === "00") {
      appendNumber(value);
    } else if (value === "c") {
      clear();
    } else if (value === "=") {
      calculate();
    } else {
      chooseOperation(value);
    }
  });

  // Inizializza il display
  updateDisplay();
});
