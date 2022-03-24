
import "./App.css";
import CustomNavBar from "./Components/CustomNavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CustomReg from "./Components/CustomReg";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CustomNavBar />
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/register" element={<CustomReg/>}/>
      </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
