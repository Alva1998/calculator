const calculator = () => {
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
        return a / b;
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
    
    console.log(operate(3,'*',5));
    let controler = 3;
}

calculator();