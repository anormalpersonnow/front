export const goToLogin = (navigate) => {
    navigate("/")
}

export const goToSignup= (navigate) => {
    navigate("/signup")
}

export const goToForum = (navigate) => {
    navigate("/forum")
}

export const goToPost = (navigate, url) => {
    navigate(`/forum/post/${url}`)
}

