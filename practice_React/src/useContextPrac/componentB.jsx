import React,{useContext,useEffect,useState} from "react";
import ComponentC from "./componentC";

function ComponentB(){

    

    return(
        <div className="box">
            <h1>ComponentB</h1>
            <ComponentC/>
        </div>
    )
}

export default ComponentB;