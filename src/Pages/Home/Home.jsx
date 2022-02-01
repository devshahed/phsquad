import React from 'react';
import Feed from '../../Components/Feed/Feed';
import Container from '../../Layouts/Container/ContainerLayout'
import SideBar from '../../Components/SideBar/SideBar';
import './Home.css'

export default function Home() {
    return (
        <section id="home">
            <Container>
                <SideBar />
                <Feed />
            </Container>
        </section>
    )
}
