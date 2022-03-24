
import "./App.css";
import CustomNavBar from "./Components/CustomNavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CustomReg from "./Components/CustomReg";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CustomNavBar />
      <Routes>
      <Route path="/" />
      <Route path="/register" />
      </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
