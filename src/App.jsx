import "./App.css";
import styled from "styled-components";
import NavBar from "./components/NavBar";
import LeftMenu from "./components/LeftMenu";
import RightMenu from "./components/RightMenu";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: ${({ theme }) => theme.bg};
`;
const Main = styled.main`
    height: 100%;
    display: flex;
`;

function App() {
    const theme = useSelector((state) => state.theme.config);
    return (
        <Container theme={theme}>
            <Router>
                <NavBar />
                <Main>
                    <LeftMenu />
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                    <RightMenu />
                </Main>
            </Router>
        </Container>
    );
}

export default App;
