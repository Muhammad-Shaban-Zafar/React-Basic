import React, { useMemo, useState } from "react";

export default function UseMemo() {

  // use useSATATE
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);
  const [number, setNumber] = useState(0);
  // end usestate


  // funtion
  function addCountFuntion() {
    setCount(count + 1);
  }

  function addItemFuntion() {
    setItem(item * 2);
  }

  //   use meno for performance
  let useAdd = useMemo(
    function () {
    //   for (let i = 0; i < 1000000000; i++) {}
      console.log("extra funtion is calling");
      return item * 5;
    },
    [item]
  );
  //end

  return (
    <>
      <div className="home d-flex text-center align-items-center justify-content-center vh-100">
        <div className="container">
          <div className="row mb-3">
            <div className="col-6 mx-auto">
              <h1>Use Memo Funtion</h1>
              <hr />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <h2>The Count Number Is : {count}</h2>
            </div>
            <div className="col-12">
              <h2>The Items Number Is :{item} </h2>
            </div>
            <div className="col-12">
              <h2>
                The Item Value Is : {useAdd} And Item Variable Update At{" "}
                {number} Time
              </h2>
            </div>
            <div className="col-6 mx-auto">
              <hr />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <button
                className="btn btn-dark fw-bold mx-1"
                onClick={addCountFuntion}
              >
                Add Count
              </button>
              <button className="btn btn-dark fw-bold" onClick={addItemFuntion}>
                Add Items
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
