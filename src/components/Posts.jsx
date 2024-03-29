import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon from "./Icon";

const Container = styled.div`
    flex: 1;
`;
const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    gap: 1.3rem;
`;
const PostCard = styled.div`
    padding: 1.2rem;
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
            <PostContainer>
                <PostCard theme={theme}>
                    <header>
                        <Link to="/profile/shahed">
                            <img src="/test.jpg" alt="user" />
                            <h3>Shahedul Islam</h3>
                        </Link>
                        <div>
                            <span>2000 years ago</span>
                            <Icon name="threedots" fill={theme.active} />
                        </div>
                    </header>
                    <Content theme={theme}>
                        <img src="/test.jpg" alt="post" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio doloribus autem obcaecati eum facere quis
                            officia velit nostrum odit..
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
                            <img src="/test.jpg" alt="user" />
                            <h3>Shahedul Islam</h3>
                        </Link>
                        <div>
                            <span>2000 years ago</span>
                            <Icon name="threedots" fill={theme.active} />
                        </div>
                    </header>
                    <Content theme={theme}>
                        <img src="/test.jpg" alt="post" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio doloribus autem obcaecati eum facere quis
                            officia velit nostrum odit..
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
                            <img src="/test.jpg" alt="user" />
                            <h3>Shahedul Islam</h3>
                        </Link>
                        <div>
                            <span>2000 years ago</span>
                            <Icon name="threedots" fill={theme.active} />
                        </div>
                    </header>
                    <Content theme={theme}>
                        <img src="/test.jpg" alt="post" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio doloribus autem obcaecati eum facere quis
                            officia velit nostrum odit..
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
                            <img src="/test.jpg" alt="user" />
                            <h3>Shahedul Islam</h3>
                        </Link>
                        <div>
                            <span>2000 years ago</span>
                            <Icon name="threedots" fill={theme.active} />
                        </div>
                    </header>
                    <Content theme={theme}>
                        <img src="/test.jpg" alt="post" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio doloribus autem obcaecati eum facere quis
                            officia velit nostrum odit..
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
                            <img src="/test.jpg" alt="user" />
                            <h3>Shahedul Islam</h3>
                        </Link>
                        <div>
                            <span>2000 years ago</span>
                            <Icon name="threedots" fill={theme.active} />
                        </div>
                    </header>
                    <Content theme={theme}>
                        <img src="/test.jpg" alt="post" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio doloribus autem obcaecati eum facere quis
                            officia velit nostrum odit..
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
                            <img src="/test.jpg" alt="user" />
                            <h3>Shahedul Islam</h3>
                        </Link>
                        <div>
                            <span>2000 years ago</span>
                            <Icon name="threedots" fill={theme.active} />
                        </div>
                    </header>
                    <Content theme={theme}>
                        <img src="/test.jpg" alt="post" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio doloribus autem obcaecati eum facere quis
                            officia velit nostrum odit..
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
                            <img src="/test.jpg" alt="user" />
                            <h3>Shahedul Islam</h3>
                        </Link>
                        <div>
                            <span>2000 years ago</span>
                            <Icon name="threedots" fill={theme.active} />
                        </div>
                    </header>
                    <Content theme={theme}>
                        <img src="/test.jpg" alt="post" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio doloribus autem obcaecati eum facere quis
                            officia velit nostrum odit..
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
                            <img src="/test.jpg" alt="user" />
                            <h3>Shahedul Islam</h3>
                        </Link>
                        <div>
                            <span>2000 years ago</span>
                            <Icon name="threedots" fill={theme.active} />
                        </div>
                    </header>
                    <Content theme={theme}>
                        <img src="/test.jpg" alt="post" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio doloribus autem obcaecati eum facere quis
                            officia velit nostrum odit..
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
                            <img src="/test.jpg" alt="user" />
                            <h3>Shahedul Islam</h3>
                        </Link>
                        <div>
                            <span>2000 years ago</span>
                            <Icon name="threedots" fill={theme.active} />
                        </div>
                    </header>
                    <Content theme={theme}>
                        <img src="/test.jpg" alt="post" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio doloribus autem obcaecati eum facere quis
                            officia velit nostrum odit..
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
                            <img src="/test.jpg" alt="user" />
                            <h3>Shahedul Islam</h3>
                        </Link>
                        <div>
                            <span>2000 years ago</span>
                            <Icon name="threedots" fill={theme.active} />
                        </div>
                    </header>
                    <Content theme={theme}>
                        <img src="/test.jpg" alt="post" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio doloribus autem obcaecati eum facere quis
                            officia velit nostrum odit..
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
                            <img src="/test.jpg" alt="user" />
                            <h3>Shahedul Islam</h3>
                        </Link>
                        <div>
                            <span>2000 years ago</span>
                            <Icon name="threedots" fill={theme.active} />
                        </div>
                    </header>
                    <Content theme={theme}>
                        <img src="/test.jpg" alt="post" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio doloribus autem obcaecati eum facere quis
                            officia velit nostrum odit..
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
                            <img src="/test.jpg" alt="user" />
                            <h3>Shahedul Islam</h3>
                        </Link>
                        <div>
                            <span>2000 years ago</span>
                            <Icon name="threedots" fill={theme.active} />
                        </div>
                    </header>
                    <Content theme={theme}>
                        <img src="/test.jpg" alt="post" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio doloribus autem obcaecati eum facere quis
                            officia velit nostrum odit..
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
                            <img src="/test.jpg" alt="user" />
                            <h3>Shahedul Islam</h3>
                        </Link>
                        <div>
                            <span>2000 years ago</span>
                            <Icon name="threedots" fill={theme.active} />
                        </div>
                    </header>
                    <Content theme={theme}>
                        <img src="/test.jpg" alt="post" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio doloribus autem obcaecati eum facere quis
                            officia velit nostrum odit..
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
                            <img src="/test.jpg" alt="user" />
                            <h3>Shahedul Islam</h3>
                        </Link>
                        <div>
                            <span>2000 years ago</span>
                            <Icon name="threedots" fill={theme.active} />
                        </div>
                    </header>
                    <Content theme={theme}>
                        <img src="/test.jpg" alt="post" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio doloribus autem obcaecati eum facere quis
                            officia velit nostrum odit..
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
                            <img src="/test.jpg" alt="user" />
                            <h3>Shahedul Islam</h3>
                        </Link>
                        <div>
                            <span>2000 years ago</span>
                            <Icon name="threedots" fill={theme.active} />
                        </div>
                    </header>
                    <Content theme={theme}>
                        <img src="/test.jpg" alt="post" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio doloribus autem obcaecati eum facere quis
                            officia velit nostrum odit..
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
                            <img src="/test.jpg" alt="user" />
                            <h3>Shahedul Islam</h3>
                        </Link>
                        <div>
                            <span>2000 years ago</span>
                            <Icon name="threedots" fill={theme.active} />
                        </div>
                    </header>
                    <Content theme={theme}>
                        <img src="/test.jpg" alt="post" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio doloribus autem obcaecati eum facere quis
                            officia velit nostrum odit..
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
                            <img src="/test.jpg" alt="user" />
                            <h3>Shahedul Islam</h3>
                        </Link>
                        <div>
                            <span>2000 years ago</span>
                            <Icon name="threedots" fill={theme.active} />
                        </div>
                    </header>
                    <Content theme={theme}>
                        <img src="/test.jpg" alt="post" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio doloribus autem obcaecati eum facere quis
                            officia velit nostrum odit..
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
                            <img src="/test.jpg" alt="user" />
                            <h3>Shahedul Islam</h3>
                        </Link>
                        <div>
                            <span>2000 years ago</span>
                            <Icon name="threedots" fill={theme.active} />
                        </div>
                    </header>
                    <Content theme={theme}>
                        <img src="/test.jpg" alt="post" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio doloribus autem obcaecati eum facere quis
                            officia velit nostrum odit..
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
                            <img src="/test.jpg" alt="user" />
                            <h3>Shahedul Islam</h3>
                        </Link>
                        <div>
                            <span>2000 years ago</span>
                            <Icon name="threedots" fill={theme.active} />
                        </div>
                    </header>
                    <Content theme={theme}>
                        <img src="/test.jpg" alt="post" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio doloribus autem obcaecati eum facere quis
                            officia velit nostrum odit..
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
                            <img src="/test.jpg" alt="user" />
                            <h3>Shahedul Islam</h3>
                        </Link>
                        <div>
                            <span>2000 years ago</span>
                            <Icon name="threedots" fill={theme.active} />
                        </div>
                    </header>
                    <Content theme={theme}>
                        <img src="/test.jpg" alt="post" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio doloribus autem obcaecati eum facere quis
                            officia velit nostrum odit..
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
                            <img src="/test.jpg" alt="user" />
                            <h3>Shahedul Islam</h3>
                        </Link>
                        <div>
                            <span>2000 years ago</span>
                            <Icon name="threedots" fill={theme.active} />
                        </div>
                    </header>
                    <Content theme={theme}>
                        <img src="/test.jpg" alt="post" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio doloribus autem obcaecati eum facere quis
                            officia velit nostrum odit..
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
                            <img src="/test.jpg" alt="user" />
                            <h3>Shahedul Islam</h3>
                        </Link>
                        <div>
                            <span>2000 years ago</span>
                            <Icon name="threedots" fill={theme.active} />
                        </div>
                    </header>
                    <Content theme={theme}>
                        <img src="/test.jpg" alt="post" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio doloribus autem obcaecati eum facere quis
                            officia velit nostrum odit..
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
                            <img src="/test.jpg" alt="user" />
                            <h3>Shahedul Islam</h3>
                        </Link>
                        <div>
                            <span>2000 years ago</span>
                            <Icon name="threedots" fill={theme.active} />
                        </div>
                    </header>
                    <Content theme={theme}>
                        <img src="/test.jpg" alt="post" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio doloribus autem obcaecati eum facere quis
                            officia velit nostrum odit..
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
                            <img src="/test.jpg" alt="user" />
                            <h3>Shahedul Islam</h3>
                        </Link>
                        <div>
                            <span>2000 years ago</span>
                            <Icon name="threedots" fill={theme.active} />
                        </div>
                    </header>
                    <Content theme={theme}>
                        <img src="/test.jpg" alt="post" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio doloribus autem obcaecati eum facere quis
                            officia velit nostrum odit..
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
                            <img src="/test.jpg" alt="user" />
                            <h3>Shahedul Islam</h3>
                        </Link>
                        <div>
                            <span>2000 years ago</span>
                            <Icon name="threedots" fill={theme.active} />
                        </div>
                    </header>
                    <Content theme={theme}>
                        <img src="/test.jpg" alt="post" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio doloribus autem obcaecati eum facere quis
                            officia velit nostrum odit..
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
            </PostContainer>
        </Container>
    );
};

export default Posts;
