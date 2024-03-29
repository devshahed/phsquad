import "./App.css";
import styled from "styled-components";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import { useSelector } from "react-redux";
import Tools from "./pages/Tools";
import Users from "./pages/Users";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: ${({ theme }) => theme.bg};
    overflow: hidden;
`;

function App() {
    const theme = useSelector((state) => state.theme.config);
    return (
        <Container theme={theme}>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path="profile">
                            <Route path=":username" element={<Profile />} />
                        </Route>
                        <Route
                            path="notifications"
                            element={<Notifications />}
                        />
                        <Route path="category">
                            <Route path=":cat_name" element={<Home />} />
                        </Route>
                        <Route path="/tools">
                            <Route index element={<Tools />} />
                            <Route path=":category" element={<Tools />} />
                        </Route>
                        <Route
                            path="*"
                            element={
                                <div>
                                    <h1 style={{ color: "white" }}>
                                        This page is under maintenance...
                                    </h1>
                                </div>
                            }
                        />
                    </Route>
                    <Route path="/users">
                        <Route path=":userType" element={<Users />} />
                    </Route>
                </Routes>
            </Router>
        </Container>
    );
}

export default App;
