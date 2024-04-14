import React,{useContext,useEffect,useState} from "react";
import { UserContext } from "./componentA";
import ComponentD from "./componentD";

function ComponentC(){

    const user = useContext(UserContext)

    return(
        <div className="box">
            <h1>ComponentC</h1>
            <h2>{`Where u running ${user}`}</h2>
            <ComponentD/>   
        </div>
    )
}

export default ComponentC;