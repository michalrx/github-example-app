import React, { Component } from 'react';
import { Container } from "./home.style";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

class Home extends Component {
    render() {
        return (
            <Container>
                <Header/>
                home
                <Footer/>
            </Container>
        );
    }
}

export default Home;
