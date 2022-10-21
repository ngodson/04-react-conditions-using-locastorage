import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import {Login} from "./components/Login"
import {Register} from "./components/Register"
import {Home} from "./components/Home"
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="Home" element={<Home />} />
      <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />

      </Routes>
      </Router>
    
    </div>
  );
}

export default App;
