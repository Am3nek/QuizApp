// useEffect() - react hook which tells react to do some code when (pick one of the following):
//               1. This componemt re renders 
//               2. This Component mounts
//               3. The state of a value changes
// useEffect(function, [dependencies])

// 1. useEffect(()=>{}) // Runs after every re render
// 2. useEffect(()=>{}, []) // Runs only on mount
// 3. useEffect(() => {}, [value]) //Runs on mount+when value changes

// USES:
// 1.Event listner
// 2. DOM Manipulation
// 3. Subscription
// 4. Fetching data from api
// 5. clean up data when component un mounts

import React,{useState,useEffect} from "react";

function PracticeEffect(){
    
    var cond = false;
    const [count,setCount] = useState(0);
    const [color,setColor] = useState("green");

    useEffect(()=>{
        document["title"] = 'Count: '+ count + " Color "+ color ;
        return() =>{
            //some clean up code
        }
    },[color])

    function addCount(){
        setCount(c=>c+1);
    }
    function subtractCount(){
        setCount(c=>c-1);
    }

    function changeColor(){
        setColor(c => c === "green"? "red":"green")
    }

    return(
        <>
        <p style = {{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button><br/>

        <p>color: {color}</p>
        <button onClick={changeColor}>Change color</button>
        </>
    )

}

export default PracticeEffect;