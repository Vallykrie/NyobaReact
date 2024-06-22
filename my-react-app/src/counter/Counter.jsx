import { useState } from "react";
import styles from "./Counter.module.css";

function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(c => c + 1);
    }

    const decrement = () => {
        setCount(c => c - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return(
        <div className={styles.counterContainer}>
            <h1 className={styles.counterDisplay}>{count}</h1>
            <button onClick={increment} className={styles.counterButton}>Increment</button>
            <button onClick={reset} className={styles.counterButton}>Reset</button>
            <button onClick={decrement} className={styles.counterButton}>Decrement</button>
        </div>
    );
}

export default Counter;