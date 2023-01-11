import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Icon from "./Icon";
import { useSelector } from "react-redux";

//styles
const Container = styled.div`
    padding: 2rem 2rem 0 2rem;
    flex: 1;
    input {
        border: none;
        outline: none;
        background: transparent;
    }
    div {
        background: ${(props) => props.theme.bg_secondary};
    }
`;

const RightMenu = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const theme = useSelector((state) => state.theme.config);
    return (
        <Container theme={theme}>
            <div>
                <input
                    placeholder="Search here"
                    type="text"
                    name="search"
                    onChange={(e) => handleSearch(e)}
                    value={searchQuery}
                />
                <Icon name="search" fill={theme.color} />
            </div>
        </Container>
    );
};

export default RightMenu;
