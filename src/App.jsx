import Router from "./router/Router"
import { ChakraProvider } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useLogin } from "./assets/States"

function App() {

  const [isLogged, setIsLogged] = useLogin()

  useEffect(() => {
    const getLog = localStorage.getItem("isLogged")
    const setLog = JSON.stringfy(getLog)
    setIsLogged(setLog)
  }, [])

  return (
    <ChakraProvider>
    <Router/>
    </ChakraProvider>
  )
}

export default App
