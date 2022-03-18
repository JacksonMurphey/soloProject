import { useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router';
import { navigate } from '@reach/router';

import { Container, FormWrapper, Logo, FormContent, Form, FormInput, FormLabel, FormH1, FormButton, Text, Signin } from './RegisterElements';


const Register = (props) => {

    const [user, setUser] = useState({
        username: "",
        // firstName: "",
        // lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [errors, setErrors] = useState({})

    const handleUserChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    // const navigate = useNavigate()

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
                // if (errors.username) { setUser({ ...user, username: "" }) }
                // if (errors.email) { setUser({ ...user, email: "" }) }
                // if (errors.password) { setUser({ ...user, password: "", confirmPassword: "" }) }
                // if (errors.confirmPassword) { setUser({ ...user, password: "", confirmPassword: "" }) }
                setUser({
                    username: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                })
            })
    }

    {/* <FormLabel>First Name</FormLabel>
                            <FormInput type='text' name='firstName' value={user.firstName} onChange={handleUserChange} />

                            <FormLabel>Last Name</FormLabel>
                            <FormInput type='text' name='lastName' value={user.lastName} onChange={handleUserChange} /> */}

    return (
        <>
            <Container>
                <FormWrapper>
                    <Logo to="/">Nizell</Logo>

                    <FormContent>
                        <Form onSubmit={register}>

                            <FormH1>Create an Account</FormH1>
                            <FormLabel>Username</FormLabel>
                            {errors.username ?
                                <FormInput type='text' name='username' value={user.username} onChange={handleUserChange} style={{ outline: "2px solid red" }} placeholder={errors.username.message} />
                                :
                                <FormInput type='text' name='username' value={user.username} onChange={handleUserChange} />
                            }

                            <FormLabel>Email</FormLabel>
                            {errors.email ?
                                <FormInput type='text' name='email' value={user.email} onChange={handleUserChange} style={{ outline: "2px solid red" }} placeholder={errors.email.message} />
                                :
                                <FormInput type='text' name='email' value={user.email} onChange={handleUserChange} />
                            }

                            <FormLabel>Password</FormLabel>
                            {errors.password ?
                                <FormInput type='password' name='password' value={user.password} onChange={handleUserChange} style={{ outline: "2px solid red" }} placeholder={errors.password.message} />
                                :
                                <FormInput type='password' name='password' value={user.password} onChange={handleUserChange} />}

                            <FormLabel>Confirm Password</FormLabel>
                            {errors.confirmPassword ?
                                <FormInput type='password' name='confirmPassword' value={user.confirmPassword} onChange={handleUserChange} style={{ outline: "2px solid red" }} placeholder={errors.confirmPassword.message} />
                                :
                                <FormInput type='password' name='confirmPassword' value={user.confirmPassword} onChange={handleUserChange} />}

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