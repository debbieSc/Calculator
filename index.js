let display = document.querySelector(".display")
let initialNumber = 0;
let endNumber = 0;
let symbol;
let extraNumber = 0;
let startNumber = 0;
let active = "off";
let saveNum = 0;
let checkLength = 0;
let cutNum = 0;

const add = function(a, b) {
    initialNumber = a + b;
    if (initialNumber.toString().length > 12) {
        display.textContent = parseFloat(initialNumber.toString().substring(0,12))
    } else {
        display.textContent = initialNumber
    }
  };
  


  const subtract = function(a, b) {
    initialNumber = a - b;
    if (initialNumber.toString().length > 12) {
        display.textContent = parseFloat(initialNumber.toString().substring(0,12))
    } else {
        display.textContent = initialNumber
    }
};
 

  
   
const multiply = function(a, b) {
    initialNumber = a * b;
            if (initialNumber.toString().length > 12) {
                display.textContent = parseFloat(initialNumber.toString().substring(0,12))
            } else {
                display.textContent = initialNumber
            }
};



const divide = function(a, b) {
    if (b == 0) {
        display.textContent = "well that's silly!"
    } else { 
        initialNumber = a / b;
        if (initialNumber.toString().length > 12) {
            display.textContent = parseFloat(initialNumber.toString().substring(0,12))
        } else {
            display.textContent = initialNumber
        }
};
}


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
        saveNum = parseInt(display.textContent)

            if(saveNum < 0){
                display.textContent = saveNum * -1
            } else {
                display.textContent = "-" + saveNum
            }
    
    } 
    else if (button.id == "plusSign") {

       startNumber = parseFloat(endNumber) + parseFloat(display.textContent)
       
        clearScreen(startNumber)
        
        if (startNumber.toString().length > 10) {
            display.textContent = parseFloat(startNumber.toString().substring(0,12))
        } else {
            display.textContent = startNumber
        }

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
 
        if (startNumber.toString().length > 10) {
            display.textContent = parseFloat(startNumber.toString().substring(0,12))
        } else {
            display.textContent = startNumber
        }
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
 
        if (startNumber.toString().length > 10) {
            display.textContent = parseFloat(startNumber.toString().substring(0,12))
        } else {
            display.textContent = startNumber
        }
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

        if (startNumber.toString().length > 10) {
            display.textContent = parseFloat(startNumber.toString().substring(0,12))
        } else {
            display.textContent = startNumber
        }
         active = "on"
         symbol = "share"
          
 
     } 
    
    else if (button.id == "equalsSign") {

        extraNumber = parseFloat(display.textContent)
            operate(startNumber, symbol, extraNumber)
        endNumber = 0

    } 

    else if (button.id == "del") {
        cutNum = display.textContent

        if(cutNum.toString().length <= 1) {
            display.textContent = 0
        } else {
        display.textContent = parseFloat(cutNum.toString().substring(0, cutNum.length-1))
        }
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

                checkLength = display.textContent

            if (checkLength.length >= 12){
                return;
            } else {
            
                display.textContent += button.textContent
            }
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