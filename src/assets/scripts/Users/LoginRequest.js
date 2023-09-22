import axios from 'axios'
import { goToForum } from '../../../router/Coordinators'

export const LoginRequest = async (email, password, navigate) => {

    try {
        const response = await axios.post("http://127.0.0.1:3003/users/login",
            {
                email: email,
                password: password
            })
             if(response) {
                localStorage.setItem("user", JSON.stringify({
                    id: response.data.id,
                    username: response.data.username,
                    email: response.data.email,
                    role: response.data.role,
                    token: response.data.token
                })),
                localStorage.setItem("logStatus", "logged"),
                setTimeout(() => {
                goToForum(navigate)
                }, 1000)
             }
    } catch (error) {
        alert(error.message);
    }
}