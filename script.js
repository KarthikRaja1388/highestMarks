let markInput = document.querySelector(".mark");
let btnAdd = document.querySelector(".btn-submit");
let btnHighest = document.querySelector(".btn-highest");
let display = document.querySelector(".display");
let markArray = [];

btnAdd.addEventListener("click", (event) => {
  event.preventDefault();
  let markEntered = parseInt(markInput.value);

  if (markArray.length < 5) {
    markArray.push(markEntered);
    display.innerHTML = markArray.length + ".Add another mark";
  } else {
    display.innerHTML = "Limit exceeded.You can enter maximum of only 5 marks";
  }
});
console.log(markArray);
btnHighest.addEventListener("click", (event) => {
  event.preventDefault();
  const greatestValue = Math.max(...markArray);
  display.innerHTML = "Highest Mark is" + greatestValue;
});
