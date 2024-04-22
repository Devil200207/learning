import { Heading } from "./Heading";
import { useState } from 'react';

export function HeaderWithButton()
{
    let [count, setCount] = useState("Chinmay");

    return <div>
        <button onClick={() => {
            setCount(Math.random());
        }}>Click me to change the title</button>
        <Heading title={count}/>
    </div>
}