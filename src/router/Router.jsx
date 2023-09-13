import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { Forum } from "../pages/forum";

export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <Forum/>}
                />
                <Route path="/login" element={
                    <Login/>}
                />
                <Route path="/cadastro" element={
                    <Register/>}
                />
            </Routes>
        </BrowserRouter>
    )
}