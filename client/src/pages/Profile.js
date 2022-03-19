import axios from 'axios';
import React, { useState } from 'react';
import '../components/Profile/Profile.css'
import ProfileSide from '../components/SideBar/ProfileSide';
import ProfileNav from '../components/NavBar/ProfileNav';
import Footer from '../components/Footer/Footer';


const Profile = props => {


    const { username } = props
    const [isOpen, setIsOpen] = useState(false)
    const clickToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <ProfileSide isOpen={isOpen} clickToggle={clickToggle} username={username} />
            <ProfileNav clickToggle={clickToggle} username={username} />

            <Footer />
        </>

    )
}
export default Profile