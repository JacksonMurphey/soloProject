import styled from 'styled-components'
import { Link as LinkR } from '@reach/router'
import { Link as LinkScroll } from 'react-scroll'
// Above I imported and renamed my variables. This was done because I realized that in order to use react-scroll, I would have to import Link from react-scroll. So I wanted to differentiate the two. 
//React-Scroll is just a subtle UI feature. Also known as smooth-scrolling. Smooth scrolling is when instead of clicking on a button and being instantly taken to a different part of the same page, the user is navigated there via a scroll animation


// NOTE: After reviewing how styled-components work, I found seperating the files was the best course of action. After building one, I knew that having one file contain everything would be a mess. 


//NOTE: the way the documentation made it appear, I thought I could use conditional rendering as (props => props ? 'stlyingA' : 'stylingB'), It didnt work this way in practice. Got it to work using {({props})=>()}
export const Nav = styled.nav`
    background: ${({ navScroll }) => (navScroll ? '#000' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;

export const ExpNav = styled.div`
background: #000;
height: 80px;
margin-top: -80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 960px){
    transition: 0.8s all ease;
`


export const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcons = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const Menu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const MenuItem = styled.li`
    height: 80px;
`

export const MenuLinks = styled(LinkScroll)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        border-bottom: 3px solid #6C63FF;
    }

    &:active {
        border-bottom: 3px solid #fff;
    }
    
`

export const MenuRoutes = styled(LinkR)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        border-bottom: 3px solid #6C63FF;
    }

    &:active {
        border-bottom: 3px solid #fff;
    }
`


export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #6C63FF;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`