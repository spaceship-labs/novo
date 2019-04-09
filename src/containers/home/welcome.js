import React, { Component } from "react";
import { SmallContainer, Title, SubTitle } from "../../theme/App.styled";
import { Welcome, PTitle, TitleFooter } from "./index.styled";

class WelcomeComponent extends Component {
  render() {
    const text1 = this.props.lang === "es" ? "Bienvenido" : "Welcome";
    const text2 =
      this.props.lang === "es"
        ? "a tu próxima inversión"
        : "to your future lifestyle investment";
    const text3 =
      this.props.lang === "es" ? (
        <span>Un lujoso penthous de 467 m&#178; en Novo Cancún</span>
      ) : (
        <span>A luxurious 467 m&#178; penthouse in Novo Cancun,</span>
      );
    const text4 =
      this.props.lang === "es"
        ? "Un complejo residencial de primer mundo, con su propia marina, campo de golf de 18 hoyos y exclusivo centro comercial (Marina Town Center). Ubicado en Puerto Cancun, a tan solo 20 minutos del aeropuerto."
        : "A flagship real estate development with its own marina, 18-hole golf course, exclusive shopping mall (Marina Town Center), located in Puerto Cancun (only 20 minutes from the airport).";
    const text5 = this.props.lang === "es" ? "USD$2,750,000" : "USD$2,750,000";
    return (
      <Welcome>
        <SmallContainer align="center" className="wow fadeInUp">
          <Title>{text1}</Title>
          <SubTitle>{text2}</SubTitle>
          <TitleFooter>{text3}</TitleFooter>
          <SubTitle>{text5}</SubTitle>
          <PTitle>{text4}</PTitle>
        </SmallContainer>
      </Welcome>
    );
  }
}

export default WelcomeComponent;
