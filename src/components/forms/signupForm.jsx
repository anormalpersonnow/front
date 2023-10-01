import * as AiIcons from 'react-icons/ai'
import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react'
import { useForm, usePassword } from '../../assets/scripts/Hooks'
import { SignupRequest } from '../../assets/scripts/Users/SignupRequest'

export const SignUpForm = () => {

    const [form, setForm] = useForm({ username: "", email: "", password: "" })
    const [type, changeType] = usePassword()

    return (
        <form className="font-sans flex flex-col gap-[1vh] mt-[11vh] items-center">
            <label htmlFor="Apelido">
                <input className="input" name="username" type="text" placeholder="Apelido"></input>
            </label>

            <label htmlFor="E-mail">
                <input className="input" name="email" type="email" placeholder="E-mail"></input>
            </label>
            <label htmlFor="Senha">
                <input className="input" name="password" type={type} placeholder="Senha"></input>
                {type === "password" ?
                    <AiIcons.AiOutlineEye
                        className="password-icon"
                        onClick={() => changeType()} />
                    :
                    <AiIcons.AiOutlineEyeInvisible
                        className="password-icon"
                        onClick={() => changeType()} />
                }
            </label>

            <div className="flex flex-col gap-[2vh] mt-[4vh]">

                <p className="text-[14px] w-[90vw] ml-[8vw]">
                    Ao continuar, você concorda com o nosso
                    <span className='register-docs'> Contrato de usuário</span> e nossa
                    <span className='register-docs'> Política de Privacidade</span>.
                </p>

                <Stack spacing={[1, 3]} direction={['column', 'row']}>
                <Checkbox colorScheme='blue' className="w-[70vw] relative left-[8vw]">
                        <span className="text-[14px] cursor-auto relative left-[2vw]">
                            Eu concordo em receber emails sobre coisas legais no Labeddit.
                        </span>
                </Checkbox>
                </Stack>


                <button className="button mt-[3vh] ml-[4vw] text-white bg-gradient-to-r  
                from-[#FF6489] to-[#F9B24E]">
                    Cadastrar
                </button>
            </div>
        </form>
    )
}