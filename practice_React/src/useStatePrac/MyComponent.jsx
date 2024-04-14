// React hook - special component that allows functional components 
//              to use react features without writing class components

// useState() - a react hook  that allows a stateful variable and a setter 
//              function to update its value in virtual DOM.
import React, {useState} from 'react'


function MyComponent(){
    
    const [name, setName] = useState("Guest");
    const [age,setAge] = useState(0); 
    const [isEmployed,setEmployment] = useState(false);

    let status = "No";

    const updateName = () =>{
        setName("Vedansh")
    }

    const incrementAge = () => {
        setAge(age+1);
    }
    
    const checkEmployment = () => {
        setEmployment(!isEmployed)
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={incrementAge}>Age++</button>
            <p>isEmployed: {isEmployed ? "yes" : "no"}</p>
            <button onClick={checkEmployment}>Status</button>
        </div>
    )
}

export default MyComponent;