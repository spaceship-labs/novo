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
      this.props.lang === "es"
        ? "Un lujoso penthouse en Novo Cancún"
        : "A luxurious penthouse in Novo Cancun,";
    const text4 =
      this.props.lang === "es"
        ? "un complejo residencial de primer mundo, con su propia marina, campo de golf de 18 hoyos y exclusivo centro comercial (Marina Town Center). Ubicado en Puerto Cancun, a tan solo 20 minutos del aeropuerto."
        : "a flagship real estate development with its own marina, 18-hole golf course, exclusive shopping mall (Marina Town Center), located in Puerto Cancun (only 20 minutes from the airport).";
    return (
      <Welcome>
        <SmallContainer align="center" className="wow fadeInUp">
          <Title>{text1}</Title>
          <SubTitle>{text2}</SubTitle>
          <TitleFooter>{text3}</TitleFooter>
          <PTitle>{text4}</PTitle>
        </SmallContainer>
      </Welcome>
    );
  }
}

export default WelcomeComponent;
