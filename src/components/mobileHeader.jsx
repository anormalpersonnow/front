import HeaderLogo from '../assets/images/headerlogo.png'
import { useNavigate } from 'react-router-dom'

export const MobileHeader = (props) => {

    const [isLogged, setIsLogged, token, setToken] = props.status

    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("isLogged")
        localStorage.removeItem("token")
    setTimeout(() => {
        setIsLogged("")
        setToken("")
    }, 1500)
    }

    return (
        <div className="bg-[#EDEDED] w-[100vw] h-[7vh] flex items-center justify-center">

            <img className="relative left-[2vw]" src={HeaderLogo} />

            {isLogged ?
                <span
                    onClick={() => logout()}
                    className="header-text">
                    Logout
                </span>
                :
                <span
                    onClick={() => setTimeout(() => {
                        props.function(navigate)
                    }, 1000)}
                    className="header-text">
                    Entrar
                </span>
            }

        </div>
    )
}