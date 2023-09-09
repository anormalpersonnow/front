import HeaderLogo from '../assets/headerlogo.png'

export const MobileHeader = () => {
    return (
        <div className="bg-[#EDEDED] w-[100vw] h-[7vh] flex items-center justify-center">
            <img src={HeaderLogo}/>
            <span className="header-text">Entrar</span>
        </div>
    )
}