import { Checkbox, CheckboxGroup } from '@chakra-ui/react'

export const RegisterForm = () => {
    return (
        <form className="font-sans flex flex-col gap-[1vh] mt-[15vh] w-[100vw] items-center">
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
            <p className="text-[14px] w-[90vw]">
                Ao continuar, você concorda com o nosso <span className='register-docs'>Contrato de usuário</span> e nossa <span className='register-docs'>Política de Privacidade</span>.
            </p>
            <p className="w-[80vw] ml-[6vw]">
            <Checkbox><span className="text-[14px] relative left-[2vw]">Eu concordo em receber emails sobre coisas legais no Labeddit.</span></Checkbox> 
            </p>
            <button className="button mt-[4vh] text-white bg-gradient-to-r  from-[#FF6489] to-[#F9B24E]">
                Cadastrar
            </button>
        </div>
        </form>
    )
}