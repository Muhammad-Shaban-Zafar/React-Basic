import React, { createContext,useState } from "react";
export const countContext = createContext();
const myName = "Muhammed Shaban Zafar";
const initialState = 0;


export default function CountContextProvider(props) {

  const [number, setNumber] = useState(initialState);

  function incrimentFuntion() {
    setNumber(number + 1);
  }

  function decrimentFuntion() {
    if (number > 0) {
      setNumber(number - 1);
    }
  }

  function resetFuntion() {
    setNumber(initialState);
  }

  return (
    <countContext.Provider value={{ myName,number,incrimentFuntion,decrimentFuntion,resetFuntion }}>
      {props.children}
    </countContext.Provider>
  );
}
