import React, { createContext,useState } from "react";
export const helpContext = createContext();


export default function HelpContextProvider(props) {
    const [name, setName] = useState("NOTHING");

    function firstBtnFunction() {
      alert("this is the first btn function");
      setName("FIRST");
    }
    function secondBtnFunction() {
      alert("this is the second btn function");
      setName("SECOND");
    }
    function thirdBtnFunction() {
      alert("this is the third btn function");
      setName("THIRD");
    }
  

  return (
    <helpContext.Provider value={{ name,setName,firstBtnFunction,secondBtnFunction,thirdBtnFunction }}>
      {props.children}
    </helpContext.Provider>
    
  );
}
