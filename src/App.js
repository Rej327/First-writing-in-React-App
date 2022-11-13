import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import ThisIsFlex from "./flex";
import GridStyle from "./grid";
import AboutMe from "./AboutMe";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <ThisIsFlex />
        <GridStyle />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
