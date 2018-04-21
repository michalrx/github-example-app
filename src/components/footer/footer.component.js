import React, { Component } from 'react';
import { Container } from "./footer.style";
import { Wrapper } from "../../utils/styles/global.style";

class Footer extends Component {
    render() {
        return (
            <Container>
                <Wrapper>
                    Copyright 2018 MR
                </Wrapper>
            </Container>
        );
    }
}

export default Footer;
