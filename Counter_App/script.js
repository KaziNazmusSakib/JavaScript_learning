let increaseButton = document.getElementById("increment");
let decreaseButton = document.getElementById("decrement");

let currentValue = document.getElementById("counter").innerText;
let countTracker = document.getElementById("counter");


increaseButton.addEventListener("click", Increment);
decreaseButton.addEventListener("click", Decrement);

function Increment() {
  if (currentValue < 10)
    currentValue++;
  else alert("Number cannot allow more than 10");
  countTracker.innerText = currentValue;
}

function Decrement() {
    if (currentValue > 0) 
      currentValue--;
    else alert("Negative Number not allowed.");
    countTracker.innerText = currentValue;
}


