import React, { Component } from 'react';
import { Container } from "./header.style";
import { Wrapper } from "../../utils/styles/global.style";

class Header extends Component {
    render() {
        return (
            <Container>
                <Wrapper>
                    <a href="/">GitHub Users Example App</a>
                </Wrapper>
            </Container>
        );
    }
}

export default Header;
