import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useSelector } from "react-redux";

const Container = styled.div`
    flex: 3;
`;
const Tools = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem 0;
    .toolCard {
        color: ${(props) => props.theme.color};
        background: ${(props) => props.theme.bg_secondary};
        padding: 1rem;
        width: 15rem;
        border-radius: 1.2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }
    header {
        display: flex;
        gap: 0.4rem;
        align-items: center;
        img {
            width: 3rem;
            height: 3rem;
            object-fit: cover;
            border-radius: 1rem;
        }
        h4 {
            color: ${(props) => props.theme.active};
            font-size: 1rem;
        }
        span {
            font-size: 0.7rem;
        }
    }
    p {
        font-size: 0.85rem;
        margin: 0;
        padding: 0.5rem 0;
        span {
            padding-right: 0.4rem;
        }
        a {
            color: ${(props) => props.theme.buttons};
            font-weight: 500;
        }
    }
    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
            font-size: 0.88rem;
        }
    }
`;

const ToolsContainer = () => {
    const theme = useSelector((state) => state.theme.config);
    return (
        <Container>
            <Tools theme={theme}>
                <div className="toolCard">
                    <div>
                        <header>
                            <img src="/test.jpg" alt="tool" />
                            <div>
                                <h4>Crypt Leaser</h4>
                                <span>Shahedul Islam</span>
                            </div>
                        </header>
                        <p>
                            <span>
                                Lorem ipsum dolor sit amet, qui minim labore
                                adipisicing minim sint cillum sint consectetur
                                cupidatat.Lorem ipsum dolor sit amet, qui minim
                                labore adipisicing minim sint...
                            </span>
                            <Link to="/tools/12">Read More</Link>
                        </p>
                    </div>
                    <footer>
                        <span style={{ color: theme.active }}>Free</span>
                        <Button name="getTool" type="button">
                            <span>Get Now</span>
                        </Button>
                    </footer>
                </div>
                <div className="toolCard">
                    <div>
                        <header>
                            <img src="/test.jpg" alt="tool" />
                            <div>
                                <h4>Crypt Leaser</h4>
                                <span>Shahedul Islam</span>
                            </div>
                        </header>
                        <p>
                            <span>
                                Lorem ipsum dolor sit amet, qui minim labore
                                adipisicing minim sint cillum sint consectetur
                                cupidatat.Lorem ipsum dolor sit amet, qui minim
                                labore adipisicing minim sint...
                            </span>
                            <Link to="/tools/12">Read More</Link>
                        </p>
                    </div>
                    <footer>
                        <span style={{ color: theme.active }}>Free</span>
                        <Button name="getTool" type="button">
                            <span>Get Now</span>
                        </Button>
                    </footer>
                </div>
                <div className="toolCard">
                    <div>
                        <header>
                            <img src="/test.jpg" alt="tool" />
                            <div>
                                <h4>Crypt Leaser</h4>
                                <span>Shahedul Islam</span>
                            </div>
                        </header>
                        <p>
                            <span>
                                Lorem ipsum dolor sit amet, qui minim labore
                                adipisicing minim sint cillum sint consectetur
                                cupidatat.Lorem ipsum dolor sit amet, qui minim
                                labore adipisicing minim sint...
                            </span>
                            <Link to="/tools/12">Read More</Link>
                        </p>
                    </div>
                    <footer>
                        <span style={{ color: theme.active }}>Free</span>
                        <Button name="getTool" type="button">
                            <span>Get Now</span>
                        </Button>
                    </footer>
                </div>
                <div className="toolCard">
                    <div>
                        <header>
                            <img src="/test.jpg" alt="tool" />
                            <div>
                                <h4>Crypt Leaser</h4>
                                <span>Shahedul Islam</span>
                            </div>
                        </header>
                        <p>
                            <span>
                                Lorem ipsum dolor sit amet, qui minim labore
                                adipisicing minim sint cillum sint consectetur
                                cupidatat.Lorem ipsum dolor sit amet, qui minim
                                labore adipisicing minim sint...
                            </span>
                            <Link to="/tools/12">Read More</Link>
                        </p>
                    </div>
                    <footer>
                        <span style={{ color: theme.active }}>Free</span>
                        <Button name="getTool" type="button">
                            <span>Get Now</span>
                        </Button>
                    </footer>
                </div>
                <div className="toolCard">
                    <div>
                        <header>
                            <img src="/test.jpg" alt="tool" />
                            <div>
                                <h4>Crypt Leaser</h4>
                                <span>Shahedul Islam</span>
                            </div>
                        </header>
                        <p>
                            <span>
                                Lorem ipsum dolor sit amet, qui minim labore
                                adipisicing minim sint cillum sint consectetur
                                cupidatat.Lorem ipsum dolor sit amet, qui minim
                                labore adipisicing minim sint...
                            </span>
                            <Link to="/tools/12">Read More</Link>
                        </p>
                    </div>
                    <footer>
                        <span style={{ color: theme.active }}>Free</span>
                        <Button name="getTool" type="button">
                            <span>Get Now</span>
                        </Button>
                    </footer>
                </div>
                <div className="toolCard">
                    <div>
                        <header>
                            <img src="/test.jpg" alt="tool" />
                            <div>
                                <h4>Crypt Leaser</h4>
                                <span>Shahedul Islam</span>
                            </div>
                        </header>
                        <p>
                            <span>
                                Lorem ipsum dolor sit amet, qui minim labore
                                adipisicing minim sint cillum sint consectetur
                                cupidatat.Lorem ipsum dolor sit amet, qui minim
                                labore adipisicing minim sint...
                            </span>
                            <Link to="/tools/12">Read More</Link>
                        </p>
                    </div>
                    <footer>
                        <span style={{ color: theme.active }}>Free</span>
                        <Button name="getTool" type="button">
                            <span>Get Now</span>
                        </Button>
                    </footer>
                </div>
                <div className="toolCard">
                    <div>
                        <header>
                            <img src="/test.jpg" alt="tool" />
                            <div>
                                <h4>Crypt Leaser</h4>
                                <span>Shahedul Islam</span>
                            </div>
                        </header>
                        <p>
                            <span>
                                Lorem ipsum dolor sit amet, qui minim labore
                                adipisicing minim sint cillum sint consectetur
                                cupidatat.Lorem ipsum dolor sit amet, qui minim
                                labore adipisicing minim sint...
                            </span>
                            <Link to="/tools/12">Read More</Link>
                        </p>
                    </div>
                    <footer>
                        <span style={{ color: theme.active }}>Free</span>
                        <Button name="getTool" type="button">
                            <span>Get Now</span>
                        </Button>
                    </footer>
                </div>
                <div className="toolCard">
                    <div>
                        <header>
                            <img src="/test.jpg" alt="tool" />
                            <div>
                                <h4>Crypt Leaser</h4>
                                <span>Shahedul Islam</span>
                            </div>
                        </header>
                        <p>
                            <span>
                                Lorem ipsum dolor sit amet, qui minim labore
                                adipisicing minim sint cillum sint consectetur
                                cupidatat.Lorem ipsum dolor sit amet, qui minim
                                labore adipisicing minim sint...
                            </span>
                            <Link to="/tools/12">Read More</Link>
                        </p>
                    </div>
                    <footer>
                        <span style={{ color: theme.active }}>Free</span>
                        <Button name="getTool" type="button">
                            <span>Get Now</span>
                        </Button>
                    </footer>
                </div>
                <div className="toolCard">
                    <div>
                        <header>
                            <img src="/test.jpg" alt="tool" />
                            <div>
                                <h4>Crypt Leaser</h4>
                                <span>Shahedul Islam</span>
                            </div>
                        </header>
                        <p>
                            <span>
                                Lorem ipsum dolor sit amet, qui minim labore
                                adipisicing minim sint cillum sint consectetur
                                cupidatat.Lorem ipsum dolor sit amet, qui minim
                                labore adipisicing minim sint...
                            </span>
                            <Link to="/tools/12">Read More</Link>
                        </p>
                    </div>
                    <footer>
                        <span style={{ color: theme.active }}>Free</span>
                        <Button name="getTool" type="button">
                            <span>Get Now</span>
                        </Button>
                    </footer>
                </div>
                <div className="toolCard">
                    <div>
                        <header>
                            <img src="/test.jpg" alt="tool" />
                            <div>
                                <h4>Crypt Leaser</h4>
                                <span>Shahedul Islam</span>
                            </div>
                        </header>
                        <p>
                            <span>
                                Lorem ipsum dolor sit amet, qui minim labore
                                adipisicing minim sint cillum sint consectetur
                                cupidatat.Lorem ipsum dolor sit amet, qui minim
                                labore adipisicing minim sint...
                            </span>
                            <Link to="/tools/12">Read More</Link>
                        </p>
                    </div>
                    <footer>
                        <span style={{ color: theme.active }}>Free</span>
                        <Button name="getTool" type="button">
                            <span>Get Now</span>
                        </Button>
                    </footer>
                </div>
                <div className="toolCard">
                    <div>
                        <header>
                            <img src="/test.jpg" alt="tool" />
                            <div>
                                <h4>Crypt Leaser</h4>
                                <span>Shahedul Islam</span>
                            </div>
                        </header>
                        <p>
                            <span>
                                Lorem ipsum dolor sit amet, qui minim labore
                                adipisicing minim sint cillum sint consectetur
                                cupidatat.Lorem ipsum dolor sit amet, qui minim
                                labore adipisicing minim sint...
                            </span>
                            <Link to="/tools/12">Read More</Link>
                        </p>
                    </div>
                    <footer>
                        <span style={{ color: theme.active }}>Free</span>
                        <Button name="getTool" type="button">
                            <span>Get Now</span>
                        </Button>
                    </footer>
                </div>
                <div className="toolCard">
                    <div>
                        <header>
                            <img src="/test.jpg" alt="tool" />
                            <div>
                                <h4>Crypt Leaser</h4>
                                <span>Shahedul Islam</span>
                            </div>
                        </header>
                        <p>
                            <span>
                                Lorem ipsum dolor sit amet, qui minim labore
                                adipisicing minim sint cillum sint consectetur
                                cupidatat.Lorem ipsum dolor sit amet, qui minim
                                labore adipisicing minim sint...
                            </span>
                            <Link to="/tools/12">Read More</Link>
                        </p>
                    </div>
                    <footer>
                        <span style={{ color: theme.active }}>Free</span>
                        <Button name="getTool" type="button">
                            <span>Get Now</span>
                        </Button>
                    </footer>
                </div>
                <div className="toolCard">
                    <div>
                        <header>
                            <img src="/test.jpg" alt="tool" />
                            <div>
                                <h4>Crypt Leaser</h4>
                                <span>Shahedul Islam</span>
                            </div>
                        </header>
                        <p>
                            <span>
                                Lorem ipsum dolor sit amet, qui minim labore
                                adipisicing minim sint cillum sint consectetur
                                cupidatat.Lorem ipsum dolor sit amet, qui minim
                                labore adipisicing minim sint...
                            </span>
                            <Link to="/tools/12">Read More</Link>
                        </p>
                    </div>
                    <footer>
                        <span style={{ color: theme.active }}>Free</span>
                        <Button name="getTool" type="button">
                            <span>Get Now</span>
                        </Button>
                    </footer>
                </div>
                <div className="toolCard">
                    <div>
                        <header>
                            <img src="/test.jpg" alt="tool" />
                            <div>
                                <h4>Crypt Leaser</h4>
                                <span>Shahedul Islam</span>
                            </div>
                        </header>
                        <p>
                            <span>
                                Lorem ipsum dolor sit amet, qui minim labore
                                adipisicing minim sint cillum sint consectetur
                                cupidatat.Lorem ipsum dolor sit amet, qui minim
                                labore adipisicing minim sint...
                            </span>
                            <Link to="/tools/12">Read More</Link>
                        </p>
                    </div>
                    <footer>
                        <span style={{ color: theme.active }}>Free</span>
                        <Button name="getTool" type="button">
                            <span>Get Now</span>
                        </Button>
                    </footer>
                </div>
                <div className="toolCard">
                    <div>
                        <header>
                            <img src="/test.jpg" alt="tool" />
                            <div>
                                <h4>Crypt Leaser</h4>
                                <span>Shahedul Islam</span>
                            </div>
                        </header>
                        <p>
                            <span>
                                Lorem ipsum dolor sit amet, qui minim labore
                                adipisicing minim sint cillum sint consectetur
                                cupidatat.Lorem ipsum dolor sit amet, qui minim
                                labore adipisicing minim sint...
                            </span>
                            <Link to="/tools/12">Read More</Link>
                        </p>
                    </div>
                    <footer>
                        <span style={{ color: theme.active }}>Free</span>
                        <Button name="getTool" type="button">
                            <span>Get Now</span>
                        </Button>
                    </footer>
                </div>
                <div className="toolCard">
                    <div>
                        <header>
                            <img src="/test.jpg" alt="tool" />
                            <div>
                                <h4>Crypt Leaser</h4>
                                <span>Shahedul Islam</span>
                            </div>
                        </header>
                        <p>
                            <span>
                                Lorem ipsum dolor sit amet, qui minim labore
                                adipisicing minim sint cillum sint consectetur
                                cupidatat.Lorem ipsum dolor sit amet, qui minim
                                labore adipisicing minim sint...
                            </span>
                            <Link to="/tools/12">Read More</Link>
                        </p>
                    </div>
                    <footer>
                        <span style={{ color: theme.active }}>Free</span>
                        <Button name="getTool" type="button">
                            <span>Get Now</span>
                        </Button>
                    </footer>
                </div>
                <div className="toolCard">
                    <div>
                        <header>
                            <img src="/test.jpg" alt="tool" />
                            <div>
                                <h4>Crypt Leaser</h4>
                                <span>Shahedul Islam</span>
                            </div>
                        </header>
                        <p>
                            <span>
                                Lorem ipsum dolor sit amet, qui minim labore
                                adipisicing minim sint cillum sint consectetur
                                cupidatat.Lorem ipsum dolor sit amet, qui minim
                                labore adipisicing minim sint...
                            </span>
                            <Link to="/tools/12">Read More</Link>
                        </p>
                    </div>
                    <footer>
                        <span style={{ color: theme.active }}>Free</span>
                        <Button name="getTool" type="button">
                            <span>Get Now</span>
                        </Button>
                    </footer>
                </div>
                <div className="toolCard">
                    <div>
                        <header>
                            <img src="/test.jpg" alt="tool" />
                            <div>
                                <h4>Crypt Leaser</h4>
                                <span>Shahedul Islam</span>
                            </div>
                        </header>
                        <p>
                            <span>
                                Lorem ipsum dolor sit amet, qui minim labore
                                adipisicing minim sint cillum sint consectetur
                                cupidatat.Lorem ipsum dolor sit amet, qui minim
                                labore adipisicing minim sint...
                            </span>
                            <Link to="/tools/12">Read More</Link>
                        </p>
                    </div>
                    <footer>
                        <span style={{ color: theme.active }}>Free</span>
                        <Button name="getTool" type="button">
                            <span>Get Now</span>
                        </Button>
                    </footer>
                </div>
                <div className="toolCard">
                    <div>
                        <header>
                            <img src="/test.jpg" alt="tool" />
                            <div>
                                <h4>Crypt Leaser</h4>
                                <span>Shahedul Islam</span>
                            </div>
                        </header>
                        <p>
                            <span>
                                Lorem ipsum dolor sit amet, qui minim labore
                                adipisicing minim sint cillum sint consectetur
                                cupidatat.Lorem ipsum dolor sit amet, qui minim
                                labore adipisicing minim sint...
                            </span>
                            <Link to="/tools/12">Read More</Link>
                        </p>
                    </div>
                    <footer>
                        <span style={{ color: theme.active }}>Free</span>
                        <Button name="getTool" type="button">
                            <span>Get Now</span>
                        </Button>
                    </footer>
                </div>
                <div className="toolCard">
                    <div>
                        <header>
                            <img src="/test.jpg" alt="tool" />
                            <div>
                                <h4>Crypt Leaser</h4>
                                <span>Shahedul Islam</span>
                            </div>
                        </header>
                        <p>
                            <span>
                                Lorem ipsum dolor sit amet, qui minim labore
                                adipisicing minim sint cillum sint consectetur
                                cupidatat.Lorem ipsum dolor sit amet, qui minim
                                labore adipisicing minim sint...
                            </span>
                            <Link to="/tools/12">Read More</Link>
                        </p>
                    </div>
                    <footer>
                        <span style={{ color: theme.active }}>Free</span>
                        <Button name="getTool" type="button">
                            <span>Get Now</span>
                        </Button>
                    </footer>
                </div>
                <div className="toolCard">
                    <div>
                        <header>
                            <img src="/test.jpg" alt="tool" />
                            <div>
                                <h4>Crypt Leaser</h4>
                                <span>Shahedul Islam</span>
                            </div>
                        </header>
                        <p>
                            <span>
                                Lorem ipsum dolor sit amet, qui minim labore
                                adipisicing minim sint cillum sint consectetur
                                cupidatat.Lorem ipsum dolor sit amet, qui minim
                                labore adipisicing minim sint...
                            </span>
                            <Link to="/tools/12">Read More</Link>
                        </p>
                    </div>
                    <footer>
                        <span style={{ color: theme.active }}>Free</span>
                        <Button name="getTool" type="button">
                            <span>Get Now</span>
                        </Button>
                    </footer>
                </div>
                <div className="toolCard">
                    <div>
                        <header>
                            <img src="/test.jpg" alt="tool" />
                            <div>
                                <h4>Crypt Leaser</h4>
                                <span>Shahedul Islam</span>
                            </div>
                        </header>
                        <p>
                            <span>
                                Lorem ipsum dolor sit amet, qui minim labore
                                adipisicing minim sint cillum sint consectetur
                                cupidatat.Lorem ipsum dolor sit amet, qui minim
                                labore adipisicing minim sint...
                            </span>
                            <Link to="/tools/12">Read More</Link>
                        </p>
                    </div>
                    <footer>
                        <span style={{ color: theme.active }}>Free</span>
                        <Button name="getTool" type="button">
                            <span>Get Now</span>
                        </Button>
                    </footer>
                </div>
                <div className="toolCard">
                    <div>
                        <header>
                            <img src="/test.jpg" alt="tool" />
                            <div>
                                <h4>Crypt Leaser</h4>
                                <span>Shahedul Islam</span>
                            </div>
                        </header>
                        <p>
                            <span>
                                Lorem ipsum dolor sit amet, qui minim labore
                                adipisicing minim sint cillum sint consectetur
                                cupidatat.Lorem ipsum dolor sit amet, qui minim
                                labore adipisicing minim sint...
                            </span>
                            <Link to="/tools/12">Read More</Link>
                        </p>
                    </div>
                    <footer>
                        <span style={{ color: theme.active }}>Free</span>
                        <Button name="getTool" type="button">
                            <span>Get Now</span>
                        </Button>
                    </footer>
                </div>
                <div className="toolCard">
                    <div>
                        <header>
                            <img src="/test.jpg" alt="tool" />
                            <div>
                                <h4>Crypt Leaser</h4>
                                <span>Shahedul Islam</span>
                            </div>
                        </header>
                        <p>
                            <span>
                                Lorem ipsum dolor sit amet, qui minim labore
                                adipisicing minim sint cillum sint consectetur
                                cupidatat.Lorem ipsum dolor sit amet, qui minim
                                labore adipisicing minim sint...
                            </span>
                            <Link to="/tools/12">Read More</Link>
                        </p>
                    </div>
                    <footer>
                        <span style={{ color: theme.active }}>Free</span>
                        <Button name="getTool" type="button">
                            <span>Get Now</span>
                        </Button>
                    </footer>
                </div>
                <div className="toolCard">
                    <div>
                        <header>
                            <img src="/test.jpg" alt="tool" />
                            <div>
                                <h4>Crypt Leaser</h4>
                                <span>Shahedul Islam</span>
                            </div>
                        </header>
                        <p>
                            <span>
                                Lorem ipsum dolor sit amet, qui minim labore
                                adipisicing minim sint cillum sint consectetur
                                cupidatat.Lorem ipsum dolor sit amet, qui minim
                                labore adipisicing minim sint...
                            </span>
                            <Link to="/tools/12">Read More</Link>
                        </p>
                    </div>
                    <footer>
                        <span style={{ color: theme.active }}>Free</span>
                        <Button name="getTool" type="button">
                            <span>Get Now</span>
                        </Button>
                    </footer>
                </div>
                <div className="toolCard">
                    <div>
                        <header>
                            <img src="/test.jpg" alt="tool" />
                            <div>
                                <h4>Crypt Leaser</h4>
                                <span>Shahedul Islam</span>
                            </div>
                        </header>
                        <p>
                            <span>
                                Lorem ipsum dolor sit amet, qui minim labore
                                adipisicing minim sint cillum sint consectetur
                                cupidatat.Lorem ipsum dolor sit amet, qui minim
                                labore adipisicing minim sint...
                            </span>
                            <Link to="/tools/12">Read More</Link>
                        </p>
                    </div>
                    <footer>
                        <span style={{ color: theme.active }}>Free</span>
                        <Button name="getTool" type="button">
                            <span>Get Now</span>
                        </Button>
                    </footer>
                </div>
                <div className="toolCard">
                    <div>
                        <header>
                            <img src="/test.jpg" alt="tool" />
                            <div>
                                <h4>Crypt Leaser</h4>
                                <span>Shahedul Islam</span>
                            </div>
                        </header>
                        <p>
                            <span>
                                Lorem ipsum dolor sit amet, qui minim labore
                                adipisicing minim sint cillum sint consectetur
                                cupidatat.Lorem ipsum dolor sit amet, qui minim
                                labore adipisicing minim sint...
                            </span>
                            <Link to="/tools/12">Read More</Link>
                        </p>
                    </div>
                    <footer>
                        <span style={{ color: theme.active }}>Free</span>
                        <Button name="getTool" type="button">
                            <span>Get Now</span>
                        </Button>
                    </footer>
                </div>
                <div className="toolCard">
                    <div>
                        <header>
                            <img src="/test.jpg" alt="tool" />
                            <div>
                                <h4>Crypt Leaser</h4>
                                <span>Shahedul Islam</span>
                            </div>
                        </header>
                        <p>
                            <span>
                                Lorem ipsum dolor sit amet, qui minim labore
                                adipisicing minim sint cillum sint consectetur
                                cupidatat.Lorem ipsum dolor sit amet, qui minim
                                labore adipisicing minim sint...
                            </span>
                            <Link to="/tools/12">Read More</Link>
                        </p>
                    </div>
                    <footer>
                        <span style={{ color: theme.active }}>Free</span>
                        <Button name="getTool" type="button">
                            <span>Get Now</span>
                        </Button>
                    </footer>
                </div>
                <div className="toolCard">
                    <div>
                        <header>
                            <img src="/test.jpg" alt="tool" />
                            <div>
                                <h4>Crypt Leaser</h4>
                                <span>Shahedul Islam</span>
                            </div>
                        </header>
                        <p>
                            <span>
                                Lorem ipsum dolor sit amet, qui minim labore
                                adipisicing minim sint cillum sint consectetur
                                cupidatat.Lorem ipsum dolor sit amet, qui minim
                                labore adipisicing minim sint...
                            </span>
                            <Link to="/tools/12">Read More</Link>
                        </p>
                    </div>
                    <footer>
                        <span style={{ color: theme.active }}>Free</span>
                        <Button name="getTool" type="button">
                            <span>Get Now</span>
                        </Button>
                    </footer>
                </div>
                <div className="toolCard">
                    <div>
                        <header>
                            <img src="/test.jpg" alt="tool" />
                            <div>
                                <h4>Crypt Leaser</h4>
                                <span>Shahedul Islam</span>
                            </div>
                        </header>
                        <p>
                            <span>
                                Lorem ipsum dolor sit amet, qui minim labore
                                adipisicing minim sint cillum sint consectetur
                                cupidatat.Lorem ipsum dolor sit amet, qui minim
                                labore adipisicing minim sint...
                            </span>
                            <Link to="/tools/12">Read More</Link>
                        </p>
                    </div>
                    <footer>
                        <span style={{ color: theme.active }}>Free</span>
                        <Button name="getTool" type="button">
                            <span>Get Now</span>
                        </Button>
                    </footer>
                </div>
                <div className="toolCard">
                    <div>
                        <header>
                            <img src="/test.jpg" alt="tool" />
                            <div>
                                <h4>Crypt Leaser</h4>
                                <span>Shahedul Islam</span>
                            </div>
                        </header>
                        <p>
                            <span>
                                Lorem ipsum dolor sit amet, qui minim labore
                                adipisicing minim sint cillum sint consectetur
                                cupidatat.Lorem ipsum dolor sit amet, qui minim
                                labore adipisicing minim sint...
                            </span>
                            <Link to="/tools/12">Read More</Link>
                        </p>
                    </div>
                    <footer>
                        <span style={{ color: theme.active }}>Free</span>
                        <Button name="getTool" type="button">
                            <span>Get Now</span>
                        </Button>
                    </footer>
                </div>
                <div className="toolCard">
                    <div>
                        <header>
                            <img src="/test.jpg" alt="tool" />
                            <div>
                                <h4>Crypt Leaser</h4>
                                <span>Shahedul Islam</span>
                            </div>
                        </header>
                        <p>
                            <span>
                                Lorem ipsum dolor sit amet, qui minim labore
                                adipisicing minim sint cillum sint consectetur
                                cupidatat.Lorem ipsum dolor sit amet, qui minim
                                labore adipisicing minim sint...
                            </span>
                            <Link to="/tools/12">Read More</Link>
                        </p>
                    </div>
                    <footer>
                        <span style={{ color: theme.active }}>Free</span>
                        <Button name="getTool" type="button">
                            <span>Get Now</span>
                        </Button>
                    </footer>
                </div>
                <div className="toolCard">
                    <div>
                        <header>
                            <img src="/test.jpg" alt="tool" />
                            <div>
                                <h4>Crypt Leaser</h4>
                                <span>Shahedul Islam</span>
                            </div>
                        </header>
                        <p>
                            <span>
                                Lorem ipsum dolor sit amet, qui minim labore
                                adipisicing minim sint cillum sint consectetur
                                cupidatat.Lorem ipsum dolor sit amet, qui minim
                                labore adipisicing minim sint...
                            </span>
                            <Link to="/tools/12">Read More</Link>
                        </p>
                    </div>
                    <footer>
                        <span style={{ color: theme.active }}>Free</span>
                        <Button name="getTool" type="button">
                            <span>Get Now</span>
                        </Button>
                    </footer>
                </div>
                <div className="toolCard">
                    <div>
                        <header>
                            <img src="/test.jpg" alt="tool" />
                            <div>
                                <h4>Crypt Leaser</h4>
                                <span>Shahedul Islam</span>
                            </div>
                        </header>
                        <p>
                            <span>
                                Lorem ipsum dolor sit amet, qui minim labore
                                adipisicing minim sint cillum sint consectetur
                                cupidatat.Lorem ipsum dolor sit amet, qui minim
                                labore adipisicing minim sint...
                            </span>
                            <Link to="/tools/12">Read More</Link>
                        </p>
                    </div>
                    <footer>
                        <span style={{ color: theme.active }}>Free</span>
                        <Button name="getTool" type="button">
                            <span>Get Now</span>
                        </Button>
                    </footer>
                </div>
            </Tools>
        </Container>
    );
};

export default ToolsContainer;
