import axios from "axios"
import React, { useState, useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router";
import { navigate, Link } from "@reach/router";


const Profile = props => {


    const { username } = props
    // const { user } = props
    // const [expensesList, setExpensesList] = useState([])

    // useEffect(() => {
    //     axios.get(`http://localhost:8000/api/userexpenses/${username}`, { withCredentials: true })
    //         .then(res => {
    //             console.log(res.data)
    //             // setExpensesList(res.data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }, [username])

    return (
        <div>Welcome {username}</div>

    )
}
export default Profile