import React from "react";
import styled from "styled-components";
import ToolsCategory from "../components/ToolsCategory";
import ToolsContainer from "../components/ToolsContainer";

const Container = styled.div`
    display: flex;
    gap: 3rem;
    overflow-y: auto;
`;

const Tools = () => {
    return (
        <Container>
            <ToolsCategory />
            <ToolsContainer />
        </Container>
    );
};

export default Tools;
