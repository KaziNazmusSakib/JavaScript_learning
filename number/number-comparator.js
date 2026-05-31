const numberInput1 = document.getElementById("number1");
const numberInput2 = document.getElementById("number2");
const result = document.getElementById("result");
const compareButton = document.getElementById("compare");
const resetButton = document.getElementById("reset");


const ERROR_CLASS = 'border-red-500';

function resetErrorStyles() {
    numberInput1.classList.remove(ERROR_CLASS);
    numberInput2.classList.remove(ERROR_CLASS);
}


function isValidInput() {
    resetErrorStyles();

    if(!numberInput1.value) {
      numberInput1.classList.add(ERROR_CLASS);
      return false;
    } else if ( !numberInput2.value) {
      numberInput2.classList.add(ERROR_CLASS); 
      return false;
    } else {
    return true;
   }
}

compareButton.addEventListener("click", function()  {
  
    if(!isValidInput()) {
      alert('Invalid Input');  
      return ;
    }
      const number1 = parseFloat(numberInput1.value);
      const number2 = parseFloat(numberInput2.value);
      
      if(number1 > number2) {
        result.innerText = "First number is larger.";
      } else if( number1 < number2) {
        result.innerText = "Second number is larger.";
      }
       else {
        result.innerText = "Both numbers are equal.";
      }
});

  resetButton.addEventListener("click" , function() {
      numberInput1.value = "0";
      numberInput2.value = "0";
      result.innerText = "";
      resetErrorStyles();
  });


 