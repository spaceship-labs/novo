import React, { Component } from 'react';
import { SmallContainer, Title, SubTitle } from "../../theme/App.styled";
import {
  Welcome,
  PTitle,
  TitleFooter,
} from "./index.styled";

class WelcomeComponent extends Component {
  render() {
    return (
        <Welcome>
          <SmallContainer align="center">
            <Title>Welcome</Title>
            <SubTitle>amet, consectetur.</SubTitle>
            <TitleFooter>Lorem ipsum dolor sit amet</TitleFooter>
            <PTitle>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</PTitle>
          </SmallContainer>
        </Welcome>
    );
  }
}

export default WelcomeComponent;