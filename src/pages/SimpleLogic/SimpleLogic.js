import React, { useState } from "react";
export default function SimpleLogic() {
  
  // use useState
  const [value, newValue] = useState("");
  const [result, newResult] = useState("");
  const [countryList, updatCountry] = useState([
    "pakistan",
    "india",
    "england",
    "newzeland",
  ]);

  const [number, updateNumber] = useState(Math.random());
  // end

  // onchange input funtion
  function updateValue(e) {
    newValue(e.target.value);
    console.log(value);
  }
  // end

  // clera btn funtion
  function clearResultFuntion() {
    newValue("");
    newResult("");
  }
  // end

  // print name funtion
  function printNameFuntion() {
    if (!value) {
      alert("enter the value");
      return;
    }

    newResult(value);
    newValue("");
  }
  // end

  // upperCaseFuntion
  function upperCaseFunction() {
    if (!value) {
      alert("enter the value");
      return;
    }

    newResult(value.toUpperCase());
    newValue("");
  }
  // end

  // lowerCaseFuntion
  function lowerCaseFunction() {
    if (!value) {
      alert("enter the value");
      return;
    }

    newResult(value.toLowerCase());
    newValue("");
  }
  // end

  // country list btn
  function printCountryList() {
    // countryList
    newResult(countryList);
  }
  // end

  // find elements length
  function findLength() {
    if (!value) {
      alert("enter the value");
      return;
    }

    newResult(value.length);
    newValue("");
  }

  // round number
  function roundNumber() {
    if (!value) {
      alert("enter the value");
      return;
    }

    newResult(Math.round(value));
    newValue("");
  }
  // end

  // ciel number
  function cielNumber() {
    if (!value) {
      alert("enter the value");
      return;
    }

    newResult(Math.ceil(value));
    newValue("");
  }
  // end

  // floor number
  function floorNumber() {
    if (!value) {
      alert("enter the value");
      return;
    }

    newResult(Math.floor(value));
    newValue("");
  }
  // end

  // genrate number
  function genrateNumber() {
    updateNumber(Math.random());
    newResult(number);
  }
  // end

  // through a dice
  function throughDice() {
    updateNumber(Math.random() * 6);
    newResult(Math.floor(number + 1));
  }
  // end

  // genrate a password
  function genratePassword() {}
  // end

  // genrate table
  function genrateTable() {
    if (!value) {
      alert("enter the value");
      return;
    }

    for (let i = 1; i <= 10; i++) {
      newResult(`${value} * ${i} = ${value * i}`);
    }

    newValue("");
  }
  // end

  return (
    <>
      <div className="simpleLogic d-flex text-center align-items-center justify-content-center vh-100">
        <div className="container">
          {/* header */}
          <div className="row">
            <div className="col-7 mx-auto text-center">
              <h1>REACT BASIC FUNTIONS</h1>
              <hr></hr>
            </div>
          </div>
          {/*closed header */}

          <div className="row">
            <div className="col border p-5">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  value={value}
                  placeholder="text"
                  onChange={updateValue}
                />
                <label for="floatingInput">Typping</label>
              </div>

              <div className="row">
                <div className="col-6">
                  <div class="d-grid gap-2 col-12 mx-auto">
                    <button
                      class="btn btn-primary fw-bold"
                      type="button"
                      onClick={printNameFuntion}
                    >
                      Print Name
                    </button>
                  </div>
                </div>
                <div className="col-6">
                  <div class="d-grid gap-2 col-12 mx-auto">
                    <button
                      class="btn btn-primary fw-bold"
                      type="button"
                      onClick={upperCaseFunction}
                    >
                      Upper Case
                    </button>
                  </div>
                </div>
              </div>

              <div className="row pt-1">
                <div className="col-6">
                  <div class="d-grid gap-2 col-12 mx-auto">
                    <button
                      class="btn btn-primary fw-bold"
                      type="button"
                      onClick={lowerCaseFunction}
                    >
                      Lower Case
                    </button>
                  </div>
                </div>
                <div className="col-6">
                  <div class="d-grid gap-2 col-12 mx-auto">
                    <button
                      class="btn btn-primary fw-bold"
                      type="button"
                      onClick={printCountryList}
                    >
                      Country List
                    </button>
                  </div>
                </div>
              </div>

              <div className="row pt-1">
                <div className="col-6">
                  <div class="d-grid gap-2 col-12 mx-auto">
                    <button class="btn btn-primary fw-bold" type="button">
                      Add Country
                    </button>
                  </div>
                </div>
                <div className="col-6">
                  <div class="d-grid gap-2 col-12 mx-auto">
                    <button
                      class="btn btn-primary fw-bold"
                      type="button"
                      onClick={findLength}
                    >
                      Element Length
                    </button>
                  </div>
                </div>
              </div>

              <div className="row pt-1">
                <div className="col-6">
                  <div class="d-grid gap-2 col-12 mx-auto">
                    <button
                      class="btn btn-primary fw-bold"
                      type="button"
                      onClick={roundNumber}
                    >
                      Round Number
                    </button>
                  </div>
                </div>
                <div className="col-6">
                  <div class="d-grid gap-2 col-12 mx-auto">
                    <button
                      class="btn btn-primary fw-bold"
                      type="button"
                      onClick={cielNumber}
                    >
                      Ceil Number
                    </button>
                  </div>
                </div>
              </div>

              <div className="row pt-1">
                <div className="col-6">
                  <div class="d-grid gap-2 col-12 mx-auto">
                    <button
                      class="btn btn-primary fw-bold"
                      type="button"
                      onClick={floorNumber}
                    >
                      Floor Number
                    </button>
                  </div>
                </div>
                <div className="col-6">
                  <div class="d-grid gap-2 col-12 mx-auto">
                    <button
                      class="btn btn-primary fw-bold"
                      type="button"
                      onClick={genrateNumber}
                    >
                      Genrate Random Number
                    </button>
                  </div>
                </div>
              </div>

              <div className="row pt-1">
                <div className="col-6">
                  <div class="d-grid gap-2 col-12 mx-auto">
                    <button
                      class="btn btn-primary fw-bold"
                      type="button"
                      onClick={throughDice}
                    >
                      Through Deice
                    </button>
                  </div>
                </div>
                <div className="col-6">
                  <div class="d-grid gap-2 col-12 mx-auto">
                    <button
                      class="btn btn-primary fw-bold"
                      type="button"
                      onClick={genratePassword}
                    >
                      Genrate Password
                    </button>
                  </div>
                </div>
              </div>

              <div className="row pt-1">
                <div className="col">
                  <div class="d-grid gap-2 col-12 mx-auto">
                    <button
                      class="btn btn-primary fw-bold"
                      type="button"
                      onClick={genrateTable}
                    >
                      Genrate Table
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col border p-5">
              <div className="row p-5 border mb-2">
                <div className="col">
                  <h1>The result is : {result}</h1>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div class="d-grid gap-2 col-12 mx-auto">
                    <button
                      class="btn btn-primary btn-lg fw-bold"
                      type="button"
                      onClick={clearResultFuntion}
                    >
                      Clear Result
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
