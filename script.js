const result = document.querySelector(".result");
const operation = document.querySelector(".current-operation");
const btn = document.querySelectorAll("button");
const clearAllBtn = document.querySelector(".AC");
const lastclearBtn = document.querySelector(".DEL");
const digit = document.querySelectorAll(".digit");
let endResult = 0;
const operator = document.querySelectorAll(".operator");
let prevOperatorText = operation.textContent;
let currentOperatorText = operation.textContent;

console.log(digit);

digit.forEach((digit) => {
  digit.addEventListener("click", (e) => {
    operation.textContent += digit.textContent;
  });
});

operator.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    operation.textContent += " " + operator.textContent + " ";

    if (operator.textContent === "+") {
    }
  });
});

// btn.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     operation.textContent += btn.textContent + "";
//   });
// });

clearAllBtn.addEventListener("click", (e) => {
  operation.textContent = "";
});

lastclearBtn.addEventListener("click", (e) => {
  let currentText = operation.textContent;
  operation.textContent = currentText.substring(0, currentText.length - 1);
});
