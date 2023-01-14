import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Icon from "./Icon";

//styles
const Container = styled.div`
    display: flex;
    position: sticky;
    top: 0;
    flex-direction: column;
    font-weight: 500;
    gap: 0.7rem;
    padding: 2rem 1rem 0 1rem;
    color: ${(props) => props.theme.color};
    overflow-y: auto;
    flex: 1;
    a {
        padding: 0.3rem;
        border-radius: 1.2rem;
        width: 100%;
        text-align: center;
        font-size: 1rem;
        display: flex;
        align-items: center;
        gap: 0.7rem;
    }
    .active {
        color: ${(props) => props.theme.active};
        svg {
            fill: ${(props) => props.theme.active};
        }
    }
`;

const LeftMenu = () => {
    const theme = useSelector((state) => state.theme.config);
    return (
        <Container theme={theme}>
            <NavLink to="/">
                <Icon name="category" fill={theme.color} />
                All
            </NavLink>
            <NavLink to="/category/hacking">
                <Icon name="category" fill={theme.color} />
                Hacking
            </NavLink>
            <NavLink to="/category/programming">
                <Icon name="category" fill={theme.color} />
                Programming
            </NavLink>
            <NavLink to="/category/bugbounty">
                <Icon name="category" fill={theme.color} />
                Bug Bounty
            </NavLink>
            <NavLink to="/category/ctf">
                <Icon name="category" fill={theme.color} />
                CTF
            </NavLink>
        </Container>
    );
};

export default LeftMenu;
