import React,{useEffect,useState} from "react";

function Width(){

    const [width,setWidth] = useState(window.innerWidth);
    const [height,setHeight] = useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener("resize",handleResize);
        console.log("Event Listner Added");

        return () =>{window.removeEventListener("resize",handleResize);
        console.log("Event Listner Removed");
    }
    },[])

    useEffect(()=>{
        document["title"] = "size: "+ width +" x "+height;
    })

    

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        <>
        <p>Window width: {width}</p>
        <p>Window height: {height}</p>
        </>
    )

}

export default Width;