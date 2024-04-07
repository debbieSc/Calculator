let firstNumber = 0;
let secondNumber = 0;
let numberOperator;
let array = [];
let secondArray = [];
let display = document.querySelector(".display")
let initialNumber = 0;
let endNumber = 0;
let symbol;
let extraNumber = 0;
let startNumber = 0;
let active = "off";

const add = function(a, b) {
    return a + b;
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

  
  const buttonChoice = document.querySelectorAll(".buttonChoice");
  const operatorChoice = document.querySelectorAll(".operatorChoice")

  operatorChoice.forEach(button => button.addEventListener("click", () => {


    if (button.id == "ac") {
        display.textContent = 0
        startNumber = 0
        extraNumber = 0
    }
    else if (button.id == "negNum"){
        let savenum = parseInt(display.textContent)

            if(savenum < 0){
                display.textContent = savenum * -1
            } else {
                display.textContent = "-" + savenum
            }
    
    } 
    else if (button.id == "plusSign") {

       startNumber = parseInt(endNumber) + parseInt(display.textContent)
       
        clearScreen(startNumber)

        display.textContent = startNumber
        active = "on"
       
       symbol = "plus"
         

    } 






    
    else if (button.id == "equalsSign") {

        extraNumber = parseInt(display.textContent)

           operate(startNumber, symbol, extraNumber)

    } 

  }))


    buttonChoice.forEach(button => button.addEventListener("click", () => {

       
        if (display.textContent == 0){
            display.textContent = button.textContent
        } 
        
        
        else {

            if(active == "off") {
            
                display.textContent += button.textContent
            }
            else {
                display.textContent = button.textContent
                active = "off"
                
            }

        }

    
    }))
  

   
    function clearScreen(start){
        
        endNumber = start
        
        
        
    }