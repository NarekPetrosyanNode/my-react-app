import React, { useState } from 'react';

export default function MuButton() {
    const [ count, setCount ] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        if (count === 0) return 'Fuck you';
        setCount(count - 1);
    }

    return (
        <div>
            <button onClick={increment}>
                Increment Count
            </button>

            <h1>{count}</h1>

            <button onClick={decrement}>
                Decrement Count
            </button>
        </div>
    );
}