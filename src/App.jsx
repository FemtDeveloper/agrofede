import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register/Register";
import Home from "./components/Home/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/registro" element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
