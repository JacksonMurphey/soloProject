import { useState, useEffect } from 'react';
import { Nav, NavBarContainer, NavLogo, MobileIcons, Menu, MenuItem, MenuLinks, NavBtn, NBtnLink, MenuRoutes } from './NavElements'
import { FaBars as Bars } from 'react-icons/fa'
import { animateScroll } from 'react-scroll'
import Logout from '../Logout/Logout';

const DashNav = (props) => {

    const { clickToggle, username } = props
    const [navScroll, setNavScroll] = useState(false)

    const navScrollChange = () => {
        if (window.scrollY >= 80) {
            setNavScroll(true)
        } else {
            setNavScroll(false)
        }
    }

    const homeToggle = () => {
        animateScroll.scrollToTop()
    }

    useEffect(() => {
        window.addEventListener('scroll', navScrollChange)
    }, [])

    return (
        <Nav navScroll={navScroll} >
            <NavBarContainer>
                <NavLogo to='/' onClick={homeToggle}>Nizell</NavLogo>
                <MobileIcons onClick={clickToggle}>
                    <Bars />
                </MobileIcons>
                <Menu>
                    <MenuItem>
                        <MenuRoutes to={`/user/${username}`}>Profile</MenuRoutes>
                    </MenuItem>
                    <MenuItem>
                        <MenuRoutes to={`/dashboard/expenses/${username}`}>Your Expenses</MenuRoutes>
                    </MenuItem>

                </Menu>
                <NavBtn>
                    <Logout isNav='true' />
                </NavBtn>

            </NavBarContainer>
        </Nav>
    )
}
export default DashNav