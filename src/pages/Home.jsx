import React from "react";
import Posts from "../components/Posts";
import LeftMenu from "../components/LeftMenu";
import RightMenu from "../components/RightMenu";
import styled from "styled-components";

const Container = styled.main`
    display: flex;
    overflow-y: auto;
    gap: 3rem;
    height: 100%;
`;

const Home = () => {
    return (
        <Container>
            <LeftMenu />
            <Posts />
            <RightMenu />
        </Container>
    );
};

export default Home;
