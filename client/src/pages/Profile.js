import React, { useState } from 'react';
import '../components/Profile/Profile.css'
import ProfileSide from '../components/SideBar/ProfileSide';
import ProfileNav from '../components/NavBar/ProfileNav';
import Footer from '../components/Footer/Footer';
import ProfileUpdate from '../components/Profile/ProfileUpdate';
import '../components/Expenses/Expenses.css'
import StickyNotes from '../components/Profile/StickyNotes';


const Profile = props => {


    const { username } = props
    const [isOpen, setIsOpen] = useState(false)
    const clickToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div style={{ background: "#010606", }}>
                <ProfileSide isOpen={isOpen} clickToggle={clickToggle} username={username} />
                <ProfileNav clickToggle={clickToggle} username={username} />
                <div style={{ background: "#010606", paddingBottom: "1px" }}>
                    <div className='expenses'>
                        <ProfileUpdate username={username} />
                    </div>
                </div>
                <div className='noteBg'>
                    <div style={{ margin: '40px 0 25px 100px', color: '', }} >
                        <StickyNotes />
                    </div>
                </div>
                <Footer />
            </div>
        </>

    )
}
export default Profile