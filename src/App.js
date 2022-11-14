import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ThisIsFlex from "./components/flex";
import GridStyle from "./components/grid";
import AboutMe from "./components/AboutMe";
import Other from "./components/others";
import { BrowserRouter, Link, Route, Routes, Router } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Home />
          <ThisIsFlex />
          <GridStyle />
          <AboutMe />
          <Other />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
