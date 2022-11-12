import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import ThisIsFlex from "./flex";
import GridStyle from "./grid";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <ThisIsFlex />
        <GridStyle />
      </div>
    </div>
  );
}

export default App;
