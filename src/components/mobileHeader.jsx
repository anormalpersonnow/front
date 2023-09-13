import HeaderLogo from '../assets/headerlogo.png'
import { useNavigate } from 'react-router-dom'
import { useLogin } from '../assets/States'

export const MobileHeader = (props) => {

    const {isLogged, setIsLogged} = useLogin()

    const navigate = useNavigate()

    return (
        <div className="bg-[#EDEDED] w-[100vw] h-[7vh] flex items-center justify-center">
            <img src={HeaderLogo} />
            {isLogged === true ?
                <span onClick={() => setIsLogged(false)} className="header-text">Logout</span>
                :
                <span onClick={() => props.function(navigate)} className="header-text">Entrar</span>

            }
        </div>
    )
}