// ...Object - 

import {useState} from 'react'

function MyComp(){
    const [car, setCar] = useState({year:2004,make:"Ford",model:"Mustang"})

    function handleYearChange(event){
        setCar(car => car = {...car,year: event.target.value})
    }

    function handleMakeChange(event){
        setCar(car => car = {...car,make: event.target.value})
    }

    function handleModelChange(event){
        setCar(car => car = {...car,model: event.target.value})

    }

    return(
        <>
            <p>Your favourite car is {car.year} {car.make} {car.model}</p>
            <input type= "number" value = {car.year} onChange={handleYearChange}/>
            <input type= "text" value = {car.make} onChange={handleMakeChange}/>
            <input type= "text" value = {car.model} onChange={handleModelChange}/>
        </>
    )
}

export default MyComp;