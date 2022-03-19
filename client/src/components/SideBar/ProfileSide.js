import Logout from "../Logout/Logout";
import { SBContainer, Icon, CloseIcon, SideWrapper, SideMenu, SideBtn, SBtnLink, SideRoute } from "./SideElements";

const ProfileSide = (props) => {
    const { isOpen, clickToggle, username } = props

    return (
        <>
            <SBContainer isOpen={isOpen} onClick={clickToggle}>
                <Icon onClick={clickToggle}>
                    <CloseIcon />
                </Icon>

                <SideWrapper>
                    <SideMenu>
                        <SideRoute to={`/dashboard/expenses/${username}`} onClick={clickToggle}>Your Expenses</SideRoute>
                        <SideRoute to='/dashboard' onClick={clickToggle}>DashBoard</SideRoute>
                    </SideMenu>

                    <SideBtn>
                        <Logout />
                    </SideBtn>
                </SideWrapper>
            </SBContainer>
        </>

    )
}
export default ProfileSide