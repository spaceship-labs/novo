import React, { Component } from "react";
import { SmallContainer, Title, SubTitle } from "../../theme/App.styled";
import { Welcome, PTitle, TitleFooter } from "./index.styled";

class WelcomeComponent extends Component {
  render() {
    return (
      <Welcome>
        <SmallContainer align="center" className="wow fadeInUp">
          <Title>Welcome</Title>
          <SubTitle>to your future lifestyle investment</SubTitle>
          <TitleFooter>A luxurious penthouse in Novo Cancun,</TitleFooter>
          <PTitle>
            a flagship real estate development with its own marina, 18-hole golf
            course, exclusive shopping mall (Marina Town Center), located in
            Puerto Cancun (only 20 minutes from the airport).
          </PTitle>
        </SmallContainer>
      </Welcome>
    );
  }
}

export default WelcomeComponent;
