document.querySelector("#btn1").addEventListener("click", function () {
  const currentValue = document.querySelector(".display").innerHTML;
  if (currentValue.length !== 10) {
    document.querySelector(".display").innerHTML += "1";
  }
});

document.querySelector("#btn2").addEventListener("click", function () {
  const currentValue = document.querySelector(".display").innerHTML;
  if (currentValue.length !== 10) {
    document.querySelector(".display").innerHTML += "2";
  }
});

document.querySelector("#btn3").addEventListener("click", function () {
  const currentValue = document.querySelector(".display").innerHTML;
  if (currentValue.length !== 10) {
    document.querySelector(".display").innerHTML += "3";
  }
});

document.querySelector("#btn4").addEventListener("click", function () {
  const currentValue = document.querySelector(".display").innerHTML;
  if (currentValue.length !== 10) {
    document.querySelector(".display").innerHTML += "4";
  }
});

document.querySelector("#btn5").addEventListener("click", function () {
  const currentValue = document.querySelector(".display").innerHTML;
  if (currentValue.length !== 10) {
    document.querySelector(".display").innerHTML += "5";
  }
});
document.querySelector("#btn6").addEventListener("click", function () {
  const currentValue = document.querySelector(".display").innerHTML;
  if (currentValue.length !== 10) {
    document.querySelector(".display").innerHTML += "6";
  }
});

document.querySelector("#btn7").addEventListener("click", function () {
  const currentValue = document.querySelector(".display").innerHTML;
  if (currentValue.length !== 10) {
    document.querySelector(".display").innerHTML += "7";
  }
});

document.querySelector("#btn8").addEventListener("click", function () {
  const currentValue = document.querySelector(".display").innerHTML;
  if (currentValue.length !== 10) {
    document.querySelector(".display").innerHTML += "8";
  }
});
document.querySelector("#btn9").addEventListener("click", function () {
  const currentValue = document.querySelector(".display").innerHTML;
  if (currentValue.length !== 10) {
    document.querySelector(".display").innerHTML += "9";
  }
});

document.querySelector("#btn0").addEventListener("click", function () {
  const currentValue = document.querySelector(".display").innerHTML;
  if (currentValue.length !== 10) {
    document.querySelector(".display").innerHTML += "0";
  }
});
document.querySelector("#btnDot").addEventListener("click", function () {
  const currentValue = document.querySelector(".display").innerHTML;
  if (!currentValue.length) {
    document.querySelector(".display").innerHTML = "0.";
  }

  if (currentValue.length > 0) {
    if (!currentValue.includes(".")) {
      document.querySelector(".display").innerHTML += ".";
    }
  }
});

document.querySelector("#btnClear").addEventListener("click", function () {
  document.querySelector(".display").innerHTML = "";
  document.querySelector("#calculationType").value = "";
  document.querySelector("#firstNumber").value = "";
});

document.querySelector("#btnDevide").addEventListener("click", function () {
  const currentValue = document.querySelector(".display").innerHTML;
  if (currentValue.length > 0) {
    document.querySelector("#firstNumber").value = currentValue;
    document.querySelector("#calculationType").value = "/";
    document.querySelector(".display").innerHTML = "";
  }
});
document.querySelector("#btnMultiply").addEventListener("click", function () {
  const currentValue = document.querySelector(".display").innerHTML;
  if (currentValue.length > 0) {
    document.querySelector("#firstNumber").value = currentValue;
    document.querySelector("#calculationType").value = "X";
    document.querySelector(".display").innerHTML = "";
  }
});
document.querySelector("#btnMinus").addEventListener("click", function () {
  const currentValue = document.querySelector(".display").innerHTML;
  if (currentValue.length > 0) {
    document.querySelector("#firstNumber").value = currentValue;
    document.querySelector("#calculationType").value = "-";
    document.querySelector(".display").innerHTML = "";
  }
});
document.querySelector("#btnPlus").addEventListener("click", function () {
  const currentValue = document.querySelector(".display").innerHTML;
  if (currentValue.length > 0) {
    document.querySelector("#firstNumber").value = currentValue;
    document.querySelector("#calculationType").value = "+";
    document.querySelector(".display").innerHTML = "";
  }
});

document.querySelector("#btnEqual").addEventListener("click", function () {
  const firstNumber = document.querySelector("#firstNumber").value;
  const secondNumber = document.querySelector(".display").innerHTML;
  const calcType = document.querySelector("#calculationType").value;

  if (calcType === "+") {
    document.querySelector(".display").innerHTML =
      Number(firstNumber) + Number(secondNumber);
    document.querySelector("#calculationType").value = "";
    document.querySelector("#firstNumber").value = "";
  }

  if (calcType === "-") {
    document.querySelector(".display").innerHTML =
      Number(firstNumber) - Number(secondNumber);
    document.querySelector("#calculationType").value = "";
    document.querySelector("#firstNumber").value = "";
  }

  if (calcType === "X") {
    document.querySelector(".display").innerHTML =
      Number(firstNumber) * Number(secondNumber);
    document.querySelector("#calculationType").value = "";
    document.querySelector("#firstNumber").value = "";
  }
  if (calcType === "/") {
    document.querySelector(".display").innerHTML =
      Number(firstNumber) / Number(secondNumber);
    document.querySelector("#calculationType").value = "";
    document.querySelector("#firstNumber").value = "";
  }
});
