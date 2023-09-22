import { useState } from "react"

export const States = () => {

    const [isLogged, setIsLogged] = useState("")
    const [token, setToken] = useState("")
    const [user, setUser] = useState([{}])
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])

    return [isLogged, setIsLogged, token, setToken, user, setUser, posts, setPosts, comments, setComments]

}

export const getLogState = (setState) => {
    const getLog = localStorage.getItem("logStatus")
    if (getLog) {
        setState(getLog)
    }
}

export const getUserState = (setState) => {
    const getUser = localStorage.getItem("user")
    const newUser = JSON.parse(getUser)
    if (newUser) {
        setState(newUser)
    }
}

export const getTokenState = (setState) => {
    const getUser = localStorage.getItem("user")
    const newUser = JSON.parse(getUser)
    if (newUser) {
        setState(newUser.token)
    }
}

export const getPostsState = (setState) => {
    const getPosts = localStorage.getItem("posts")
    const newArray = JSON.parse(getPosts)
    if (newArray) {
        setState(newArray)
    }
}

export const getCommentsState = (setState) => {
    const getComments = localStorage.getItem("comments")
    const newArray = JSON.parse(getComments)
    if (newArray) {
        setState(newArray)
    }
}
