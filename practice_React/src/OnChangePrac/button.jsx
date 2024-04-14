//Used for event handler onClick there is onDoubleClick

function Button(){
    // var count = 0;
    // const handleClick = (name) => {
    //     if(count<4){
    //         count++;
    //         console.log(name+" clicked me "+ count+" time/s")
    //     }else{
    //         console.log(name+" stop clicking me")
    //     }
    // };
    //const clickResp = (name) => console.log(name+ ' stop clicking me');
    
    const handleClick = (e) => e.target.textContent = "Ouch 😂";

    return (
        <button onClick={(e) => handleClick(e)}>Click Me 😁</button>
    )
}

export default Button;