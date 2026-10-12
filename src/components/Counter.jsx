
import React, { useState } from 'react'

function Counter() {
    let [value, setValue] = useState(0)
    // let count = 0;

    function increment() {
        // count++;
        setValue(value+ 1);
    }

    function decrement() {
        // count--;
        setValue(value- 1);
    }

    return (
        <div>
            <h1>Counter</h1>

            <button onClick={increment}>+</button>
            <p>{value}</p>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Counter