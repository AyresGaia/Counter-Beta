import { useState } from "react"

function MyCounter(){
    const[count,setCount]=useState(0);

    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
    const reset=()=>{
        setCount(0);
    }

    return(
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <div className="btn-box">
                <button className="counter-button" onClick={decrement}>Decrease</button>
                <button className="counter-button" onClick={reset}>Reset</button>
                <button className="counter-button" onClick={increment}>Increase</button>
            </div>
            <span>Created with 💚 by Archduke</span>
        </div>
    );
}

export default MyCounter