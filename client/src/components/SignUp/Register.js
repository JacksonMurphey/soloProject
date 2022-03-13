import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

import { Container, FormWrapper, Logo, FormContent, Form, FormInput, FormLabel, FormH1, FormButton, Text, Signin } from './RegisterElements';


const Register = (props) => {

    const [user, setUser] = useState({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [errors, setErrors] = useState({})

    const handleUserChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const navigate = useNavigate()

    const register = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/users/register', user, { withCredentials: true })
            .then(res => {
                console.log(res.data)
                navigate('/signin')
            })
            .catch(err => {
                console.log(err.response)
                setErrors(err.response.data.errors)
            })
    }



    return (
        <>
            <Container>
                <FormWrapper>
                    <Logo to="/">Nizell</Logo>

                    <FormContent>
                        <Form onSubmit={register}>

                            <FormH1>Create an Account</FormH1>
                            <FormLabel>Username</FormLabel>
                            <FormInput type='text' name='username' value={user.username} onChange={handleUserChange} />

                            <FormLabel>First Name</FormLabel>
                            <FormInput type='text' name='firstName' value={user.firstName} onChange={handleUserChange} />

                            <FormLabel>Last Name</FormLabel>
                            <FormInput type='text' name='lastName' value={user.lastName} onChange={handleUserChange} />

                            <FormLabel>Email</FormLabel>
                            <FormInput type='email' name='email' value={user.email} onChange={handleUserChange} />

                            <FormLabel>Password</FormLabel>
                            <FormInput type='password' name='password' value={user.password} onChange={handleUserChange} />

                            <FormLabel>Confirm Password</FormLabel>
                            <FormInput type='password' name='confirmPassword' value={user.confirmPassword} onChange={handleUserChange} />

                            <FormButton type='submit'>Create</FormButton>
                            <Signin to='/signin'>Sign In</Signin>

                        </Form>
                    </FormContent>
                </FormWrapper>
            </Container>
        </>
    )
}
export default Register