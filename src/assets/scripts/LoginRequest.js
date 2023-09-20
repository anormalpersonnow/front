import axios from 'axios'
import { goToForum } from '../../router/Coordinators'

export const LoginRequest = async (email, password, setLog, navigate) => {

    try {
        const response = await axios.post("http://127.0.0.1:3003/users/login",
            {
                email: email,
                password: password
            })
             if(response) {
                console.log(response.data)
                localStorage.setItem("token", response.data.token),
                localStorage.setItem("isLogged", "logged")
                setLog("logged")
                setTimeout(() => {
                goToForum(navigate)
                }, 1500)
             }
    } catch (error) {
        alert(error.message);
    }
}