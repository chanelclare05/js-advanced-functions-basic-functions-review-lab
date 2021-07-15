// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}


function mondayWork(work="go to the office"){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(symbol="*") {
    return function(result="special"){
        return `You are ${symbol}${result}${symbol}!`
    }    
}

const Calculator = { 
    add : function(num1, num2) {
    return num1 + num2;
    },
   subtract: function(num1, num2) {
    return num1 - num2;
    }, 
    multiply: function(num1, num2) {
        return num1 * num2;
    },
    divide: function(num1, num2) {
        return num1 / num2;      
    }
}

function actionApplyer(startingInteger, arrayOfTransforms){ 
    if (arrayOfTransforms.length === 0){
        return startingInteger; 
    } else {
        for (let index = 0; index < arrayOfTransforms.length ; index++) {
           startingInteger = arrayOfTransforms[index](startingInteger)
        }
        return startingInteger
        // return arrayOfTransforms.reduce((result, func) => {
        //   return func(result)
        // }, startingInteger)
    } 
}   

arrayOfTransforms = [
    function(a){ return a * 2 },
    function(a){ return a + 1000},
    function(a){ return a % 7 }
  ]

