import React, { useState } from "react";

export default function DateAndTime() {
  let monthes = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];
  let days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  // use state
  const [value, newValue] = useState("");
  const [result, updateResult] = useState("Result?");
  const [day, getDayFromDate] = useState(new Date().getDay());
  const [month, getMonthFromDate] = useState(new Date().getMonth());

  // end

  // change input value
  function updatValue(e) {
    let val = e.target.value;
    console.log(val);
    newValue(val);
  }
  // end

  // set time in box
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  const updateTime = function () {
    setCurrentTime(new Date().toLocaleTimeString());
  };
  setInterval(updateTime, 1000);
  //end

  // clear data function
  function clearData() {
    updateResult("Result?");
  }
  // end

  //get day
  function getDayFunction() {
    debugger;
    getDayFromDate(day);
    updateResult(days[day]);
  }
  // end

  // get month
  function getMonthFunction() {
    debugger;
    getMonthFromDate(month);
    updateResult(monthes[month]);
  }
  // end

  // get day since i born
  function getDaySinceIBorn() {
    debugger;
    if (!value) {
      alert("please enter the DOB");
      return;
    }

    let bornDate = new Date(value)
    let todayTime = new Date().getTime()
    let bornDateTime = bornDate.getTime()
    let msDifference = todayTime - bornDateTime;
    let daysDifference = msDifference / (1000 * 60 * 60 * 24)
    let exactDay = Math.floor(daysDifference)

    updateResult(exactDay)
    newValue("")

  }
  // end

  // get your age
  function getYourAge() {
    debugger;
    if (!value) {
      alert("please enter the DOB");
      return;
    }
    let birthYear = new Date(value).getFullYear();
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    updateResult(age);
    newValue("");
  }
  // end 

  // when is your next birthday
  function remainingDays() {
    debugger
    if (!value) {
      alert("please enter the DOB");
      return;
    }
    
    let birthDate = new Date(value)
    let msdifferece = birthDate.getTime() - new Date().getTime();
    let daysDiff = msdifferece / (1000 * 60 * 60 * 24);
    let days = Math.floor(daysDiff)

    updateResult(days)
    newValue("")

  }
  // end 

  return (
    <>
      <div className="simpleLogic d-flex text-center align-items-center justify-content-center vh-100">
        <div className="container">
          {/* header */}
          <div className="row">
            <div className="col-7 mx-auto text-center">
              <h1>REACT DATE AND TIME FUNTIONS</h1>
              <hr></hr>
            </div>
          </div>
          {/*closed header */}

          <div className="row">
            <div className="col border p-5">
              <div class="form-floating mb-3">
                <input
                  type="datetime-local"
                  class="form-control"
                  id="floatingInput"
                  value={value}
                  placeholder="date"
                  onChange={updatValue}
                />
                <label for="floatingInput">Date and time</label>
              </div>

              <div className="row">
                <div className="col-6">
                  <div class="d-grid gap-2 col-12 mx-auto">
                    <button
                      class="btn btn-danger fw-bold"
                      type="button"
                      onClick={getDayFunction}
                    >
                      Get Name Of Today
                    </button>
                  </div>
                </div>
                <div className="col-6">
                  <div class="d-grid gap-2 col-12 mx-auto">
                    <button
                      class="btn btn-danger fw-bold"
                      type="button"
                      onClick={getMonthFunction}
                    >
                      Get Name Of Month
                    </button>
                  </div>
                </div>
              </div>

              <div className="row pt-1">
                <div className="col-12">
                  <div class="d-grid gap-2 col-12 mx-auto">
                    <button
                      class="btn btn-danger fw-bold"
                      type="button"
                      onClick={getDaySinceIBorn}
                    >
                      Calculate Days Passed Since I Born
                    </button>
                  </div>
                </div>
              </div>

              <div className="row pt-1">
                <div className="col-12">
                  <div class="d-grid gap-2 col-12 mx-auto">
                    <button class="btn btn-danger fw-bold" type="button" onClick={remainingDays}>
                      When Is Your Next Birthday
                    </button>
                  </div>
                </div>
              </div>

              <div className="row pt-1">
                <div className="col-6">
                  <div class="d-grid gap-2 col-12 mx-auto">
                    <button
                      class="btn btn-danger fw-bold"
                      type="button"
                      onClick={getYourAge}
                    >
                      Get Your Age
                    </button>
                  </div>
                </div>
                <div className="col-6">
                  <div class="d-grid gap-2 col-12 mx-auto">
                    <button class="btn btn-danger fw-bold" type="button">
                      Great User
                    </button>
                  </div>
                </div>
              </div>

              <div className="row pt-1">
                <div className="col-12">
                  <div class="d-grid gap-2 col-12 mx-auto">
                    <button class="btn btn-danger fw-bold" type="button">
                      Calculate Tax
                    </button>
                  </div>
                </div>
              </div>

              <div className="row pt-1">
                <div className="col-12">
                  <div class="d-grid gap-2 col-12 mx-auto">
                    <button class="btn btn-danger fw-bold" type="button">
                      Calculate Total = Price + Tax
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col border p-5">
              <div className="row p-4 bg-danger text-white border mb-2">
                <div className="col">
                  <h1>{currentTime}</h1>
                </div>
              </div>

              <div className="row p-5 border mb-2">
                <div className="col">
                  <h1>{result}</h1>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div class="d-grid gap-2 col-12 mx-auto">
                    <button
                      class="btn btn-danger btn-lg fw-bold"
                      type="button"
                      onClick={clearData}
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
