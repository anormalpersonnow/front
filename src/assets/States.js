import { useState } from "react";
import { useEffect } from "react";

export const useLogin = () => {

  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    const getLog = window.localStorage.getItem('isLogged')
    if (getLog) {
      const logJson = JSON.parse(getLog)
      setIsLogged(logJson)
    }
  }, [])

  return [isLogged, setIsLogged]

}

export const useInfos = () => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return [username, setUsername, email, setEmail, password, setPassword]

}



