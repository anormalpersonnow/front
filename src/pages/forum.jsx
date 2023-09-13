import { MobileHeader } from '../components/mobileHeader'
import { goToLogin } from '../router/Coordinators'
import { Textarea } from '@chakra-ui/react'
import { useLogin } from '../assets/States'

export const Forum = () => {

    const { isLogged } = useLogin()

    return (
        <>
            <MobileHeader 
                function={goToLogin}
            />

            <div className="mt-[5vh] flex flex-col font-sans text-[16px] items-center ">
                <form className="flex flex-col">
                    {isLogged === true ?
                        <Textarea
                            placeholder="Escreva seu post..."
                            w={"88vw"}
                            h={'20vh'}
                            size={'md'}
                            color={'#646262'}
                            bg={"#EDEDED"}
                            focusBorderColor='#EDEDED'
                        />
                        :
                        <Textarea
                            isReadOnly
                            placeholder="Faça login para começar a postar..."
                            w={"88vw"}
                            h={'20vh'}
                            size={'md'}
                            bg={"#EDEDED"}
                        />
                    }
                    <button className="w-[88vw] h-[5vh] text-[18px] font-bold rounded-[2vw] active:scale-[.98] 
                    mt-[4vh] text-white bg-gradient-to-r  from-[#FF6489] to-[#F9B24E]">
                        Postar
                    </button>
                </form>
            </div>
            <div className="ml-[6vw] w-[88vw] h-[.2vh] bg-gradient-to-r  from-[#FF6489] to-[#F9B24E] mt-[4vh]"/>
        </>
    )
}