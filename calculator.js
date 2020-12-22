const calculator = () => {
    //*global variables 
    const text = document.querySelector('#text');
    let displayValue = '';
    let displayValue2 = '';
    let operator = '';

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
                return add(a,b);
                break;
            case '-':
                return subtract(a,b);
                break;
            case '*':
                return multiply(a,b);
                break;
            case '/':
                return divide(a,b);
                break;
            default:
                return 'SECOND PARAMETER MUST BE + - * /';
                break;
        }
    }

    const clear = () => {
        const c = document.querySelector('#c');
        c.addEventListener('click', () => {
            text.textContent = '';
            displayValue = '';
        });
    }

    const preventRepeatedInputs = () => {
        if (text.textContent.includes('.')) return false;
        return true;
    } 

    const listenForOperator = () => {
        const calc = docume.querySelectorAll('.calc');
        // if (displayValue == '') return ''; 
        return;
    }
    
    const populateDisplay = () => {
        const display = document.querySelectorAll('.display'); 

        display.forEach(button => {
            button.addEventListener('click', (e) => {
                text.textContent += button.textContent;
            });
        });
    }

    const changeSign = () => {
        const negative = document.querySelector('#negative');
        negative.addEventListener('click', () => {
            //TODO: currently uses the ENTIRE text content to change to negative, change it to only update the current number 
            if (Math.sign(text.textContent)) {
                text.textContent = -text.textContent;
            }
        });
    }

    populateDisplay();
    clear();
    changeSign();
}

calculator();