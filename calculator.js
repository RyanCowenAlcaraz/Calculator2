const calculatorShow = document.getElementById("calculatorShow");

function toDisplay(input) {
  calculatorShow.value += input;
}

function calculate() {
  try {
    calculatorShow.value = eval(calculatorShow.value);
  } catch (error) {
    calculatorShow.value = "Error";
  }
}

function clearDisplay() {
  calculatorShow.value = "";
}
