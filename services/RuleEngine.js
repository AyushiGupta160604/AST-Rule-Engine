function tokenize(ruleString) {
    const regex = /\(|\)|AND|OR|>=|<=|!=|>|<|=|\w+(\.\w+)?/g; 
    return ruleString.match(regex);
}


// Build AST (Abstract Syntax Tree)
function createAST(ruleString) {
    const tokens = tokenize(ruleString);
    console.log('Tokens:', tokens);

    const stack = [];
    const operatorStack = [];

    tokens.forEach(token => {
        if (token === 'AND' || token === 'OR') {
            operatorStack.push(token);
        } else if (token === '(') {
            operatorStack.push(token);
        } else if (token === ')') {
            while (operatorStack[operatorStack.length - 1] !== '(') {
                const operator = operatorStack.pop();
                const right = stack.pop();
                const left = stack.pop();
                stack.push({
                    type: 'operator',
                    left,
                    right,
                    value: operator
                });
            }
            operatorStack.pop();  // Pop the '('
        } else if (/>=|<=|!=|>|<|=/.test(token)) {  // Handle operators properly
            const leftOperand = stack.pop(); // Operand before the operator
            const rightOperand = tokens.shift();  // Operand after the operator
            stack.push({
                type: 'operand',
                field: leftOperand,
                operator: token,
                value: rightOperand
            });
        } else {
            // Assume it's a field name or a value, push to stack
            stack.push(token);
        }
    });

    // Final reduction of remaining operators
    while (operatorStack.length > 0) {
        const operator = operatorStack.pop();
        const right = stack.pop();
        const left = stack.pop();
        stack.push({
            type: 'operator',
            left,
            right,
            value: operator
        });
    }

    return stack.pop();  // Final AST result
}

function evaluateAST(ast, userData) {
    if (ast.type === 'operand') {
        const { field, operator, value } = ast;
        console.log(`Evaluating Operand: ${field} ${operator} ${value} with User Data ${userData[field]}`);
        switch (operator) {
            case '>': return userData[field] > Number(value);
            case '<': return userData[field] < Number(value);
            case '>=': return userData[field] >= Number(value);
            case '<=': return userData[field] <= Number(value);
            case '=': return userData[field] == value;
            case '!=': return userData[field] != value;
            default: return false;
        }
    }

    const leftResult = evaluateAST(ast.left, userData);
    const rightResult = evaluateAST(ast.right, userData);

    console.log(`Left Result: ${leftResult}, Right Result: ${rightResult}, Operator: ${ast.value}`);
    return ast.value === 'AND' ? leftResult && rightResult : leftResult || rightResult;
}

module.exports = { createAST, evaluateAST };