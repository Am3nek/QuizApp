// onChange - A function is passed as an argument to setState() usually
//             Allow for safe updates based on the previous state used with multiple state based updates and asynchronous functions 
//             Good practice to use updater function

import React,{useState} from "react";

function NewUpdatedComponent(){

    const [count,updateCount] = useState(0)
    
    const resCount = () =>{
        //Not necessary to use count variable and with this we can increment many times.
        updateCount(c => c = 0)
    }

    const incCount = () =>{
        updateCount(count => count+1)
        updateCount(count => count+1)
        updateCount(count => count+1)
        updateCount(count => count+1)
    }
    
    const decCount = () =>{
        updateCount(count => count-1)
        updateCount(count => count-1)
        updateCount(count => count-1)
        updateCount(count => count-1)
        updateCount(count => count-1)
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

export default NewUpdatedComponent