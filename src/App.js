import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
// Components
import MainContent from "./Components/MainContent";

function App() {
  return (
    <div className="App">
      <section>
        <MainContent />
      </section>
    </div>
  );
}

export default App;
