import React, { Component } from 'react';
import { Container, UserLoginBox, UserInput, UserButton } from "./home.style";
import { Wrapper } from "../../utils/styles/global.style";

import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

class Home extends Component {
    state = {
        users: [],
        inputValue: '',
    };

    addNewUser = () => {
        this.setState({
            users: [...this.state.users, this.state.inputValue],
            inputValue: '',
            });
    };

    userOnChange = (e) => {
        this.setState({inputValue: e.target.value});
    };

    render() {
        return (
            <Container>
                <Header/>

                <Wrapper>
                    <UserLoginBox>
                        <div>Please add GitHub username to observable.</div>

                            <UserInput value={this.state.inputValue} onChange={this.userOnChange} />
                            <UserButton onClick={this.addNewUser}>
                                Add user
                            </UserButton>

                    </UserLoginBox>
                </Wrapper>

                <Footer/>
            </Container>
        );
    }
}

export default Home;
