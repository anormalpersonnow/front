import axios from 'axios';
import { goToForum } from '../router/Coordinators';

export const LoginRequest = async (email, password, navigate) => {

  const url = 'https://localhost:3003/users/login'

  try {
    const response = await axios.post(
      url,
      {
        email: email,
        password: password
      }
    );
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("isLogged", "true")
    goToForum(navigate)
  } catch (error) {
    alert("Não foi possível realizar seu login.")
    throw error;
  }
}

export const SignupRequest = async (username, email, password) => {

  const options = {
    method: 'POST',
    url: 'https://localhost:3003/users/signup/',
    body: {
      username, username,
      email: email,
      password: password
    }
  };

  try {
    const response = await axios.request(options);
    localStorage.setItem("token", response.data.token);
  } catch (error) {
    alert(error.message);
  }
}
