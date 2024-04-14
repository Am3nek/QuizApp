// onChange - it is an event handler which is used with form elements
//             eg <input>,<textarea>,<select>,<radio>
//             Triggers a function everytime a change is made

import React,{useState} from "react";

function NewComponent(){
    const [name,setName] = useState("Guest");
    const [quantity,setQuantity] = useState();
    const [comment,setComment] = useState();
    const [payment,setPayment] = useState();
    const [shipping,setShipping] = useState("");

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }



    return (
        <div>
            <input value = {name} onChange = {handleNameChange}/>
            <p>Name: {name}</p>
            <input value = {quantity} onChange={handleQuantityChange} type = "number"/>
            <p>quantity: {quantity}</p>
            <textarea value={quantity} onChange={handleCommentChange} placeholder="enter delivery instruction"></textarea>
            <p>Comment: {comment}</p>

            <select value = {payment} onChange={handlePaymentChange}>
                <option value = "UPI">UPI</option>
                <option value = "visa">VISA</option>
                <option value = "master card">Master Card</option>
                <option value = "Gift card">Gift Card</option>
            </select>
            <p>payment: {payment}</p>
            <label>
                <input type = "radio" value = "Pickup" checked = {shipping === "Pickup"} onChange = {handleShippingChange}/>
                Pickup
            </label>
            <br></br>
            <label>
            <input type = "radio" value = "Delivery" checked = {shipping === "Delivery"} onChange = {handleShippingChange}/>
                Delivery
            </label>
            <p>Delivery: {shipping}</p>

        </div>
    )
}

export default NewComponent