export const RegisterForm = () => {
    return (
        <form className="font-sans flex flex-col gap-[1vh] mt-[13vh]">
            <label htmlFor="Apelido">
                <input className="input" placeholder="Apelido"></input>
            </label>

            <label htmlFor="E-mail">
                <input className="input" placeholder="E-mail"></input>
            </label>
            <label htmlFor="Senha">
                <input className="input" placeholder="Senha"></input>
            </label>

        <div className="flex flex-col gap-[2vh] mt-[5vh]">
            <p className="register-text w-[90vw]">
                Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade
            </p>
            <p className="register-text w-[80vw] ml-[6vw]">
               <checkbox></checkbox> Eu concordo em receber emails sobre coisas legais no Labeddit
            </p>
            <button className="button text-white bg-gradient-to-r  from-[#FF6489] to-[#F9B24E]">
                Cadastrar
            </button>
        </div>
        </form>
    )
}