import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/login";
import { Signup } from "../pages/signup";
import { Forum } from "../pages/forum";
import {
    States,
    getLogState,
    getUserState,
    getTokenState,
    getPostsState,
    getCommentsState
} from "../assets/scripts/States";
import { useEffect } from 'react'

export default function Router() {


    const [isLogged, setIsLogged, token, setToken, user, setUser, posts, setPosts, comments, setComments] = States()

    useEffect(() => { getLogState(setIsLogged) }, [])
    useEffect(() => { getUserState(setUser) }, [])
    useEffect(() => { getTokenState(setToken) }, [])
    useEffect(() => { getPostsState(setPosts) }, [])
    useEffect(() => { getCommentsState(setComments) }, [])

    const content = [user, setUser, posts, setPosts, comments, setComments]
    const status = [isLogged, setIsLogged, token, setToken]


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    !isLogged ?
                        <Login status={status} />
                        :
                        <Forum
                            status={status}
                            content={content}
                        />}
                />
                <Route path="/forum" element={
                    <Forum
                        status={status}
                        content={content}
                    />}
                />
                <Route path="/signup" element={
                    !isLogged ?
                    <Signup status={status} />
                    :
                    <Forum
                        status={status}
                        content={content}
                    />}
                />
            </Routes>
        </BrowserRouter>
    )
}