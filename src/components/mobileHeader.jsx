import HeaderLogo from '../assets/headerlogo.png'
import { useNavigate } from 'react-router-dom'


export const MobileHeader = (props) => {

    const navigate = useNavigate()
    
    return (
        <div className="bg-[#EDEDED] w-[100vw] h-[7vh] flex items-center justify-center">
            <img src={HeaderLogo}/>
            <span onClick={() => props.function(navigate)} className="header-text">Entrar</span>
        </div>
    )
}