import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
    border-radius: 50px;
    white-space: nowrap;
    background: ${({ primary }) => (primary ? '#6C63FF' : '#010606')};

    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};

    color: ${({ dark }) => (dark ? '#010606' : '#fff')};

    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};

    // opacity: ${({ opacity }) => (opacity ? '.5' : '1')};

    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#fff' : '#6C63FF')};
        color: ${({ dark }) => (dark ? '#010606' : '#010606')};
    }
`
// I will likely need to adjust my button :hover dark ternary.
//previous primary color: #01bf71
//new primary color: #6C63FF