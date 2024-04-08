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
let savenum = 0;

const add = function(a, b) {
    display.textContent = a + b;
  };
  


  const subtract = function(a, b) {
    display.textContent = a - b;
  };

  
   
const multiply = function(a, b) {
    display.textContent = a * b
};



const divide = function(a, b) {
    display.textContent = a / b;
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
        endNumber = 0
    }
    else if (button.id == "negNum") {
        savenum = parseInt(display.textContent)

            if(savenum < 0){
                display.textContent = savenum * -1
            } else {
                display.textContent = "-" + savenum
            }
    
    } 
    else if (button.id == "plusSign") {

       startNumber = parseFloat(endNumber) + parseFloat(display.textContent)
       
        clearScreen(startNumber)

        display.textContent = startNumber
        active = "on"
       
       symbol = "plus"
         

    } 
    else if (button.id == "multiplySign") {

        if(endNumber !== 0) {

        startNumber = parseFloat(endNumber) * parseFloat(display.textContent)
        }

        else {
            startNumber = display.textContent
        }

        clearScreen(startNumber)
 
         display.textContent = startNumber
         active = "on"
         symbol = "times"
          
 
     } 

     else if (button.id == "subtractSign") {

        if(endNumber !== 0) {

        startNumber = parseFloat(endNumber) - parseFloat(display.textContent)
        }

        else {
            startNumber = display.textContent
        }

        clearScreen(startNumber)
 
         display.textContent = startNumber
         active = "on"
         symbol = "minus"
          
 
     } else if (button.id == "divideSign") {

        if(endNumber !== 0) {

        startNumber = parseFloat(endNumber) / parseFloat(display.textContent)
        }

        else {
            startNumber = display.textContent
        }

        clearScreen(startNumber)
 
         display.textContent = startNumber
         active = "on"
         symbol = "share"
          
 
     } 
    
    else if (button.id == "equalsSign") {

        extraNumber = parseFloat(display.textContent)
            operate(startNumber, symbol, extraNumber)
        endNumber = 0

    } 

  }))


    buttonChoice.forEach(button => button.addEventListener("click", () => {


        if (button.id == "decimal") {
           if (display.textContent.includes(".")) {
            return
           }
           else {
            display.textContent += button.textContent
           }
        }
       
        else if (display.textContent == 0){
            display.textContent = button.textContent
        } 
        
        
        else  {

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