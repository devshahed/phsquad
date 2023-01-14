import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";

const Container = styled.div`
    flex: 2;
`;

const Notifications = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 500;
    gap: 0.7rem;
    padding: 2rem 1rem;
    color: ${(props) => props.theme.color};
    overflow-y: auto;
    .notificationCard {
        display: flex;
        align-items: center;
        padding: 0.5rem;
        border-radius: 1rem;
        background: ${(props) => props.theme.bg_secondary};
        gap: 1rem;
        div {
            display: flex;
            gap: 0.2rem;
        }
        a {
            font-weight: "700";
            color: ${(props) => props.theme.active};
        }
    }
`;

const NotificationsContainer = () => {
    const theme = useSelector((state) => state.theme.config);
    return (
        <Container>
            <Notifications theme={theme}>
                <Link to="/posts/12" className="notificationCard">
                    <Icon name="notification" fill={theme.color} />
                    <div>
                        <Link to="/profile/shahed">Al Montasir Nahid</Link>
                        <span>posted on</span>
                        <Link to="/category/programming">programming</Link>
                        <span>1 min ago</span>
                    </div>
                </Link>
                <Link to="/posts/12" className="notificationCard">
                    <Icon name="notification" fill={theme.color} />
                    <div>
                        <Link to="/profile/shahed">Al Montasir Nahid</Link>
                        <span>posted on</span>
                        <Link to="/category/programming">programming</Link>
                        <span>1 min ago</span>
                    </div>
                </Link>
                <Link to="/posts/12" className="notificationCard">
                    <Icon name="notification" fill={theme.color} />
                    <div>
                        <Link to="/profile/shahed">Al Montasir Nahid</Link>
                        <span>posted on</span>
                        <Link to="/category/programming">programming</Link>
                        <span>1 min ago</span>
                    </div>
                </Link>
                <Link to="/posts/12" className="notificationCard">
                    <Icon name="notification" fill={theme.color} />
                    <div>
                        <Link to="/profile/shahed">Al Montasir Nahid</Link>
                        <span>posted on</span>
                        <Link to="/category/programming">programming</Link>
                        <span>1 min ago</span>
                    </div>
                </Link>
                <Link to="/posts/12" className="notificationCard">
                    <Icon name="notification" fill={theme.color} />
                    <div>
                        <Link to="/profile/shahed">Al Montasir Nahid</Link>
                        <span>posted on</span>
                        <Link to="/category/programming">programming</Link>
                        <span>1 min ago</span>
                    </div>
                </Link>
                <Link to="/posts/12" className="notificationCard">
                    <Icon name="notification" fill={theme.color} />
                    <div>
                        <Link to="/profile/shahed">Al Montasir Nahid</Link>
                        <span>posted on</span>
                        <Link to="/category/programming">programming</Link>
                        <span>1 min ago</span>
                    </div>
                </Link>
                <Link to="/posts/12" className="notificationCard">
                    <Icon name="notification" fill={theme.color} />
                    <div>
                        <Link to="/profile/shahed">Al Montasir Nahid</Link>
                        <span>posted on</span>
                        <Link to="/category/programming">programming</Link>
                        <span>1 min ago</span>
                    </div>
                </Link>
                <Link to="/posts/12" className="notificationCard">
                    <Icon name="notification" fill={theme.color} />
                    <div>
                        <Link to="/profile/shahed">Al Montasir Nahid</Link>
                        <span>posted on</span>
                        <Link to="/category/programming">programming</Link>
                        <span>1 min ago</span>
                    </div>
                </Link>
                <Link to="/posts/12" className="notificationCard">
                    <Icon name="notification" fill={theme.color} />
                    <div>
                        <Link to="/profile/shahed">Al Montasir Nahid</Link>
                        <span>posted on</span>
                        <Link to="/category/programming">programming</Link>
                        <span>1 min ago</span>
                    </div>
                </Link>
                <Link to="/posts/12" className="notificationCard">
                    <Icon name="notification" fill={theme.color} />
                    <div>
                        <Link to="/profile/shahed">Al Montasir Nahid</Link>
                        <span>posted on</span>
                        <Link to="/category/programming">programming</Link>
                        <span>1 min ago</span>
                    </div>
                </Link>
                <Link to="/posts/12" className="notificationCard">
                    <Icon name="notification" fill={theme.color} />
                    <div>
                        <Link to="/profile/shahed">Al Montasir Nahid</Link>
                        <span>posted on</span>
                        <Link to="/category/programming">programming</Link>
                        <span>1 min ago</span>
                    </div>
                </Link>
                <Link to="/posts/12" className="notificationCard">
                    <Icon name="notification" fill={theme.color} />
                    <div>
                        <Link to="/profile/shahed">Al Montasir Nahid</Link>
                        <span>posted on</span>
                        <Link to="/category/programming">programming</Link>
                        <span>1 min ago</span>
                    </div>
                </Link>
                <Link to="/posts/12" className="notificationCard">
                    <Icon name="notification" fill={theme.color} />
                    <div>
                        <Link to="/profile/shahed">Al Montasir Nahid</Link>
                        <span>posted on</span>
                        <Link to="/category/programming">programming</Link>
                        <span>1 min ago</span>
                    </div>
                </Link>
                <Link to="/posts/12" className="notificationCard">
                    <Icon name="notification" fill={theme.color} />
                    <div>
                        <Link to="/profile/shahed">Al Montasir Nahid</Link>
                        <span>posted on</span>
                        <Link to="/category/programming">programming</Link>
                        <span>1 min ago</span>
                    </div>
                </Link>
                <Link to="/posts/12" className="notificationCard">
                    <Icon name="notification" fill={theme.color} />
                    <div>
                        <Link to="/profile/shahed">Al Montasir Nahid</Link>
                        <span>posted on</span>
                        <Link to="/category/programming">programming</Link>
                        <span>1 min ago</span>
                    </div>
                </Link>
                <Link to="/posts/12" className="notificationCard">
                    <Icon name="notification" fill={theme.color} />
                    <div>
                        <Link to="/profile/shahed">Al Montasir Nahid</Link>
                        <span>posted on</span>
                        <Link to="/category/programming">programming</Link>
                        <span>1 min ago</span>
                    </div>
                </Link>
                <Link to="/posts/12" className="notificationCard">
                    <Icon name="notification" fill={theme.color} />
                    <div>
                        <Link to="/profile/shahed">Al Montasir Nahid</Link>
                        <span>posted on</span>
                        <Link to="/category/programming">programming</Link>
                        <span>1 min ago</span>
                    </div>
                </Link>
                <Link to="/posts/12" className="notificationCard">
                    <Icon name="notification" fill={theme.color} />
                    <div>
                        <Link to="/profile/shahed">Al Montasir Nahid</Link>
                        <span>posted on</span>
                        <Link to="/category/programming">programming</Link>
                        <span>1 min ago</span>
                    </div>
                </Link>
                <Link to="/posts/12" className="notificationCard">
                    <Icon name="notification" fill={theme.color} />
                    <div>
                        <Link to="/profile/shahed">Al Montasir Nahid</Link>
                        <span>posted on</span>
                        <Link to="/category/programming">programming</Link>
                        <span>1 min ago</span>
                    </div>
                </Link>
                <Link to="/posts/12" className="notificationCard">
                    <Icon name="notification" fill={theme.color} />
                    <div>
                        <Link to="/profile/shahed">Al Montasir Nahid</Link>
                        <span>posted on</span>
                        <Link to="/category/programming">programming</Link>
                        <span>1 min ago</span>
                    </div>
                </Link>
                <Link to="/posts/12" className="notificationCard">
                    <Icon name="notification" fill={theme.color} />
                    <div>
                        <Link to="/profile/shahed">Al Montasir Nahid</Link>
                        <span>posted on</span>
                        <Link to="/category/programming">programming</Link>
                        <span>1 min ago</span>
                    </div>
                </Link>
                <Link to="/posts/12" className="notificationCard">
                    <Icon name="notification" fill={theme.color} />
                    <div>
                        <Link to="/profile/shahed">Al Montasir Nahid</Link>
                        <span>posted on</span>
                        <Link to="/category/programming">programming</Link>
                        <span>1 min ago</span>
                    </div>
                </Link>
                <Link to="/posts/12" className="notificationCard">
                    <Icon name="notification" fill={theme.color} />
                    <div>
                        <Link to="/profile/shahed">Al Montasir Nahid</Link>
                        <span>posted on</span>
                        <Link to="/category/programming">programming</Link>
                        <span>1 min ago</span>
                    </div>
                </Link>
                <Link to="/posts/12" className="notificationCard">
                    <Icon name="notification" fill={theme.color} />
                    <div>
                        <Link to="/profile/shahed">Al Montasir Nahid</Link>
                        <span>posted on</span>
                        <Link to="/category/programming">programming</Link>
                        <span>1 min ago</span>
                    </div>
                </Link>
                <Link to="/posts/12" className="notificationCard">
                    <Icon name="notification" fill={theme.color} />
                    <div>
                        <Link to="/profile/shahed">Al Montasir Nahid</Link>
                        <span>posted on</span>
                        <Link to="/category/programming">programming</Link>
                        <span>1 min ago</span>
                    </div>
                </Link>
                <Link to="/posts/12" className="notificationCard">
                    <Icon name="notification" fill={theme.color} />
                    <div>
                        <Link to="/profile/shahed">Al Montasir Nahid</Link>
                        <span>posted on</span>
                        <Link to="/category/programming">programming</Link>
                        <span>1 min ago</span>
                    </div>
                </Link>
                <Link to="/posts/12" className="notificationCard">
                    <Icon name="notification" fill={theme.color} />
                    <div>
                        <Link to="/profile/shahed">Al Montasir Nahid</Link>
                        <span>posted on</span>
                        <Link to="/category/programming">programming</Link>
                        <span>1 min ago</span>
                    </div>
                </Link>
                <Link to="/posts/12" className="notificationCard">
                    <Icon name="notification" fill={theme.color} />
                    <div>
                        <Link to="/profile/shahed">Al Montasir Nahid</Link>
                        <span>posted on</span>
                        <Link to="/category/programming">programming</Link>
                        <span>1 min ago</span>
                    </div>
                </Link>
                <Link to="/posts/12" className="notificationCard">
                    <Icon name="notification" fill={theme.color} />
                    <div>
                        <Link to="/profile/shahed">Al Montasir Nahid</Link>
                        <span>posted on</span>
                        <Link to="/category/programming">programming</Link>
                        <span>1 min ago</span>
                    </div>
                </Link>
                <Link to="/posts/12" className="notificationCard">
                    <Icon name="notification" fill={theme.color} />
                    <div>
                        <Link to="/profile/shahed">Al Montasir Nahid</Link>
                        <span>posted on</span>
                        <Link to="/category/programming">programming</Link>
                        <span>1 min ago</span>
                    </div>
                </Link>
                <Link to="/posts/12" className="notificationCard">
                    <Icon name="notification" fill={theme.color} />
                    <div>
                        <Link to="/profile/shahed">Al Montasir Nahid</Link>
                        <span>posted on</span>
                        <Link to="/category/programming">programming</Link>
                        <span>1 min ago</span>
                    </div>
                </Link>
                <Link to="/posts/12" className="notificationCard">
                    <Icon name="notification" fill={theme.color} />
                    <div>
                        <Link to="/profile/shahed">Al Montasir Nahid</Link>
                        <span>posted on</span>
                        <Link to="/category/programming">programming</Link>
                        <span>1 min ago</span>
                    </div>
                </Link>
                <Link to="/posts/12" className="notificationCard">
                    <Icon name="notification" fill={theme.color} />
                    <div>
                        <Link to="/profile/shahed">Al Montasir Nahid</Link>
                        <span>posted on</span>
                        <Link to="/category/programming">programming</Link>
                        <span>1 min ago</span>
                    </div>
                </Link>
                <Link to="/posts/12" className="notificationCard">
                    <Icon name="notification" fill={theme.color} />
                    <div>
                        <Link to="/profile/shahed">Al Montasir Nahid</Link>
                        <span>posted on</span>
                        <Link to="/category/programming">programming</Link>
                        <span>1 min ago</span>
                    </div>
                </Link>
                <Link to="/posts/12" className="notificationCard">
                    <Icon name="notification" fill={theme.color} />
                    <div>
                        <Link to="/profile/shahed">Al Montasir Nahid</Link>
                        <span>posted on</span>
                        <Link to="/category/programming">programming</Link>
                        <span>1 min ago</span>
                    </div>
                </Link>
                <Link to="/posts/12" className="notificationCard">
                    <Icon name="notification" fill={theme.color} />
                    <div>
                        <Link to="/profile/shahed">Al Montasir Nahid</Link>
                        <span>posted on</span>
                        <Link to="/category/programming">programming</Link>
                        <span>1 min ago</span>
                    </div>
                </Link>
                <Link to="/posts/12" className="notificationCard">
                    <Icon name="notification" fill={theme.color} />
                    <div>
                        <Link to="/profile/shahed">Al Montasir Nahid</Link>
                        <span>posted on</span>
                        <Link to="/category/programming">programming</Link>
                        <span>1 min ago</span>
                    </div>
                </Link>
                <Link to="/posts/12" className="notificationCard">
                    <Icon name="notification" fill={theme.color} />
                    <div>
                        <Link to="/profile/shahed">Al Montasir Nahid</Link>
                        <span>posted on</span>
                        <Link to="/category/programming">programming</Link>
                        <span>1 min ago</span>
                    </div>
                </Link>
                <Link to="/posts/12" className="notificationCard">
                    <Icon name="notification" fill={theme.color} />
                    <div>
                        <Link to="/profile/shahed">Al Montasir Nahid</Link>
                        <span>posted on</span>
                        <Link to="/category/programming">programming</Link>
                        <span>1 min ago</span>
                    </div>
                </Link>
            </Notifications>
        </Container>
    );
};
export default NotificationsContainer;
