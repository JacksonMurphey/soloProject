import styled from "styled-components";

export const LogoutBtn = styled.button`
border-radius: 50px;
background: #6C63FF;
white-space: nowrap;
padding: ${({ isNav }) => (isNav ? '10px 22px;' : '16px 64px;')}
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

