import "./App.css";
import styled from "styled-components";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import { useSelector } from "react-redux";

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
                        <Route
                            path="/profile/:username"
                            element={<Profile />}
                        />
                        <Route path=":category" element={<Home />} />
                    </Route>
                </Routes>
            </Router>
        </Container>
    );
}

export default App;
