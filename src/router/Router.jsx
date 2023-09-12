import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/login";
import { Register } from "../pages/register";

export default function Router () {

    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/cadastro" element={<Register/>}/>
        </Routes>
        </BrowserRouter>
    )
}