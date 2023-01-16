import React from "react";
import styled from "styled-components";
import Icon from "./Icon";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useSelector } from "react-redux";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    flex: 2;
    .toolCard{
        width: 15rem;
    }
    header{
        display: flex;
        img{
            width: 5rem;
            height: 5rem;
            object-fit: cover;
            border-radius: 1.2rem;
        }
    }
    footer{
        display: flex;
    }
`;

const ToolsContainer = () => {
    const theme = useSelector((state) => state.theme.config);
    return (
        <Container theme={theme}>
            <div className="toolCard">
                <header>
                    <img src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/325135141_852343696023689_6505456416207321112_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Udk_cx4jTggAX_0nz_T&_nc_ht=scontent.fdac135-1.fna&oh=00_AfAUT2n7IAWzCx0FInxKuyuXuk1EFsQyeZ3YicIcNYbOmw&oe=63C3FA96" alt="tool" />
                    <div>
                        <h4>Crypt Leaser</h4>
                        <span>Shahedul Islam</span>
                    </div>
                </header>
                <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
                <footer>
                    <span>Free</span>
                    <Button name="getTool" type="button">Get Now</Button>
                </footer>
            </div>
        </Container>
    );
};

export default ToolsContainer;
