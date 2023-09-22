import axios from 'axios'

export const GetUsers = async (username, token, array, setArray) => {

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
            .then(localStorage.setItem("user", array))
        }
    } catch (error) {
        alert(error.message);
    }
}