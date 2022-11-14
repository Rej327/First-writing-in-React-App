import AboutMe from "./components/AboutMe";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/about"} element={<AboutMe />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
