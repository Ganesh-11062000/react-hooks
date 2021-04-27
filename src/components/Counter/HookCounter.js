import React,{ useState } from 'react'

function HookCounter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button className="btn btn-primary" onClick={() => setCount(count+1)}>Click: {count}</button>
        </div>
    )
}

export default HookCounter


