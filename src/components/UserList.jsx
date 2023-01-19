import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
    flex: 2;
`;

const Users = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 500;
    gap: 0.7rem;
    padding: 2rem 1rem;
    color: ${(props) => props.theme.color};
    overflow-y: auto;
    .user {
        display: flex;
        border-radius: 1.2rem;
        background: ${(props) => props.theme.bg_secondary};
        padding: 0.5rem;
        justify-content: space-between;
        align-items: center;
        a {
            color: ${(props) => props.theme.buttons};
            font-size: 0.8rem;
        }
        div {
            display: flex;
            gap: 0.5rem;
            div {
                display: flex;
                flex-direction: column;
            }
        }
        img {
            width: 3rem;
            height: 3rem;
            object-fit: cover;
            border-radius: 1rem;
        }
        h4 {
            color: ${(props) => props.theme.active};
        }
        span {
            font-size: 0.8rem;
        }
    }
`;

const UserList = () => {
    const theme = useSelector((state) => state.theme.config);
    return (
        <Container>
            <Users theme={theme}>
                <div className="user">
                    <div>
                        <img src="/test.jpg" alt="user" />
                        <div>
                            <h4>Shahedul Islam</h4>
                            <span>Admin</span>
                        </div>
                    </div>
                    <Link to="/profile/shahed">See Profile</Link>
                </div>
                <div className="user">
                    <div>
                        <img src="/test.jpg" alt="user" />
                        <div>
                            <h4>Shahedul Islam</h4>
                            <span>Admin</span>
                        </div>
                    </div>
                    <Link to="/profile/shahed">See Profile</Link>
                </div>
                <div className="user">
                    <div>
                        <img src="/test.jpg" alt="user" />
                        <div>
                            <h4>Shahedul Islam</h4>
                            <span>Admin</span>
                        </div>
                    </div>
                    <Link to="/profile/shahed">See Profile</Link>
                </div>
                <div className="user">
                    <div>
                        <img src="/test.jpg" alt="user" />
                        <div>
                            <h4>Shahedul Islam</h4>
                            <span>Admin</span>
                        </div>
                    </div>
                    <Link to="/profile/shahed">See Profile</Link>
                </div>
                <div className="user">
                    <div>
                        <img src="/test.jpg" alt="user" />
                        <div>
                            <h4>Shahedul Islam</h4>
                            <span>Admin</span>
                        </div>
                    </div>
                    <Link to="/profile/shahed">See Profile</Link>
                </div>
                <div className="user">
                    <div>
                        <img src="/test.jpg" alt="user" />
                        <div>
                            <h4>Shahedul Islam</h4>
                            <span>Admin</span>
                        </div>
                    </div>
                    <Link to="/profile/shahed">See Profile</Link>
                </div>
                <div className="user">
                    <div>
                        <img src="/test.jpg" alt="user" />
                        <div>
                            <h4>Shahedul Islam</h4>
                            <span>Admin</span>
                        </div>
                    </div>
                    <Link to="/profile/shahed">See Profile</Link>
                </div>
                <div className="user">
                    <div>
                        <img src="/test.jpg" alt="user" />
                        <div>
                            <h4>Shahedul Islam</h4>
                            <span>Admin</span>
                        </div>
                    </div>
                    <Link to="/profile/shahed">See Profile</Link>
                </div>
                <div className="user">
                    <div>
                        <img src="/test.jpg" alt="user" />
                        <div>
                            <h4>Shahedul Islam</h4>
                            <span>Admin</span>
                        </div>
                    </div>
                    <Link to="/profile/shahed">See Profile</Link>
                </div>
                <div className="user">
                    <div>
                        <img src="/test.jpg" alt="user" />
                        <div>
                            <h4>Shahedul Islam</h4>
                            <span>Admin</span>
                        </div>
                    </div>
                    <Link to="/profile/shahed">See Profile</Link>
                </div>
                <div className="user">
                    <div>
                        <img src="/test.jpg" alt="user" />
                        <div>
                            <h4>Shahedul Islam</h4>
                            <span>Admin</span>
                        </div>
                    </div>
                    <Link to="/profile/shahed">See Profile</Link>
                </div>
                <div className="user">
                    <div>
                        <img src="/test.jpg" alt="user" />
                        <div>
                            <h4>Shahedul Islam</h4>
                            <span>Admin</span>
                        </div>
                    </div>
                    <Link to="/profile/shahed">See Profile</Link>
                </div>
                <div className="user">
                    <div>
                        <img src="/test.jpg" alt="user" />
                        <div>
                            <h4>Shahedul Islam</h4>
                            <span>Admin</span>
                        </div>
                    </div>
                    <Link to="/profile/shahed">See Profile</Link>
                </div>
                <div className="user">
                    <div>
                        <img src="/test.jpg" alt="user" />
                        <div>
                            <h4>Shahedul Islam</h4>
                            <span>Admin</span>
                        </div>
                    </div>
                    <Link to="/profile/shahed">See Profile</Link>
                </div>
                <div className="user">
                    <div>
                        <img src="/test.jpg" alt="user" />
                        <div>
                            <h4>Shahedul Islam</h4>
                            <span>Admin</span>
                        </div>
                    </div>
                    <Link to="/profile/shahed">See Profile</Link>
                </div>
                <div className="user">
                    <div>
                        <img src="/test.jpg" alt="user" />
                        <div>
                            <h4>Shahedul Islam</h4>
                            <span>Admin</span>
                        </div>
                    </div>
                    <Link to="/profile/shahed">See Profile</Link>
                </div>
                <div className="user">
                    <div>
                        <img src="/test.jpg" alt="user" />
                        <div>
                            <h4>Shahedul Islam</h4>
                            <span>Admin</span>
                        </div>
                    </div>
                    <Link to="/profile/shahed">See Profile</Link>
                </div>
                <div className="user">
                    <div>
                        <img src="/test.jpg" alt="user" />
                        <div>
                            <h4>Shahedul Islam</h4>
                            <span>Admin</span>
                        </div>
                    </div>
                    <Link to="/profile/shahed">See Profile</Link>
                </div>
                <div className="user">
                    <div>
                        <img src="/test.jpg" alt="user" />
                        <div>
                            <h4>Shahedul Islam</h4>
                            <span>Admin</span>
                        </div>
                    </div>
                    <Link to="/profile/shahed">See Profile</Link>
                </div>
                <div className="user">
                    <div>
                        <img src="/test.jpg" alt="user" />
                        <div>
                            <h4>Shahedul Islam</h4>
                            <span>Admin</span>
                        </div>
                    </div>
                    <Link to="/profile/shahed">See Profile</Link>
                </div>
                <div className="user">
                    <div>
                        <img src="/test.jpg" alt="user" />
                        <div>
                            <h4>Shahedul Islam</h4>
                            <span>Admin</span>
                        </div>
                    </div>
                    <Link to="/profile/shahed">See Profile</Link>
                </div>
                <div className="user">
                    <div>
                        <img src="/test.jpg" alt="user" />
                        <div>
                            <h4>Shahedul Islam</h4>
                            <span>Admin</span>
                        </div>
                    </div>
                    <Link to="/profile/shahed">See Profile</Link>
                </div>
                <div className="user">
                    <div>
                        <img src="/test.jpg" alt="user" />
                        <div>
                            <h4>Shahedul Islam</h4>
                            <span>Admin</span>
                        </div>
                    </div>
                    <Link to="/profile/shahed">See Profile</Link>
                </div>
                <div className="user">
                    <div>
                        <img src="/test.jpg" alt="user" />
                        <div>
                            <h4>Shahedul Islam</h4>
                            <span>Admin</span>
                        </div>
                    </div>
                    <Link to="/profile/shahed">See Profile</Link>
                </div>
                <div className="user">
                    <div>
                        <img src="/test.jpg" alt="user" />
                        <div>
                            <h4>Shahedul Islam</h4>
                            <span>Admin</span>
                        </div>
                    </div>
                    <Link to="/profile/shahed">See Profile</Link>
                </div>
                <div className="user">
                    <div>
                        <img src="/test.jpg" alt="user" />
                        <div>
                            <h4>Shahedul Islam</h4>
                            <span>Admin</span>
                        </div>
                    </div>
                    <Link to="/profile/shahed">See Profile</Link>
                </div>
                <div className="user">
                    <div>
                        <img src="/test.jpg" alt="user" />
                        <div>
                            <h4>Shahedul Islam</h4>
                            <span>Admin</span>
                        </div>
                    </div>
                    <Link to="/profile/shahed">See Profile</Link>
                </div>
                <div className="user">
                    <div>
                        <img src="/test.jpg" alt="user" />
                        <div>
                            <h4>Shahedul Islam</h4>
                            <span>Admin</span>
                        </div>
                    </div>
                    <Link to="/profile/shahed">See Profile</Link>
                </div>
                <div className="user">
                    <div>
                        <img src="/test.jpg" alt="user" />
                        <div>
                            <h4>Shahedul Islam</h4>
                            <span>Admin</span>
                        </div>
                    </div>
                    <Link to="/profile/shahed">See Profile</Link>
                </div>
                <div className="user">
                    <div>
                        <img src="/test.jpg" alt="user" />
                        <div>
                            <h4>Shahedul Islam</h4>
                            <span>Admin</span>
                        </div>
                    </div>
                    <Link to="/profile/shahed">See Profile</Link>
                </div>
                <div className="user">
                    <div>
                        <img src="/test.jpg" alt="user" />
                        <div>
                            <h4>Shahedul Islam</h4>
                            <span>Admin</span>
                        </div>
                    </div>
                    <Link to="/profile/shahed">See Profile</Link>
                </div>
                <div className="user">
                    <div>
                        <img src="/test.jpg" alt="user" />
                        <div>
                            <h4>Shahedul Islam</h4>
                            <span>Admin</span>
                        </div>
                    </div>
                    <Link to="/profile/shahed">See Profile</Link>
                </div>
                <div className="user">
                    <div>
                        <img src="/test.jpg" alt="user" />
                        <div>
                            <h4>Shahedul Islam</h4>
                            <span>Admin</span>
                        </div>
                    </div>
                    <Link to="/profile/shahed">See Profile</Link>
                </div>
            </Users>
        </Container>
    );
};
export default UserList;
