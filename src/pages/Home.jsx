import React from "react";
import styled from "styled-components";
import Posts from "../components/Posts";

//styles
const Container = styled.div`
    flex: 1;
    padding: 1.5rem 1rem;
`;
const Home = () => {
    return (
        <Container>
            <Posts />
        </Container>
    );
};

export default Home;
