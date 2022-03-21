import { useState, useEffect } from "react";
import axios from "axios";
import UpdateForm from "./UpdateForm";
import '../NewExpense/NewExpense.css'


const ProfileUpdate = (props) => {

    // const { username } = props
    const [isUpdateForm, setIsUpdateForm] = useState(false)
    const [errors, setErrors] = useState({})
    const [editUser, setEditUser] = useState({
        id: '',
        username: '',
        firstName: '',
        lastName: '',
        email: '',
    })



    useEffect(() => {
        axios.get('http://localhost:8000/api/users/security', { withCredentials: true })
            .then(res => {
                console.log(res.data)
                setEditUser(res.data)
            })
            .catch(err => { console.log(err) })
    }, [])

    const updateHandler = e => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/users/update/${editUser.id}`, editUser, { withCredentials: true })
            .then(res => {
                console.log(res.data)
                setIsUpdateForm(false)
                setErrors({})
            })
            .catch(err => {
                console.log(err.response.data)
                setErrors(err.response.data.error.errors)
            })
    }

    const updateFormHandler = () => {
        setIsUpdateForm(!isUpdateForm)
    }

    return (

        <div id="form" className="new-expense" style={{ marginTop: "40px", background: "" }}>
            <p style={{ color: "#fff" }}>Welcome to</p>
            <h1 style={{ color: '#fff', }}>
                {editUser.username}'s
            </h1> <p style={{ color: "#fff" }}>Profile Page</p>

            {!isUpdateForm ?
                <div style={{ marginRight: '' }}>
                    <button onClick={updateFormHandler} style={{ padding: "5px 10px", marginTop: "15px", background: "", border: "none" }}>Update Info</button>
                </div>
                :
                <div style={{ marginTop: "35px" }}>
                    <UpdateForm
                        updateFormHandler={updateFormHandler}
                        updateHandler={updateHandler}
                        user={editUser}
                        setUser={setEditUser}
                        errors={errors}
                    />
                </div>
            }

        </div>
    )
}
export default ProfileUpdate