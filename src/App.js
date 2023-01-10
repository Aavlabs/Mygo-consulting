import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Register from "./Demo1/Register";
import Loginpage from "./Demo1/Loginpage";
import Homepage from "./Demo1/Homepage";
import Form1 from "./Demo1/Form1";

import Form3 from "./Demo1/Form3";
import Navbar from "./Demo1/Navbar";
import Form2 from "./Demo1/Form2";
// import InputField from "./Demo1/Inputfield";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/home" element={<Loginpage />} />
          <Route path="/home1" element={<Homepage />} />
          <Route path="/home2" element={<Form1 />} />
          <Route path="/home3" element={<Form2 />} />
          <Route path="/home4" element={<Form3 />} />
          {/* <Route path="/*" element={<pagenotfound/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
