let firstNumber = 0;
let secondNumber = 0;
let numberOperator;

const add = function(a, b) {
    console.log(a + b);
  };
  


  const subtract = function(a, b) {
      return a - b;
  };

  
   
const multiply = function(a, b) {
    return a * b
};



const divide = function(a, b) {
    return a / b;
};


const operate = function(initNumber, oper, lastNumber) {

    

    if (oper == "plus") {
        add(initNumber, lastNumber)
    }
    else if (oper == "times") {
        multiply(initNumber, lastNumber)
    }
    else if (oper == "minus") {
        subtract(initNumber, lastNumber)
    }
    else if (oper == "share") {
        divide(initNumber, lastNumber)
    }

  }

 