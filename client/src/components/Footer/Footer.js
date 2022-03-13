import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FooterContainer, FooterWrap, FooterLinksCont, FooterLinksWrap, FooterItems, FooterTitle, FooterLink, FooterLinkOut, SocialMedia, SocialWrap, SocialLogo, WebRights, SocialImgs, SocialImgLink } from "./FooterElements";
import { animateScroll } from "react-scroll";

const Footer = (props) => {

    const homeToggle = () => {
        animateScroll.scrollToTop()
    }

    return (
        <>
            <FooterContainer>
                <FooterWrap>

                    <FooterLinksCont>
                        <FooterLinksWrap>
                            <FooterItems>
                                <FooterTitle>About Us</FooterTitle>
                                <FooterLink to='/'>Testimonials</FooterLink>
                                <FooterLink to='/'>Careers</FooterLink>
                                <FooterLink to='/'>Terms of Service</FooterLink>
                            </FooterItems>

                            <FooterItems>
                                <FooterTitle>Contact Us</FooterTitle>
                                <FooterLink to='/'>Contact</FooterLink>
                                <FooterLink to='/'>Support</FooterLink>
                                <FooterLink to='/'>Sponsors</FooterLink>
                            </FooterItems>
                        </FooterLinksWrap>

                        <FooterLinksWrap>
                            <FooterItems>
                                <FooterTitle>Extras</FooterTitle>
                                <FooterLink to='/register'>Get iOS App</FooterLink>
                                <FooterLink to='/register'>Get Featured</FooterLink>
                                <FooterLink to='/register'>Newsletter</FooterLink>
                            </FooterItems>

                            <FooterItems>
                                <FooterTitle>My Socials</FooterTitle>
                                <FooterLinkOut href='//github.com/JacksonMurphey' target='_blank' aria-label='Github'>Github</FooterLinkOut>
                                <FooterLinkOut href='//www.linkedin.com/in/jackson-murphey/' target='_blank' aria-label='Linkedin'>LinkedIn</FooterLinkOut>
                            </FooterItems>
                        </FooterLinksWrap>
                    </FooterLinksCont>

                    <SocialMedia>
                        <SocialWrap>

                            <SocialLogo to='/' onClick={homeToggle}>Nizell</SocialLogo>
                            <WebRights>Nizell™ © {new Date().getFullYear()} All Rights Reserved</WebRights>

                            <SocialImgs>
                                <SocialImgLink href='//www.twitter.com' target='_blank' aria-label='Twitter'><FaTwitter />
                                </SocialImgLink>

                                <SocialImgLink href='//www.linkedin.com/in/jackson-murphey/' target='_blank' aria-label='Linkedin'><FaLinkedin />
                                </SocialImgLink>

                                <SocialImgLink href='//github.com/JacksonMurphey' target='_blank' aria-label='Github'><FaGithub />
                                </SocialImgLink>

                                <SocialImgLink href='//www.facebook.com' target='_blank' aria-label='Facebook'><FaFacebook />
                                </SocialImgLink>
                            </SocialImgs>

                        </SocialWrap>
                    </SocialMedia>

                </FooterWrap>
            </FooterContainer>
        </>
    )
}
export default Footer;