import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return(
        <div className="counter-container">
            <h1 className="count-display">{count}</h1>
            <button onClick={increment} className="counter-button">Increment</button>
            <button onClick={reset} className="counter-button">Reset</button>
            <button onClick={decrement} className="counter-button">Decrement</button>
        </div>
    );
}

export default Counter;