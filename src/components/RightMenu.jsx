import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Icon from "./Icon";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

//styles
const Container = styled.div`
    padding: 2rem 1rem 0 1rem;
    flex: 1;
    overflow-y: scroll;
`;
const SearchBox = styled.div`
    border-radius: 1.2rem;
    background: ${(props) => props.theme.bg_secondary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    input {
        width: 100%;
        font-size: 0.9rem;
        font-family: inherit;
        border: none;
        outline: none;
        background: transparent;
        &::placeholder {
            color: ${(props) => props.theme.active};
            font-family: inherit;
        }
        color: ${(props) => props.theme.active};
    }
`;
const Menu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    gap: 0.7rem;
    padding-top: 1rem;
    color: ${(props) => props.theme.color};
    a {
        padding: 0.3rem;
        border-radius: 1.2rem;
        width: 100%;
        font-size: 1rem;
        display: flex;
        align-items: center;
        gap: 0.7rem;
        text-align: center;
    }
    .active {
        color: ${(props) => props.theme.active};
    }
`;
const RightMenu = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const theme = useSelector((state) => state.theme.config);
    return (
        <Container>
            <SearchBox theme={theme}>
                <input
                    placeholder="Search here"
                    type="text"
                    name="search"
                    onChange={(e) => handleSearch(e)}
                    value={searchQuery}
                />
                <Icon name="search" fill={theme.color} />
            </SearchBox>
            <Menu theme={theme}>
                <NavLink to="/profile">
                    <Icon name="profile" fill={theme.color} />
                    <span>Profile</span>
                </NavLink>
                <NavLink to="/notifications">
                    <Icon name="notification" fill={theme.color} />
                    <span>Notifications</span>
                </NavLink>
                <NavLink to="/settings">
                    <Icon name="settings" fill={theme.color} />
                    <span>Settings</span>
                </NavLink>
                <NavLink to="/tags">
                    <Icon name="tags" fill={theme.color} />
                    <span>Tags</span>
                </NavLink>
            </Menu>
        </Container>
    );
};

export default RightMenu;
