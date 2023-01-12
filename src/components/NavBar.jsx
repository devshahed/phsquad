import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { changeTheme } from "../redux/themSlice";
import Button from "./Button";
import Icon from "./Icon";
import Logo from "./Logo";

//styles
const Container = styled.nav`
    position: sticky;
    top: 0;
    background: ${(props) => props.theme.bg_secondary};
    display: flex;
    padding: 0 1.2rem;
`;
const NavLeft = styled.div`
    flex: 2;
    padding: 0.7rem 0;
`;
const NavMiddle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
`;
const NavRight = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    flex: 2;
`;

const NavBar = () => {
    const theme = useSelector((state) => state.theme.config);
    const dipatch = useDispatch();
    return (
        <Container theme={theme}>
            <NavLeft>
                <NavLink to="/">
                    <Logo />
                </NavLink>
            </NavLeft>
            <NavMiddle>
                <NavLink to="/">
                    <Icon name="home" fill={theme.color} />
                </NavLink>
                <NavLink to="/users">
                    <Icon name="user" fill={theme.color} />
                </NavLink>
                <NavLink to="/tools">
                    <Icon name="tools" fill={theme.color} />
                </NavLink>
            </NavMiddle>
            <NavRight>
                <div onClick={() => dipatch(changeTheme())}>
                    <Icon name="theme" fill={theme.color} />
                </div>
                <Button type={"button"} name={"addPost"}>
                    <Icon name="editor" fill={theme.bg_secondary} />
                    <span>Add Post</span>
                </Button>
            </NavRight>
        </Container>
    );
};

export default NavBar;
