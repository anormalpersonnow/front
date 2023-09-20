import HeaderLogo from '../assets/images/headerlogo.png'
import { useNavigate } from 'react-router-dom'

export const MobileHeader = (props) => {

    const [isLogged, setIsLogged, token, setToken] = props.states
    console.log(isLogged)
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("isLogged")
        localStorage.removeItem("token")
        setIsLogged("")
        setToken("")
    }

    return (
        <div className="bg-[#EDEDED] w-[100vw] h-[7vh] flex items-center justify-center">

            <img src={HeaderLogo} />

            {isLogged ?
                <span
                    onClick={() => logout()}
                    className="header-text">
                    Logout
                </span>
                :
                <span
                    onClick={() => props.function(navigate)}
                    className="header-text">
                    Entrar
                </span>
            }

        </div>
    )
}