import Logo from '../assets/homelogo.png'
import { RegisterForm } from '../components/registerForm'

export const Register = () => {
    return (
        <>
        <div className="mt-[12vh] flex flex-col font-sans text-[16px] items-center ">
        <img src={Logo} alt="Labeddit"/>
        <span>O projeto de rede social da Labenu</span>
        </div>
        <RegisterForm/>
        </>
    )
}