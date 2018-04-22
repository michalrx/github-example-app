import React, { Component } from 'react';


// Config
import { githubConfig } from "../../config/config";

// Styles
import { Container } from './userDetails.style';

import { Wrapper } from '../../utils/styles/global.style';

// Components
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';

class UserDetails extends Component {
    state = {
        details: {},
    }

    componentDidMount() {
        fetch(
            githubConfig.apiUrl
            + '/users/'
            + this.props.match.params.userLogin
            + '?client_id='
            + githubConfig.clientId
            + '&client_secret='
            + githubConfig.clientSecret)
            .then(response => response.json())
            .then(data => this.setState({
                details: data,
            }));
    }

    render() {
        return (
            <Container>
                <Header/>

                <Wrapper>
                    {this.props.match.params.userLogin}
                </Wrapper>

                <Footer/>
            </Container>
        );
    }
}

export default UserDetails;