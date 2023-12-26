import React from "react";
import Button from "../../components/Button/Button";

export default function Props() {
  return (
    <>
      <div className="home d-flex text-center align-items-center justify-content-center vh-100">
        <div className="container">
          <div className="row mb-5">
            <div className="col">
              <h2>Props Funtion</h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              {/* props funtionality */}
              <Button bgColor="primary" FW="bold" FS="lg" color="primary" name = "PRIMARY"/>
              <Button bgColor="secondary" FW="bold" color="secondary" name = "SECONDARY"/>
              <Button bgColor="success" FS="sm" color="success" name = "SUCCESS"/>
              <Button bgColor="dark" FS="sm" FW="bold" color="dark" name = "DARK"/>
              <Button bgColor="light" FS="sm" FW="bold" color="white"  name = "WHITE"/>
              <Button bgColor="info" color="info"  name = "INFO"/>
              <Button bgColor="danger" FS="lg" color="danger" name = "DANGER"/>
              {/*end props funtionality */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
