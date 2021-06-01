import { useState } from 'react';

export default function Button(props) {
    const [counter, setCounter] = useState(1);

    function increment() {
        setCounter(counter + 1);
    }

    return (
        <>
            <span>1</span>
            <button onClick={increment}>{props.children}</button>
            <br />
        </>
    )
}