import { useState } from "react";

function Calculator() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [op1, setOP1] = useState('+');
    const [res1, setRes1] = useState('');

    const [numA, setNumA] = useState('');
    const [numB, setNumB] = useState('');
    const [op2, setOP2] = useState('+');
    const [res2, setRes2] = useState('');

    const calc = (a, b, op) => {
        const n1 = Number(a);
        const n2 = Number(b);

        if (isNaN(n1) || isNaN(n2)) {
            return "Invalid input";
        }

        if (op === '/' && n2 === 0) {
            return "Error: Division by 0";
        }

        switch(op) {
            case '+': return n1 + n2;
            case '-': return n1 - n2;
            case '*': return n1 * n2;
            case '/': return n1 / n2;
            default: return "Unknown operation";
        }
    }

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h3>Calculator with radiobuttons</h3>
            <input type="number" value={num1} onChange={e => setNum1(e.target.value)}/>
            <input type="number" value={num2} onChange={e => setNum2(e.target.value)}/>
            <label>
                <input
                    type="radio"
                    name="op1"
                    value="+"
                    checked={op1 === "+"}
                    onChange={e => setOP1(e.target.value)}
                />
                +
            </label>
            <label>
                <input
                    type="radio"
                    name="op1"
                    value="-"
                    checked={op1 === "-"}
                    onChange={e => setOP1(e.target.value)}
                />
                -
            </label>
            <label>
                <input
                    type="radio"
                    name="op1"
                    value="*"
                    checked={op1 === "*"}
                    onChange={e => setOP1(e.target.value)}
                />
                *
            </label>
            <label>
                <input
                    type="radio"
                    name="op1"
                    value="/"
                    checked={op1 === "/"}
                    onChange={e => setOP1(e.target.value)}
                />
                /
            </label>
            <button onClick={() => setRes1(calc(num1, num2, op1))}>Result</button>
            <p>Result: {res1}</p>

            <h3>Calculator with dropdown list</h3>
            <input
                type="number"
                value={numA}
                onChange={e => setNumA(e.target.value)}
            />
            <input
                type="number"
                value={numB}
                onChange={e => setNumB(e.target.value)}
            />
            <select value={op2} onChange={e => setOP2(e.target.value)}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <button onClick={() => setRes2(calc(numA, numB, op2))}>Result</button>
            <p>Result: {res2}</p>
        </div>
    );
}

export default Calculator;
