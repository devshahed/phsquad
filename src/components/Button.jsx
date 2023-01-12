import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

//styles
const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    text-align: center;
    cursor: pointer;
    border: none;
    outline: none;
    &:focus {
        border: none;
        outline: none;
    }
    background: ${(props) => props.theme.buttons};
    color: ${props => props.theme.bg_secondary};
    border-radius: 1.2rem;
    padding: 0.5rem 1rem;
    font-weight: 500;
`;

const Button = ({ type, name, children }) => {
    const theme = useSelector((state) => state.theme.config);
    return (
        <Container type={type} name={name} theme={theme}>
            {children}
        </Container>
    );
};

export default Button;
