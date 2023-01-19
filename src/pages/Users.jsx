import React from "react";
import UserList from "../components/UserList";
import styled from "styled-components";
import RightMenu from "../components/RightMenu";
import UserTypes from "../components/UserTypes";

const Container = styled.div`
    display: flex;
    gap: 3rem;
    overflow-y: auto;
`;

const Users = () => {
    return (
        <Container>
            <UserTypes />
            <UserList />
            <RightMenu />
        </Container>
    );
};

export default Users;
