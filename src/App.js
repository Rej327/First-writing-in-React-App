import AboutMe from "./components/AboutMe";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ContactUs from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/about"} element={<AboutMe />} />
            <Route path={"/contact"} element={<ContactUs />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
