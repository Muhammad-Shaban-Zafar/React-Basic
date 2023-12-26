import React, { useContext } from "react";
import { helpContext } from "../../context/HelpContext";

export default function Other() {

  const {name,firstBtnFunction,secondBtnFunction,thirdBtnFunction} = useContext(helpContext)

  return (
    <>
    
      <div className="home d-flex text-center align-items-center justify-content-center vh-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <>
                <div className="row">
                  <div className="col-12 mb-3">
                    <h2>DESTRUCTING</h2>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-dark fw-bold w-25 my-1 py-2"
                      onClick={firstBtnFunction}
                    >
                      FIRST BUTTON
                    </button>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-dark fw-bold w-25 my-1 py-2"
                      onClick={secondBtnFunction}
                    >
                      SECOND BUTTON
                    </button>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-dark fw-bold w-25 my-1 py-2"
                      onClick={thirdBtnFunction}
                    >
                      THIRED BUTTON
                    </button>
                  </div>

                  <div className="col-12 mt-5">
                    <h3>THE {name} BUTTON WORKING</h3>
                  </div>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
