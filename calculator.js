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
    let result = '';

    const add = (a,b) => {
        return a + b;
    }

    const subtract = (a,b) => {
        return a - b;
    }

    const multiply = (a,b) => {
        return a * b;
    }

    const divide = (a,b) => {
        if (b == 0) {
            alert('CANT DIVIDE BY 0 DELETING THE UNIVERSE IN T MINUS 10 MINUTES');
            return;
        }
        return a / b;
    }

    const modulus = (a,b) => {
        return a % b;
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
            default:
                return alert('SECOND PARAMETER MUST BE + - * /');
                break;
        }
    }

    const clear = () => {
        c.addEventListener('click', () => {
            text.textContent = '';
            num1 = ''; //TODO remove this if you need to keep updating num1 with the result 
            num2 = '';
            operator = '';
            result = '';
        });
    }

    const preventRepeatedInputs = () => {
        if (num1 == '.' || num1.includes('.')) return;
    } 

    const listenForOperator = () => {
        calc.forEach(button => {
            button.addEventListener('click', (e) => {
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
                text.textContent += button.textContent;
                if (num1 == '') {
                    num1 += button.textContent;
                } else {
                    num2 += button.textContent;
                }
            });
        });
    }

    const changeSign = () => {
        negative.addEventListener('click', () => {
            if (Math.sign(text.textContent)) {
                text.textContent = -text.textContent;
                if (num1 == '') {
                    num2 = -num2;
                    return;
                }
                num1 = -num1;
                return;
            }
        });
    }

    const evaluate = () => {
        equals.addEventListener('click', () => {
            if (num2 == '' || num1 == '' || operator == '') return;
            num1 = operate(num1,operator,num2);
            text.textContent = num1;
        });
    }

    populateDisplay();
    clear();
    changeSign();
    listenForOperator();
    evaluate();
}

calculator();