import React, { useRef } from "react";

export default function UseRef() {
  const focusRef = useRef();
  const textRef = useRef();
  const colorRef = useRef();
  const tRef = useRef();

  // focus funtion in input
  function focusFuntion() {
    focusRef.current.focus();
  }
  // end

  // focus funtion in input
  function textFuntion() {
    textRef.current.value = "NEW VALUE";
  }
  // end

  // focus funtion in input
  function colorFuntion() {
    colorRef.current.style.color = "red";
  }
  // end

  //   setText funtion
  function setText() {
    console.log(tRef);
    tRef.current.innerText = "THIS IS A NEW HEADING";
  }
  //   end

    //   hideText funtion
    function hideText() {
        tRef.current.style.display = "none"
      }
      //   end
    
      //   hideText funtion
    function showText() {
        tRef.current.style.display = "block"
      }
      //   end
    

  return (
    <>
      <div className="home d-flex text-center align-items-center justify-content-center vh-100">
        <div className="container">
          <div className="row">
            <div className="col-8 mx-auto">
              <div className="row mb-5">
                <div className="col">
                  <h2>Use Ref Funtion</h2>
                </div>
              </div>

              <div className="formPart border p-5">
                <div className="row">
                  <div className="col">
                    <div class="form-floating mb-3 d-flex">
                      <input
                        type="email"
                        class="form-control"
                        id="floatingInput"
                        placeholder="name"
                        ref={focusRef}
                      />
                      <label for="floatingInput">Type Text </label>
                      <button
                        className="btn btn-primary fw-bold btn-sm px-4"
                        onClick={focusFuntion}
                      >
                        FOCUS
                      </button>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div class="form-floating mb-3 d-flex">
                      <input
                        type="email"
                        class="form-control"
                        id="floatingInput"
                        placeholder="name"
                        ref={textRef}
                      />
                      <label for="floatingInput">Type Text </label>
                      <button
                        className="btn btn-primary fw-bold btn-sm px-4"
                        onClick={textFuntion}
                      >
                        VALUE
                      </button>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div class="form-floating mb-3 d-flex">
                      <input
                        type="email"
                        class="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        ref={colorRef}
                      />
                      <label for="floatingInput">Type Text </label>
                      <button
                        className="btn btn-primary fw-bold btn-sm px-4"
                        onClick={colorFuntion}
                      >
                        COLOR
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col">
                  <div className="">
                    <h3 className="mb-3" ref={tRef}>THIS IS HEADING</h3>
                  </div>
                  <button className="btn btn-primary fw-bold mx-1" onClick={setText}>
                    SET NEW TEXT
                  </button>
                  <button className="btn btn-primary fw-bold mx-1" onClick={hideText}>
                    HIDE TEXT
                  </button>
                  <button className="btn btn-primary fw-bold mx-1" onClick={showText}>
                    SHOW TEXT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
