import * as AiIcons from 'react-icons/ai'
import { useNavigate } from "react-router-dom"
import { goToSignup } from "../../router/Coordinators"
import { LoginRequest } from "../../assets/scripts/Users/LoginRequest"
import { useForm, usePassword } from "../../assets/scripts/Hooks"

export const LoginForm = (props) => {

    const navigate = useNavigate()

    const [form, changeForm] = useForm({ username: "", email: "", password: "" })
    const [type, changeType] = usePassword()

    return (
        <form
            className="font-sans flex flex-col gap-[1vh] mt-[13vh] w-[100vw] items-center"
        >
            <label htmlFor="E-mail">
                <input
                    value={form.email}
                    onChange={changeForm}
                    name="email"
                    type="email"
                    className="input"
                    placeholder="E-mail"
                    required
                />
            </label>
            <label htmlFor="Senha">
                <input
                    value={form.password}
                    onChange={changeForm}
                    name="password"
                    type={type}
                    className="input"
                    placeholder="Senha"
                    required
                />
                {type === "password" ?
                    <AiIcons.AiOutlineEye
                        className="password-icon"
                        onClick={() => changeType()} />
                    :
                    <AiIcons.AiOutlineEyeInvisible
                        className="password-icon"
                        onClick={() => changeType()} />
                }
            </label>

            <div className="flex flex-col gap-[2vh] mt-[4vh]">
                <button
                    type="button"
                    onClick={() => LoginRequest(form, navigate, props.setUser)}
                    className="button text-white bg-gradient-to-r  from-[#FF6489] to-[#F9B24E]">
                    Continuar
                </button>
                <div className="home-line" />
                <button onClick={() => goToSignup(navigate)}
                    className="button border-[.5px] border-[#FE7E02]  text-[#FE7E02]"
                >
                    Crie uma conta!
                </button>
            </div>
        </form>
    )
}