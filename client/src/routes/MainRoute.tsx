import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../auth/Login";
import Signup from "../auth/Signup";


const Mainroutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Mainroutes;