import axios from 'axios'

export const GetPosts = async (content, token, array, setArray) => {

    try {
        let response;

        if (content) {
            response = await axios.get("http://127.0.0.1:3003/posts/",
                {
                    content: content,
                    token: token
                })
        } else {
            response = await axios.get("http://127.0.0.1:3003/posts/",
                {
                    token: token
                })
        }
        if (response) {
            setArray(response.data)
            localStorage.setItem("posts", JSON.stringify(array))
        }
    } catch (error) {
        console.log(error);
    }
}