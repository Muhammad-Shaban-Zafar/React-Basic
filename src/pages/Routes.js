
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SimpleLogic from "./SimpleLogic";
import Header from "../components/Header"
import Footer from "../components/Footer"
import DateAndTime from "./DateAndTime";
import Forms from "./Forms";
import UserStatus from "./UsersStatus/UserStatus";
import Props from "./Props/Props";
import PageNotFound from "./PageNotFound/PageNotFound";
import UseRef from "./UseRef/UseRef";
import UseMemo from "./UseMemo/UseMemo";
import UseContext from "./UseContext/UseContext";
import Other from "./Other/Other";


export default function CustomRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <main>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/simpleLogic" element={<SimpleLogic />} />
          <Route path="/dateAndTime" element={<DateAndTime />} />
          <Route path="/formsHandling" element={<Forms />} />
          <Route path="/useEffect" element={<UserStatus />} />
          <Route path="/props" element={<Props />} />
          <Route path="/pageNotFound" element={<PageNotFound />} />
          <Route path="/useRef" element={<UseRef />} />
          <Route path="/useMemo" element={<UseMemo />} />
          <Route path="/useContext" element={<UseContext />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/other" element={<Other />} />
        </Routes>

      </main>
      <Footer />
    </BrowserRouter>
  );
}
