import { useEffect } from "react";
import { Login } from "../pages/login";
import { Forum } from "../pages/forum";
import { PostPage } from "../pages/post"
import { Signup } from "../pages/signup";
import { NotFound } from "../pages/notFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getPosts } from "../assets/scripts/Posts/GetPostsRequest";
import { states, getUserState } from "../assets/scripts/Functions";
import { getComments } from "../assets/scripts/Comments/GetCommentsRequest";


export default function Router() {


    const [user, setUser, posts, setPosts, comments, setComments, textArea, setTextArea] = states()
    const token = user.token
    
    useEffect(() => { getUserState(setUser) }, [])

    const reversedPosts = posts.reverse()
    const urlsList = reversedPosts.map(post => post.id.slice(0, 8))

    useEffect(() => {
        if (user.isLogged) {
            getPosts("", user.token, setPosts)
            getComments("", user.token, setComments)
        }
    }, [token]

    )

    const userContent = [user, setUser]
    const postContent = [user, posts, setPosts, textArea, setTextArea]
    const commentComtent = [user, comments, setComments, textArea, setTextArea]

    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={
                    !user.isLogged ?
                        <Login
                            setUser={setUser} />
                        :
                        <Forum
                            content={postContent}
                            reversedPosts={reversedPosts}
                        />}
                />

                <Route path="/signup" element={
                    !user.isLogged ?
                        <Signup
                            content={userContent} />
                        :
                        <Forum
                            content={postContent}
                            reversedPosts={reversedPosts}
                        />}
                />

                <Route path="/forum" element={
                    <Forum
                        content={postContent}
                        reversedPosts={reversedPosts}
                    />}
                />

                {urlsList.map((url, index) => {
                    return (
                        <>
                            <Route
                                key={url}
                                path={`/forum/post/${url}`}
                                element={
                                    user.isLogged ?
                                        <PostPage
                                            key={index}
                                            url={url}
                                            content={commentComtent}
                                            posts={posts}
                                        />
                                        :
                                        <NotFound 
                                        />
                                }
                            />
                        </>
                    )
                })}

            </Routes>
        </BrowserRouter>
    )
}