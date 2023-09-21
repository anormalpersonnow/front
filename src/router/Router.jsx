import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/login";
import { Signup } from "../pages/signup";
import { Forum } from "../pages/forum";
import { useEffect, useState } from 'react'

export default function Router() {

    const [isLogged, setIsLogged] = useState("")
    const [token, setToken] = useState("")
    const [user, setUser] = useState([{}])
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getLog = localStorage.getItem("logStatus")
        const getToken = localStorage.getItem("token")
        if (getLog && getToken) {
            setIsLogged(getLog)
            setToken(getToken)
        }
    }, [])

    const content = [user, setUser, posts, setPosts]
    const states = [isLogged, setIsLogged, token, setToken]

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <Login states={states} />}
                />
                <Route path="/forum" element={
                    <Forum states={states} 
                           content={content}
                    />}
                />
                <Route path="/signup" element={
                    <Signup states={states} />}
                />
            </Routes>
        </BrowserRouter>
    )
}