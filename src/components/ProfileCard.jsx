import React from "react";
import styled from "styled-components";

const Container = styled.div`
    flex: 1;
`;

const ProfileCard = () => {
    return (
        <Container>
            <img
                src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/325135141_852343696023689_6505456416207321112_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Udk_cx4jTggAX_0nz_T&_nc_ht=scontent.fdac135-1.fna&oh=00_AfAUT2n7IAWzCx0FInxKuyuXuk1EFsQyeZ3YicIcNYbOmw&oe=63C3FA96"
                alt="user"
            />
            <h2>Shahedul Islam</h2>
        </Container>
    );
};

export default ProfileCard;
