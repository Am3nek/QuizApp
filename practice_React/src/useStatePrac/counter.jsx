import React,{useState} from "react";

function Counter(){
    const [count,updateCount] = useState(0)
    
    const resCount = () =>{
        updateCount(0)
    }

    const incCount = () =>{
        updateCount(count+1)
    }
    
    const decCount = () =>{
        updateCount(count-1)
    }
    return (
        <>
        <center>
            <div className="counter-div">
                <p className="count-display">{count}</p>
                <hr></hr>
                <button className = "count-button" onClick={incCount}>Increment</button>
                <button className = "count-button" onClick={resCount}>Reset</button>
                <button className = "count-button" onClick={decCount}>Decrement</button>
            </div>
        </center>
        </>
    )
}

export default Counter;