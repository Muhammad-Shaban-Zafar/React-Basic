import React, { useContext } from "react";
import { countContext } from "../../context/CountContext";


export default function UseContext() {    

  const {number,incrimentFuntion,decrimentFuntion,resetFuntion} = useContext(countContext)

  return (
    <>
      <div className="home d-flex text-center align-items-center justify-content-center vh-100">
        <div className="container">
          <div className="row mb-4">
            <div className="col-6 mx-auto">
              <h2>Use Context or Create Context</h2>
              <hr />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-6 mx-auto">
                <h2>{number}</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
                <button className="btn btn-primary fw-bold w-25 my-1 py-2" onClick={incrimentFuntion}>INCREIMENT</button>
            </div>
            <div className="col-12">
                <button className="btn btn-primary fw-bold w-25 my-1 py-2" onClick={decrimentFuntion}>DECREIMENT</button>
            </div>
            <div className="col-12">
                <button className="btn btn-primary fw-bold w-25 my-1 py-2" onClick={resetFuntion}>RESET</button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
