import { LoginForm } from '../components/loginForm'

export const Home = () => {
    return (
        <>
        <div className="mt-[12vh] flex flex-col font-sans text-[16px] items-center ">
        <span>O projeto de rede social da Labenu</span>
        </div>
        <LoginForm/>
        </>
    )
}