import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkScroll } from 'react-scroll'
import { Link } from '@reach/router'

export const SBContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out; 
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`


export const Icon = styled.div`
    position: absolute; 
    top: 1.2rem; 
    right: 1.5rem;
    background: transparent;
    font-size: 2rem; 
    cursor: pointer;
    outline: none; 
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const SideWrapper = styled.div`
    color: #fff;
`

export const SideMenu = styled.ul`
    display: grid;
    grid-template-column: 1fr;
    grid-template-rows: repeat(6, 70px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 50px);
    }
`

export const SideLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #6C63FF;
        transition: 0.2s ease-in-out;
        // text-decoration: underline;
    }
`

export const SideRoute = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
color: #fff;
cursor: pointer;

&:hover {
    color: #6C63FF;
    transition: 0.2s ease-in-out;
    // text-decoration: underline;
}
`

export const SideBtn = styled.div`
    display: flex;
    justify-content: center;
`

export const SBtnLink = styled(Link)`
    border-radius: 50px;
    background: #6C63FF;
    white-space: nowrap;
    padding: 16px 64px;
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