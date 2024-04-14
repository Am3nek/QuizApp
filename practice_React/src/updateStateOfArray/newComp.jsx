import React,{useState} from "react";

function Compo(){
    const[foods,setFoods] = useState(["apple","banana","mango"])


    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f,newFood])
    }

    function handleRemoveFood(index){
        setFoods(foods.filter((_,i) => i !== index))

    }

    return (
        <>
            <h2>List of Foods</h2>
            <ul>
                {foods.map((food,index) => <li key = {index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
            </ul>
            <input type = "text" id= "foodInput" placeholder = "Enter food name"/>
            <button onClick={handleAddFood}>Add food</button> 
            <button >Remove food</button> 
        </>
    )
}

export default Compo;