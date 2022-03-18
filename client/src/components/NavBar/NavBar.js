import { useState, useEffect } from 'react'
import { Nav, NavBarContainer, NavLogo, MobileIcons, Menu, MenuItem, MenuLinks, NavBtn, NBtnLink, MenuRoutes } from './NavElements'
import { FaBars as Bars } from 'react-icons/fa'
import { animateScroll } from 'react-scroll'
import { Link } from '@reach/router'


const NavBar = (props) => {

    const { clickToggle } = props

    const [navScroll, setNavScroll] = useState(false)

    //Created this to control the state of our navbar when scrolling. If you look in my NavElements, I have a ternary setup that makes the nav transparent at the start, then on scroll 
    const navScrollChange = () => {
        if (window.scrollY >= 80) {
            setNavScroll(true)
        } else {
            setNavScroll(false)
        }
    }

    //In the React docs they had a scrollToTop() function that utilizes animateScroll. so that is basically just calling that. This allows the app to scroll to the top of the page. 
    const homeToggle = () => {
        animateScroll.scrollToTop()
    }



    // Used useEffect() to add a listener for when the user is scrolling, which calls my above function. 
    useEffect(() => {
        window.addEventListener('scroll', navScrollChange)
    }, [])




    return (
        <>
            <Nav navScroll={navScroll} >
                <NavBarContainer>
                    <NavLogo to='/' onClick={homeToggle}>Nizell</NavLogo>
                    <MobileIcons onClick={clickToggle}>
                        <Bars />
                    </MobileIcons>

                    <Menu>
                        <MenuItem>
                            <MenuLinks to='about'
                                smooth={true}
                                duration={500}
                                exact='true'
                                offset={-80} //This is -80 to match the position of the nav bar's height
                            >About</MenuLinks>
                        </MenuItem>
                        <MenuItem>
                            <MenuLinks to='social'
                                smooth={true}
                                duration={500}
                                exact='true'
                                offset={-80}
                            >Social</MenuLinks>
                        </MenuItem>
                        <MenuItem>
                            <MenuLinks to='services'
                                smooth={true}
                                duration={500}
                                exact='true'
                                offset={-80}
                            >Services</MenuLinks>
                        </MenuItem>
                        <MenuItem>
                            <MenuRoutes to="/register">Sign Up</MenuRoutes>
                        </MenuItem>
                    </Menu>

                    <NavBtn>
                        <NBtnLink to='/signin'>Sign In</NBtnLink>
                    </NavBtn>
                </NavBarContainer>
            </Nav >
        </>
    )
}
export default NavBar;