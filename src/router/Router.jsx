import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/login";
import { Signup } from "../pages/signup";
import { Forum } from "../pages/forum";
import { useEffect, useState } from 'react'

export default function Router() {

    const [isLogged, setIsLogged] = useState("")
    const [token, setToken] = useState("")

    useEffect(() => {
        const getLog = localStorage.getItem("isLogged")
        const getToken = localStorage.getItem("token")
        if (getLog && getToken) {
            setIsLogged(getLog)
            setToken(getToken)
        }
    }, [])

    const states = [isLogged, setIsLogged, token, setToken]

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <Login states={states} />}
                />
                <Route path="/forum" element={
                    <Forum states={states} />}
                />
                <Route path="/signup" element={
                    <Signup states={states} />}
                />
            </Routes>
        </BrowserRouter>
    )
}