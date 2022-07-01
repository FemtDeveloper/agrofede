import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Nosotros from "./components/pages/Nosotros/Nosotros";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/nosotros" element={<Nosotros />}></Route>
          <Route path="/ingresar" element={<Login />}></Route>
          <Route path="/registro" element={<Register />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
