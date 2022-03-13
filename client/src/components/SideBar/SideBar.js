import { SBContainer, Icon, CloseIcon, SideWrapper, SideMenu, SideLink, SideBtn, SBtnLink } from "./SideElements";



const SideBar = (props) => {

    const { isOpen, clickToggle } = props

    //If I keep the clicktoggle on my container, basically clicking anywhere closes the menu. 
    return (
        <>
            <SBContainer isOpen={isOpen} onClick={clickToggle}>

                <Icon onClick={clickToggle}>
                    <CloseIcon />
                </Icon>

                <SideWrapper>
                    <SideMenu>
                        <SideLink to='about' onClick={clickToggle}>About</SideLink>
                        <SideLink to='social' onClick={clickToggle}>Social</SideLink>
                        <SideLink to='services' onClick={clickToggle}>Services</SideLink>
                        <SideLink to='signup' onClick={clickToggle}>Sign Up</SideLink>
                    </SideMenu>
                    <SideBtn>
                        <SBtnLink to='/signin'>Sign In</SBtnLink>
                    </SideBtn>
                </SideWrapper>

            </SBContainer>
        </>
    )
}
export default SideBar;