export const LoginForm = () => {
    return (
        <form className="font-sans flex flex-col gap-[1vh] mt-[13vh]">
            <label htmlFor="E-mail">
                <input className="input" placeholder="E-mail"></input>
            </label>
            <label htmlFor="Senha">
                <input className="input" placeholder="Senha"></input>
            </label>

        <div className="flex flex-col gap-[2vh] mt-[5vh]">
            <button className="button text-white bg-gradient-to-r  from-[#FF6489] to-[#F9B24E]">
                Continuar
            </button>
            <div className="home-line"/>
            <button className="button border-[.5px] border-[#FE7E02]  text-[#FE7E02]">
                Crie uma conta!
            </button>
        </div>
        </form>
    )
}