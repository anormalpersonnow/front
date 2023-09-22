import axios from 'axios'

export const CreatePost = async (content, token, array, setArray) => {

    try {
        const response = await axios.post("http://127.0.0.1:3003/posts/",
            {
                content: content
            },
            {
                headers: {
                    Authorization: token
                }
            })
        if (response) {
            setArray([response.data, ...array])
            localStorage.setItem("posts", JSON.stringify(array))
        }
    } catch (error) {
        console.log(error);
    }
}