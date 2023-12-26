import React, { useState, useEffect } from "react";

let userObject = {
  userName: "",
  email: "",
  password: "",
};

export default function Forms() {
  const [state, setState] = useState(userObject);

  // onChange handler event
  function onChangeHandler(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }
  // end

  // on submit funtion
  function onSubmitFunction(e) {
    debugger;
    e.preventDefault();

    const { userName, email, password } = state;

    if (!userName.length || userName.length < 3) {
      alert("please enter the userName correctly");
      return;
    } else if (!email.length) {
      alert("please enter the correct email");
      return;
    } else if (!password || password.length < 8) {
      alert("please enter the password");
      return;
    }

    console.log(state);
  }
  // end

  // use effect funtion
  // useEffect(function () {
  //   alert("i am a use effect")
  // },[])
  // end

  return (
    <>
      <div className="home d-flex text-center align-items-center justify-content-center vh-100">
        <div className="container">
          <form onSubmit={onSubmitFunction} className="row">
            <div className="col-8 mx-auto text-center shadow p-5">
              <div className="row text-center mb-4">
                <div className="col">
                  <h2>Forms Handling</h2>
                </div>
              </div>

              <div className="row">
                <div className="col-10 text-center mx-auto">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      name="userName"
                      onChange={onChangeHandler}
                      placeholder="name"
                    />
                    <label for="floatingInput">User Name</label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-10 text-center mx-auto">
                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInput"
                      name="email"
                      onChange={onChangeHandler}
                      placeholder="name@gmail.com"
                    />
                    <label for="floatingInput">Email Address</label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-10 text-center mx-auto">
                  <div class="form-floating mb-3">
                    <input
                      type="password"
                      class="form-control"
                      id="floatingInput"
                      name="password"
                      onChange={onChangeHandler}
                      placeholder="password"
                    />
                    <label for="floatingInput">Password</label>
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-10 mx-auto text-center">
                  <div class="d-grid gap-2">
                    <button class="btn btn-dark fw-bold" type="submit">
                      SUBMIT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
