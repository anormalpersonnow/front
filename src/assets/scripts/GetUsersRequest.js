import axios from 'axios'

export const GetUsersRequest = async (username, token, setArray) => {

    try {
        let response;
        if (username) {
            response = await axios.get("http://127.0.0.1:3003/users/",
                {
                    username: username,
                    token: token
                })
        } else {
            response = await axios.get("http://127.0.0.1:3003/users/",
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