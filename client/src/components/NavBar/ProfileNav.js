
import { ExpNav, NavBarContainer, NavLogo, MobileIcons, Menu, MenuItem, MenuLinks, NavBtn, MenuRoutes } from './NavElements'
import { FaBars as Bars } from 'react-icons/fa'
import Logout from '../Logout/Logout';

const ProfileNav = (props) => {
    const { clickToggle, username } = props


    return (
        <ExpNav>
            <NavBarContainer>
                <NavLogo to='/' >Nizell</NavLogo>
                <MobileIcons onClick={clickToggle}>
                    <Bars />
                </MobileIcons>
                <Menu>
                    <MenuItem>
                        <MenuRoutes to={`/dashboard/expenses/${username}`}>Your Expenses</MenuRoutes>
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
export default ProfileNav