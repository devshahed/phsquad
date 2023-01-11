import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon from "./Icon";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.3rem;
`;
const PostCard = styled.div`
    padding: 1.2rem;
    border: 1px solid #7777778b;
    border-radius: 1.2rem;
    background: ${(props) => props.theme.bg_secondary};
    display: flex;
    color: ${(props) => props.theme.active};
    gap: 0.7rem;
    flex-direction: column;
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        a,
        div {
            display: flex;
            align-items: center;
            gap: 0.4rem;
            img {
                width: 1.7rem;
                height: 1.7rem;
                object-fit: cover;
                border-radius: 50%;
            }
            h3 {
                font-size: 0.9rem;
                margin: 0;
            }
            span {
                font-size: 0.78rem;
                font-weight: 400;
            }
        }
    }
    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    hr {
        border: none;
        border-bottom: 1px solid #81818178;
    }
`;
const Content = styled.div`
    p {
        margin: 0;
        font-size: 0.9rem;
        font-weight: 500;
        color: inherit;
    }
    img {
        width: 100%;
        object-fit: cover;
        border-radius: 1.2rem;
    }
    a {
        margin-left: 1rem;
        font-weight: 600;
        color: ${(props) => props.theme.color};
    }
`;
const Posts = () => {
    const theme = useSelector((state) => state.theme.config);
    return (
        <Container>
            <PostCard theme={theme}>
                <header>
                    <Link to="/profile/shahed">
                        <img
                            src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/325135141_852343696023689_6505456416207321112_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Udk_cx4jTggAX_0nz_T&_nc_ht=scontent.fdac135-1.fna&oh=00_AfAUT2n7IAWzCx0FInxKuyuXuk1EFsQyeZ3YicIcNYbOmw&oe=63C3FA96"
                            alt="user"
                        />
                        <h3>Shahedul Islam</h3>
                    </Link>
                    <div>
                        <span>2000 years ago</span>
                        <Icon name="threedots" fill={theme.active} />
                    </div>
                </header>
                <Content theme={theme}>
                    <img
                        src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/325135141_852343696023689_6505456416207321112_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Udk_cx4jTggAX_0nz_T&_nc_ht=scontent.fdac135-1.fna&oh=00_AfAUT2n7IAWzCx0FInxKuyuXuk1EFsQyeZ3YicIcNYbOmw&oe=63C3FA96"
                        alt="post image"
                    />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odio doloribus autem obcaecati eum facere quis officia
                        velit nostrum odit..
                        <Link to="/post/12">Read more</Link>
                    </p>
                </Content>
                <hr />
                <footer>
                    <Icon name="heart" fill={theme.active} />
                    <Icon name="comment" fill={theme.active} />
                    <Icon name="share" fill={theme.active} />
                </footer>
            </PostCard>
            <PostCard theme={theme}>
                <header>
                    <Link to="/profile/shahed">
                        <img
                            src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/325135141_852343696023689_6505456416207321112_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Udk_cx4jTggAX_0nz_T&_nc_ht=scontent.fdac135-1.fna&oh=00_AfAUT2n7IAWzCx0FInxKuyuXuk1EFsQyeZ3YicIcNYbOmw&oe=63C3FA96"
                            alt="user"
                        />
                        <h3>Shahedul Islam</h3>
                    </Link>
                    <div>
                        <span>2000 years ago</span>
                        <Icon name="threedots" fill={theme.active} />
                    </div>
                </header>
                <Content>
                    <img
                        src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/325135141_852343696023689_6505456416207321112_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Udk_cx4jTggAX_0nz_T&_nc_ht=scontent.fdac135-1.fna&oh=00_AfAUT2n7IAWzCx0FInxKuyuXuk1EFsQyeZ3YicIcNYbOmw&oe=63C3FA96"
                        alt="post image"
                    />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odio doloribus autem obcaecati eum facere quis officia
                        velit nostrum odit..
                        <Link to="/post/12">Read more</Link>
                    </p>
                </Content>
                <hr />
                <footer>
                    <Icon name="heart" fill={theme.active} />
                    <Icon name="comment" fill={theme.active} />
                    <Icon name="share" fill={theme.active} />
                </footer>
            </PostCard>
            <PostCard theme={theme}>
                <header>
                    <Link to="/profile/shahed">
                        <img
                            src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/325135141_852343696023689_6505456416207321112_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Udk_cx4jTggAX_0nz_T&_nc_ht=scontent.fdac135-1.fna&oh=00_AfAUT2n7IAWzCx0FInxKuyuXuk1EFsQyeZ3YicIcNYbOmw&oe=63C3FA96"
                            alt="user"
                        />
                        <h3>Shahedul Islam</h3>
                    </Link>
                    <div>
                        <span>2000 years ago</span>
                        <Icon name="threedots" fill={theme.active} />
                    </div>
                </header>
                <Content>
                    <img
                        src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/325135141_852343696023689_6505456416207321112_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Udk_cx4jTggAX_0nz_T&_nc_ht=scontent.fdac135-1.fna&oh=00_AfAUT2n7IAWzCx0FInxKuyuXuk1EFsQyeZ3YicIcNYbOmw&oe=63C3FA96"
                        alt="post image"
                    />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odio doloribus autem obcaecati eum facere quis officia
                        velit nostrum odit..
                        <Link to="/post/12">Read more</Link>
                    </p>
                </Content>
                <hr />
                <footer>
                    <Icon name="heart" fill={theme.active} />
                    <Icon name="comment" fill={theme.active} />
                    <Icon name="share" fill={theme.active} />
                </footer>
            </PostCard>
            <PostCard theme={theme}>
                <header>
                    <Link to="/profile/shahed">
                        <img
                            src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/325135141_852343696023689_6505456416207321112_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Udk_cx4jTggAX_0nz_T&_nc_ht=scontent.fdac135-1.fna&oh=00_AfAUT2n7IAWzCx0FInxKuyuXuk1EFsQyeZ3YicIcNYbOmw&oe=63C3FA96"
                            alt="user"
                        />
                        <h3>Shahedul Islam</h3>
                    </Link>
                    <div>
                        <span>2000 years ago</span>
                        <Icon name="threedots" fill={theme.active} />
                    </div>
                </header>
                <Content>
                    <img
                        src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/325135141_852343696023689_6505456416207321112_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Udk_cx4jTggAX_0nz_T&_nc_ht=scontent.fdac135-1.fna&oh=00_AfAUT2n7IAWzCx0FInxKuyuXuk1EFsQyeZ3YicIcNYbOmw&oe=63C3FA96"
                        alt="post image"
                    />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odio doloribus autem obcaecati eum facere quis officia
                        velit nostrum odit..
                        <Link to="/post/12">Read more</Link>
                    </p>
                </Content>
                <hr />
                <footer>
                    <Icon name="heart" fill={theme.active} />
                    <Icon name="comment" fill={theme.active} />
                    <Icon name="share" fill={theme.active} />
                </footer>
            </PostCard>
            <PostCard theme={theme}>
                <header>
                    <Link to="/profile/shahed">
                        <img
                            src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/325135141_852343696023689_6505456416207321112_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Udk_cx4jTggAX_0nz_T&_nc_ht=scontent.fdac135-1.fna&oh=00_AfAUT2n7IAWzCx0FInxKuyuXuk1EFsQyeZ3YicIcNYbOmw&oe=63C3FA96"
                            alt="user"
                        />
                        <h3>Shahedul Islam</h3>
                    </Link>
                    <div>
                        <span>2000 years ago</span>
                        <Icon name="threedots" fill={theme.active} />
                    </div>
                </header>
                <Content>
                    <img
                        src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/325135141_852343696023689_6505456416207321112_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Udk_cx4jTggAX_0nz_T&_nc_ht=scontent.fdac135-1.fna&oh=00_AfAUT2n7IAWzCx0FInxKuyuXuk1EFsQyeZ3YicIcNYbOmw&oe=63C3FA96"
                        alt="post image"
                    />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odio doloribus autem obcaecati eum facere quis officia
                        velit nostrum odit..
                        <Link to="/post/12">Read more</Link>
                    </p>
                </Content>
                <hr />
                <footer>
                    <Icon name="heart" fill={theme.active} />
                    <Icon name="comment" fill={theme.active} />
                    <Icon name="share" fill={theme.active} />
                </footer>
            </PostCard>
            <PostCard theme={theme}>
                <header>
                    <Link to="/profile/shahed">
                        <img
                            src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/325135141_852343696023689_6505456416207321112_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Udk_cx4jTggAX_0nz_T&_nc_ht=scontent.fdac135-1.fna&oh=00_AfAUT2n7IAWzCx0FInxKuyuXuk1EFsQyeZ3YicIcNYbOmw&oe=63C3FA96"
                            alt="user"
                        />
                        <h3>Shahedul Islam</h3>
                    </Link>
                    <div>
                        <span>2000 years ago</span>
                        <Icon name="threedots" fill={theme.active} />
                    </div>
                </header>
                <Content>
                    <img
                        src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/325135141_852343696023689_6505456416207321112_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Udk_cx4jTggAX_0nz_T&_nc_ht=scontent.fdac135-1.fna&oh=00_AfAUT2n7IAWzCx0FInxKuyuXuk1EFsQyeZ3YicIcNYbOmw&oe=63C3FA96"
                        alt="post image"
                    />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odio doloribus autem obcaecati eum facere quis officia
                        velit nostrum odit..
                        <Link to="/post/12">Read more</Link>
                    </p>
                </Content>
                <hr />
                <footer>
                    <Icon name="heart" fill={theme.active} />
                    <Icon name="comment" fill={theme.active} />
                    <Icon name="share" fill={theme.active} />
                </footer>
            </PostCard>
            <PostCard theme={theme}>
                <header>
                    <Link to="/profile/shahed">
                        <img
                            src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/325135141_852343696023689_6505456416207321112_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Udk_cx4jTggAX_0nz_T&_nc_ht=scontent.fdac135-1.fna&oh=00_AfAUT2n7IAWzCx0FInxKuyuXuk1EFsQyeZ3YicIcNYbOmw&oe=63C3FA96"
                            alt="user"
                        />
                        <h3>Shahedul Islam</h3>
                    </Link>
                    <div>
                        <span>2000 years ago</span>
                        <Icon name="threedots" fill={theme.active} />
                    </div>
                </header>
                <Content>
                    <img
                        src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/325135141_852343696023689_6505456416207321112_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Udk_cx4jTggAX_0nz_T&_nc_ht=scontent.fdac135-1.fna&oh=00_AfAUT2n7IAWzCx0FInxKuyuXuk1EFsQyeZ3YicIcNYbOmw&oe=63C3FA96"
                        alt="post image"
                    />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odio doloribus autem obcaecati eum facere quis officia
                        velit nostrum odit..
                        <Link to="/post/12">Read more</Link>
                    </p>
                </Content>
                <hr />
                <footer>
                    <Icon name="heart" fill={theme.active} />
                    <Icon name="comment" fill={theme.active} />
                    <Icon name="share" fill={theme.active} />
                </footer>
            </PostCard>
            <PostCard theme={theme}>
                <header>
                    <Link to="/profile/shahed">
                        <img
                            src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/325135141_852343696023689_6505456416207321112_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Udk_cx4jTggAX_0nz_T&_nc_ht=scontent.fdac135-1.fna&oh=00_AfAUT2n7IAWzCx0FInxKuyuXuk1EFsQyeZ3YicIcNYbOmw&oe=63C3FA96"
                            alt="user"
                        />
                        <h3>Shahedul Islam</h3>
                    </Link>
                    <div>
                        <span>2000 years ago</span>
                        <Icon name="threedots" fill={theme.active} />
                    </div>
                </header>
                <Content>
                    <img
                        src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/325135141_852343696023689_6505456416207321112_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Udk_cx4jTggAX_0nz_T&_nc_ht=scontent.fdac135-1.fna&oh=00_AfAUT2n7IAWzCx0FInxKuyuXuk1EFsQyeZ3YicIcNYbOmw&oe=63C3FA96"
                        alt="post image"
                    />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odio doloribus autem obcaecati eum facere quis officia
                        velit nostrum odit..
                        <Link to="/post/12">Read more</Link>
                    </p>
                </Content>
                <hr />
                <footer>
                    <Icon name="heart" fill={theme.active} />
                    <Icon name="comment" fill={theme.active} />
                    <Icon name="share" fill={theme.active} />
                </footer>
            </PostCard>
        </Container>
    );
};

export default Posts;
