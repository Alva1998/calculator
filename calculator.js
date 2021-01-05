const calculator = () => {
    //*global variables 
    const text = document.querySelector('#text');
    const display = document.querySelectorAll('.display');
    const c = document.querySelector('#c');
    const negative = document.querySelector('#negative');
    const equals = document.querySelector('#equals');
    const calc = document.querySelectorAll('.calc');
    let num1 = '';
    let num2 = '';
    let operator = '';
    let operatorPressed = false;

    const add = (a,b) => {
        return (a + b).toString();
    }

    const subtract = (a,b) => {
        return (a - b).toString();
    }

    const multiply = (a,b) => {
        return (a * b).toString();
    }

    const divide = (a,b) => {
        if (b == 0) {
            alert('CANT DIVIDE BY 0 DELETING THE UNIVERSE IN T MINUS 10 MINUTES');
            clear();
            return;
        }
        return (a / b).toString();
    }

    const modulus = (a,b) => {
        return (a % b).toString();
    }

    const operate = (a,op,b) => {
        switch (op) {
            case '+':
                operator = ''; 
                return add(parseFloat(a), parseFloat(b));
                break;
            case '-':
                operator = '';
                return subtract(parseFloat(a), parseFloat(b));
                break;
            case '*':
                operator = '';
                return multiply(parseFloat(a), parseFloat(b));
                break;
            case '/':
                operator = '';
                return divide(parseFloat(a), parseFloat(b));
                break;
            case '%':
                operator = '';
                return modulus(parseFloat(a), parseFloat(b));
                break;
            default:
                return alert('SECOND PARAMETER MUST BE + - * /');
                break;
        }
    }

    const clear = () => {
        c.addEventListener('click', () => {
            text.textContent = '';
            num1 = ''; 
            num2 = '';
            operator = '';
            operatorPressed = false;
        });
    }

    function preventRepeatedOperators() {

    }

    const listenForOperator = () => {
        calc.forEach(button => {
            button.addEventListener('click', (e) => {
                if (operatorPressed === true) {
                    if (num1 != '' && num2 != '') {
                        chainedOperations();
                    }
                }

                if (num1 != '') operatorPressed = true;

                if (e.target.id.includes('multiply') && num1 != '') {
                    operator = '*';
                    text.textContent += button.textContent;
                } else if (num1 != '') {
                    operator = e.target.textContent;
                    text.textContent += button.textContent;
                }

            });
        });
    }
    
    const populateDisplay = () => { 
        display.forEach(button => {
            button.addEventListener('click', (e) => {
                if (operatorPressed === false) {
                    if (num1.includes('.') && e.target.textContent == '.') {
                        return;
                    }
                    text.textContent += button.textContent;
                    num1 += button.textContent;
                } else if (operatorPressed) {
                    if (num2.includes('.') && e.target.textContent == '.') {
                        return;
                    }
                    text.textContent += button.textContent;
                    num2 += button.textContent;
                }
            });
        });
    }

    const chainedOperations = () => {
        num1 = operate(num1,operator,num2);
        text.textContent = num1;
        num2 = '';
        operator = '';
        operatorPressed = false;
    }

    const negativeNumber = () => {
        negative.addEventListener('click', () => {
            if (num2 == '') {
                num1 = -num1;
                text.textContent = -text.textContent;
                return;
            }
            num2 = -num2;
            text.textContent = `${num1} ${operator} ${num2}`
        });
    }

    const evaluate = () => {
        equals.addEventListener('click', () => {
            if (num2 == '' || num1 == '' || operator == '') return;
            chainedOperations();
        });
    }

    populateDisplay();
    clear();
    listenForOperator();
    negativeNumber();
    evaluate();
}

calculator();

//TODO: prevent repeated inputs on operators 
//TODO: overwrite the operator if a different one is pressed 
//TODO: center buttons 
//TODO: make sure the result display screen does not make the numbers overflow 

