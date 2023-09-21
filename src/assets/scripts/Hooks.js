import { useState } from "react"

export const useLogin = () => {
    
    const [form, setForm] = useState({email: "", password: ""})

    const changeForm = (event) => {
		const {name, value} = event.target
        setForm({...form, [name]: value});
    }

    return [form, changeForm]

}

export const useSignup = () => {
    
    const [form, setForm] = useState({username: "", email: "", password: ""})

    const changeForm = (event) => {
		const {name, value} = event.target
        setForm({...form, [name]: value});
    }

    return [form, changeForm]
}