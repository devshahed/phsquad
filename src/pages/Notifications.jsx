import React from "react";
import NotificationsContainer from "../components/NotificationsContainer";
import RightMenu from "../components/RightMenu";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    overflow-y: auto;
    gap: 3rem;
`;

const Notifications = () => {
    return (
        <Container>
            <NotificationsContainer />
            <RightMenu />
        </Container>
    );
};

export default Notifications;
