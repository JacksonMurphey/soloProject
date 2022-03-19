import Logout from "../Logout/Logout";
import { SBContainer, Icon, CloseIcon, SideWrapper, SideMenu, SideLink, SideBtn, SBtnLink, SideRoute } from "./SideElements";

const ExpSide = (props) => {
    const { isOpen, clickToggle, username } = props

    return (
        <>
            <SBContainer isOpen={isOpen} onClick={clickToggle}>
                <Icon onClick={clickToggle}>
                    <CloseIcon />
                </Icon>

                <SideWrapper>
                    <SideMenu>
                        <SideRoute to={`/user/${username}`} onClick={clickToggle}>Profile</SideRoute>
                        <SideRoute to='/dashboard' onClick={clickToggle}>Dashboard</SideRoute>
                    </SideMenu>
                    <SideBtn>
                        <Logout />
                    </SideBtn>
                </SideWrapper>
            </SBContainer>
        </>
    )
}
export default ExpSide