// useContext - React hook allows you to share values between multiple
//              levels of components without passing props through each level

// PROVIDER COMPONENT:
// 1. import { createContext } from "react";
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//     <child/>
//     </MyContext.Provider>

// Consumer Components
// 1. import React,{useContext} from 'react';
//     import { useContext } from "./ComponentA";
// 2. const value = useContext(MyContext)

import React,{useState,createContext} from "react";
import ComponentB from "./componentB";

export const UserContext = createContext();
function ComponentA(){
    const [user,setUser] = useState("Vedansh");

    return(
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value = {user}>
                <ComponentB value = {user}/>
            </UserContext.Provider>

        </div>
    )
}

export default ComponentA;