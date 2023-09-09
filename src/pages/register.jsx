import { RegisterForm } from '../components/registerForm'
import { MobileHeader } from '../components/mobileHeader'

export const Register = () => {
    return (
        <>
        <MobileHeader/>
        <div className="mt-[5vh] flex flex-col font-sans text-[16px] items-center ">
        <p className=" w-[75vw] text-[32px] font-bold text-[#373737]">Olá, boas vindas ao LabEddit ;)</p>
        </div>
        <RegisterForm/>
        </>
    )
}