import axios from 'axios'

export const SignupRequest = async (username, email, password, setFlow) => {

    try {
        const response = await axios.post("http://127.0.0.1:3003/users/signup",
            {
                username: username,
                email: email,
                password: password
            })
             if(response) {
                localStorage.setItem("token", response.data.token)
                setFlow(1)
             }
    } catch (error) {
        alert(error.message);
    }
}