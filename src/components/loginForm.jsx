import { useNavigate } from "react-router-dom"
import { goToCadastro } from "../router/Coordinators"
import { LoginRequest } from '../assets/Requests'
import { useInfos } from "../assets/States"
import { useLogin } from "../assets/States"

export const LoginForm = () => {

    const [
        username, setUsername,
        email, setEmail,
        password, setPassword,
    ] = useInfos()

    const [isLogged, setIsLogged] = useLogin()

    const navigate = useNavigate()

    return (
        <form
        className="font-sans flex flex-col gap-[1vh] mt-[10vh] w-[100vw] items-center">
            <label htmlFor="E-mail">
                <input
                    name={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input"
                    placeholder="E-mail"
                    type="email"
                    required
                />
            </label>
            <label htmlFor="Senha">
                <input
                    name={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input"
                    placeholder="Senha"
                    type="password"
                    required
                />
            </label>

            <div className="flex flex-col gap-[2vh] mt-[5vh]">
                <button 
                type='button'
                onClick={() => LoginRequest(email, password, navigate)}
                className="button text-white 
                bg-gradient-to-r  from-[#FF6489] to-[#F9B24E]"
                >
                    Continuar
                </button>
                <div className="ml-[2vw] w-[85vw] h-[.1vh] bg-gradient-to-r  from-[#FF6489] to-[#F9B24E]" />
                <button 
                    onClick={() => goToCadastro(navigate)} 
                    className="button border-[.5px] border-[#FE7E02]  text-[#FE7E02]"
                >
                    Crie uma conta!
                </button>
            </div>
        </form>
    )
}