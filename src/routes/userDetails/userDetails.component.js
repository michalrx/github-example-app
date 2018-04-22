import React, { Component } from 'react';


// Config
import { githubConfig } from "../../config/config";

// Styles
import { Container, Content, ContentTop, ContentLeft, ContentCenter, ContentRight, ContentError } from './userDetails.style';

import { Wrapper } from '../../utils/styles/global.style';

// Components
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';

class UserDetails extends Component {
    state = {
        details: {},
        wrongUrl: false
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
            }))
            .catch(()=> this.setState({wrongUrl: true}));
    }

    componentDidUpdate() {
        console.log('current state', this.state);
    }

    render() {
        const userDetails = this.state.details;
        return (
            <Container>
                <Header/>

                <Wrapper>
                    {userDetails.login ?
                        <Content>
                            <ContentTop>
                                <span>User: {userDetails.login}</span>
                            </ContentTop>
                            <ContentLeft>
                                <img src={userDetails.avatar_url} />
                            </ContentLeft>
                            <ContentCenter>
                                repository url: {userDetails.repos_url}
                            </ContentCenter>
                            <ContentRight>
                                email: {userDetails.email}
                                location: {userDetails.location}
                            </ContentRight>
                            {this.props.match.params.userLogin}
                        </Content> : <ContentError>Brak usera</ContentError>
                    }

                </Wrapper>

                <Footer/>
            </Container>
        );
    }
}

export default UserDetails;