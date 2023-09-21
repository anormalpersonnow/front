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
                localStorage.setItem("user", {
                    id: response.data.id,
                    username: response.data.username,
                    email: response.data.email,
                    role: response.data.role,
                    token: response.data.token
                }
                    ),
                localStorage.setItem("logStatus", "logged"),
                setTimeout(() => {
                    setFlow(1)
                    }, 1500)
             }
    } catch (error) {
        alert(error.message);
    }
}