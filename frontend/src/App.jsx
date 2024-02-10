import { Route } from "react-router-dom";
import "./App.css";
import Adhikaar from "./Pages/adhikaar/adhikaar.jsx";
import Check from "./Pages/check/Check.jsx";
import Navbar from "./Components/Navbar/navbar.jsx";
import { Fragment } from "react";
import { Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<Adhikaar />} />
          <Route path="/check" element={<Check />} />
        </Routes>
      </Fragment>
    </>
  );
}

export default App;
