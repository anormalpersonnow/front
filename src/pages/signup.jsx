import { RegisterForm } from '../components/signupForm'
import { MobileHeader } from '../components/mobileHeader'
import { goToLogin } from '../router/Coordinators'

export const SignUp = (props) => {

    return (
        <>
            <MobileHeader
                function={goToLogin}
                isLogged={props.isLogged}
                setIsLogged={props.setIsLogged}
            />
            <div className="mt-[5vh] flex flex-col font-sans text-[16px] items-center ">
                <p className=" w-[75vw] text-[32px] font-bold text-[#373737]">Olá, boas vindas ao LabEddit ;)</p>
            </div>
            <SignUpForm />
        </>
    )
}