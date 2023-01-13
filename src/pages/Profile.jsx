import React from "react";
import styled from "styled-components";
import RightMenu from "../components/RightMenu";
import Posts from "../components/Posts";
import ProfileCard from "../components/ProfileCard.jsx";

const Container = styled.div`
    display: flex;
    overflow-y: auto;
    gap: 3rem;
`;

const Profile = () => {
    return (
        <Container>
            <ProfileCard />
            <Posts />
            <RightMenu />
        </Container>
    );
};

export default Profile;
