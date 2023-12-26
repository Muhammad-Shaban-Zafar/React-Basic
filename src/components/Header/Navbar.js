import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      <div class="container">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/" class="nav-link me-2" aria-current="page">
                Home
              </Link>
            </li>

            <li class="nav-item">
              <Link to="/simpleLogic" class="nav-link me-2" aria-current="page">
                Simple Logics
              </Link>
            </li>

            <li class="nav-item">
              <Link to="/dateAndTime" class="nav-link me-2" aria-current="page">
                Date And Time
              </Link>
            </li>

            <li class="nav-item">
              <Link
                to="/formsHandling"
                class="nav-link me-2"
                aria-current="page"
              >
                Forms Handling
              </Link>
            </li>

            <li class="nav-item">
              <Link to="/useEffect" class="nav-link me-2" aria-current="page">
                Use Effect
              </Link>
            </li>

            <li class="nav-item">
              <Link to="/props" class="nav-link me-2" aria-current="page">
                Props Function
              </Link>
            </li>

            <li class="nav-item">
              <Link to="/useRef" class="nav-link me-2" aria-current="page">
                Use Ref
              </Link>
            </li>

            <li class="nav-item">
              <Link to="/useMemo" class="nav-link me-2" aria-current="page">
                Use Memo
              </Link>
            </li>

            <li class="nav-item">
              <Link to="/useContext" class="nav-link me-2" aria-current="page">
                Use Context/Create Context
              </Link>
            </li>

            <li class="nav-item">
              <Link to="/other" class="nav-link me-2" aria-current="page">
                Other
              </Link>
            </li>
          </ul>

          
        </div>
       
      </div>
    </nav>
  );
}
