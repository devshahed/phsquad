import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import Icon from "./Icon";

const Container = styled.div`
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    flex-direction: column;
    gap: 0.4rem;
    font-weight: 500;
    padding: 2rem 1rem 0 1rem;
    color: ${(props) => props.theme.active};
    overflow-y: auto;
    flex: 1;
    img {
        width: 10rem;
        height: 10rem;
        object-fit: cover;
        border-radius: 50%;
    }
    h2 {
        font-size: 1.5rem;
        margin: 0;
        display: flex;
        align-items: center;
        gap: 0.3rem;
    }
    span {
        font-weigt: 400;
        font-size: 0.9rem;
    }
`;

const ProfileCard = () => {
    const theme = useSelector((state) => state.theme.config);
    return (
        <Container theme={theme}>
            <img
                src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/325135141_852343696023689_6505456416207321112_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Udk_cx4jTggAX_0nz_T&_nc_ht=scontent.fdac135-1.fna&oh=00_AfAUT2n7IAWzCx0FInxKuyuXuk1EFsQyeZ3YicIcNYbOmw&oe=63C3FA96"
                alt="user"
            />
            <h2>
                Shahedul Islam
                <span title="admin">
                    <Icon name="admin" fill={theme.active} />
                </span>
            </h2>
            <span>10 Posts . 5 Categories</span>
            <span>shahedul872@gmail.com</span>
            <span>@shahed</span>
            <Button type="button" name="editProfile">
                <Icon name="editor" fill={theme.bg_secondary} />
                <span>Edit Profile</span>
            </Button>
        </Container>
    );
};

export default ProfileCard;
