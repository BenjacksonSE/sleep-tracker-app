import Home from "./pages/Home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";


function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route
            path="/Login"
            element={<Login />}
        /> 
        <Route
            path="/"
            element={<Home />}
        /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
