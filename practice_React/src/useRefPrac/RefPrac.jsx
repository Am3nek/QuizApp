// useState - Re-renders the component when the state value change.

// useRef - "use Reference" Does not cause re-renders when its value changes.
//          When you want a component to "remember" some information, but you
//          dont want that information to trigger new renders.

//          1. Accessing/Interfacing with DOM elements
//          2. Handling Focus, Animations and transitions
//          3. Handling Timers and intervals.

import React,{useState,useEffect,useRef} from "react";

function PracRef(){
    
   const inputRef = useRef(null);

    console.log(inputRef);   

    useEffect(()=>{
        console.log("Component Rendered");
        console.log(inputRef)
    })

    function handleClick(){
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "green";
    }

    return (
        <div>
            <button onClick={handleClick}>Click me!</button><br/>
            <input ref = {inputRef}/>
        </div>
    )
}

export default PracRef;