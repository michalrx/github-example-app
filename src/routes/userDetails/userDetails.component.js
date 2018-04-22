import React, { Component } from 'react';


// Config
import { githubConfig } from "../../config/config";

// Styles
import { Container, Content, ContentTop, ContentLeft, ContentCenter, ContentRight } from './userDetails.style';

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

    componentDidUpdate() {
        console.log('current state', this.state);
    }

    render() {
        const userDetails = this.state.details;
        return (
            <Container>
                <Header/>

                <Wrapper>
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
                    </Content>
                </Wrapper>

                <Footer/>
            </Container>
        );
    }
}

export default UserDetails;