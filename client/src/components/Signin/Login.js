import { Container, FormWrapper, Logo, FormContent, Form, FormInput, FormLabel, FormH1, FormButton, Text, Register } from "./LoginElements";
import { useState } from "react";
import axios from 'axios';
import { navigate } from '@reach/router'



const Login = (props) => {

    const [user, setUser] = useState({
        email: "",
        username: "",
        password: ""
    })
    const [errMessage, setErrMessage] = useState('')

    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    // const navigate = useNavigate()

    const loginHandler = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/users/login', user, { withCredentials: true })
            .then(res => {
                console.log(res.data)
                navigate('/dashboard')
            })
            .catch(err => {
                console.log(err.response.data)
                setErrMessage(err.response.data.message)
                setUser({ username: "", email: "", password: "" })
            })
    }


    return (
        <>
            <Container>
                <FormWrapper>
                    <Logo to='/' >Nizell</Logo>

                    <FormContent>

                        <Form onSubmit={loginHandler}>

                            <FormH1>Sign in to your Account</FormH1>

                            <FormLabel>Email</FormLabel>
                            <FormInput type='email' name='email' value={user.email} onChange={handleChange} />

                            <FormLabel>Password</FormLabel>
                            <FormInput type='password' name='password' value={user.password} onChange={handleChange} />
                            <FormButton type="submit">Sign In</FormButton>
                            <Register to='/register'>Sign Up</Register>
                            {errMessage && <Text>{errMessage}</Text>}

                        </Form>
                    </FormContent>

                </FormWrapper>
            </Container>
        </>
    )
}
export default Login;