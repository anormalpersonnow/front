import { LoginForm } from '../components/loginForm'
import HomeLogo from '../assets/homelogo.png'

export const Login = () => {
    return (
        <>
        <div className="mt-[10vh] flex flex-col font-sans text-[16px] items-center ">
            <img src={HomeLogo} alt="labeddit"/>
            <span>O projeto de rede social da Labenu</span>
        </div>
        <LoginForm/>
        </>
    )
}