import { Route } from "react-router-dom";
import "./App.css";
import Adhikaar from "./Pages/adhikaar/adhikaar.jsx";
import Check from "./Pages/check/Check.jsx";
import Navbar from "./Components/Navbar/navbar.jsx";
import { Fragment } from "react";
import { Routes } from "react-router-dom";
import { Nav } from "./Nav.jsx";

function App() {
  return (
    <>
      <Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<Nav />}></Route>
          <Route path="/seller" element={<Adhikaar />} />
          <Route path="/buyer" element={<Check />} />
        </Routes>
      </Fragment>
    </>
  );
}

export default App;
