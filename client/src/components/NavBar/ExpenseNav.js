
import { ExpNav, NavBarContainer, NavLogo, MobileIcons, Menu, MenuItem, MenuLinks, NavBtn, MenuRoutes } from './NavElements'
import { FaBars as Bars } from 'react-icons/fa'
import { animateScroll } from 'react-scroll'
import Logout from '../Logout/Logout';

const ExpenseNav = (props) => {

    const { clickToggle, username } = props
    const homeToggle = () => {
        animateScroll.scrollToTop()
    }

    return (
        <ExpNav>
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
                        <MenuRoutes to='/dashboard'>Dashboard</MenuRoutes>
                    </MenuItem>
                </Menu>
                <NavBtn>
                    <Logout isNav='true' />
                </NavBtn>
            </NavBarContainer>
        </ExpNav>
    )
}
export default ExpenseNav