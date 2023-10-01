import HeaderLogo from '../assets/images/headerlogo.png'
import { logout } from '../assets/scripts/Functions'
import { useNavigate } from 'react-router-dom'

export const MobileHeader = (props) => {

    const navigate = useNavigate()
    const [user, setUser] = props.content

    return (
        <div className="bg-[#EDEDED] w-[100vw] 
        h-[7vh] flex items-center justify-center">

            <img className="relative left-[2vw]" src={HeaderLogo} />

            {user.isLogged ?
                <span
                    onClick={() => logout(user, setUser, navigate)}
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