import React, { useState, useEffect } from "react";
import { Users } from "../../Data/Users";

const initialUsers = Users;

export default function UserStatus() {
  // use usestate
  const [value, setValue] = useState("All");
  const [users, setUsers] = useState(initialUsers);
  const [status, setStatus] = useState("active");
  const [filterUsers, setFilterUsers] = useState([]);
  // end useState

  // change input funtion
  function changeFire(e) {
    let newVal = e.target.value;
    setValue(newVal);
  }
  // end

  // useEffect
  useEffect(() => {
    if (value !== "All") {
      let filteredUsers = users.filter((user) => user.status === value);
      setFilterUsers(filteredUsers);  
    }
    else{
      setFilterUsers(initialUsers)
    }
    
  }, [value, users]);

  // end useEffect

  return (
    <>
      <div className="home d-flex text-center align-items-center justify-content-center vh-100">
        <div className="container">
          <div className="row mb-3">
            <div className="col">
              <h2 className="fw-bold">Use Effect Funtion</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-6 mx-auto text-center">
              <select
                className="form-control"
                value={value}
                onChange={changeFire}
              >
                <option>All</option>
                <option>Active</option>
                <option>In Active</option>
                <option>Pending</option>
              </select>
            </div>

            <div className="row mt-4">
              <div className="col-8 mx-auto">
                <div className="px-4 py-4  border">
                  <h3 className="mb-3">The {value} Users List </h3>

                  {filterUsers.map((user, i) => (
                    <p key={i}>
                      NAME: <b>{user.name}</b> and status is:{" "}
                      <b>{user.status}</b>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
