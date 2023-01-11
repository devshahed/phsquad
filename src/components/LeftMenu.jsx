import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

//styles
const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 500;
    align-items: center;
    gap: 0.7rem;
    padding: 2rem 2rem 0 2rem;
    color: ${(props) => props.theme.color};
    position: sticky;
    top: 0;
    overflow-y: scroll;
    flex: 1;
    a {
        padding: 0.3rem;
        border-radius: 1.2rem;
        width: 100%;
        text-align: center;
        font-size: 1rem;
    }
    .active {
        color: ${(props) => props.theme.active};
    }
`;

const LeftMenu = () => {
    const theme = useSelector((state) => state.theme.config);
    return (
        <Container theme={theme}>
            <NavLink to="/">All</NavLink>
            <NavLink to="/hacking">Hacking</NavLink>
            <NavLink to="/programming">Programming</NavLink>
            <NavLink to="/bogbounty">Bug Bounty</NavLink>
            <NavLink to="/ctf">CTF</NavLink>
        </Container>
    );
};

export default LeftMenu;
