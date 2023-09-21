import axios from 'axios'

export const GetPostsRequest = async (content, token, setArray) => {

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
        }
    } catch (error) {
        alert(error.message);
    }
}