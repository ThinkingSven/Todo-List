import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Info from "./Pages/Info";
// Components
import Navbar from "./Components/Navbar";
import Music from "./Pages/Music";
import MainContent from "./Components/MainContent";

function App() {
 
  return (
    <Router>
      <div className="App">
        <section>
          <Navbar />

          <Routes>
            <Route exact path="/Info" element={<Info />} />
            <Route exact path="/Music" element={<Music />} />
            <Route exact path="/Home" element={<MainContent />} />
          </Routes>
          <div>
         
          </div>
        </section>
      </div>
    </Router>
  );
}

export default App;
