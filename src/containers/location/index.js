import React, { Component } from "react";
import { Paragraph } from "../../theme/App.styled";
import { Title, Division, Subtitle, Section } from "./index.styled";

class LocationContainer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  componentDidMount() {
    this.props.mount("location");
  }
  render() {
    const iframe = (
      <iframe
        title="Nova location"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14882.5634034048!2d-86.8053395!3d21.1666865!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf3a2774c041eca86!2sNovo+Cancun!5e0!3m2!1ses!2smx!4v1549470506415"
        width="800"
        height="300"
        frameBorder="0"
        allowFullScreen
      />
    );
    //const iframe = '';
    const t1 = this.props.lang === "es" ? "Ubicación" : "Location";
    const t2 =
      this.props.lang === "es"
        ? "Novo Cancún Torre Boreal PH2"
        : "Novo Cancun Torre Boreal PH2";
    const t3 =
      this.props.lang === "es" ? "Cancún Quintana Roo" : "Cancun Quintana Roo";
    const t4 =
      this.props.lang === "es"
        ? "Novo Cancún es un desarrollo inmobiliario en Puerto Cancún, con instalaciones de clase mundial: campo de golf de 18 hoyos, y su propia marina; ubicado a 20 minutos de Aeropuerto Internacional, y a un lado del centro comercial Marina Town Center."
        : "Novo Cancun is a real estate development located in Puerto Cancun, featuring a world-class 18-hole golf course and its own marina. 20 minute drive from the Cancun International Airport and right by Marina Town Center shopping mall.";
    return (
      <Section id="location">
        <div className="wow fadeInUp">
          <Title>{t1}</Title>
          <Division />
          <Subtitle>
            {t2} | <i>{t3}</i>
          </Subtitle>
          <Paragraph align="center">{t4}</Paragraph>
        </div>
        {iframe}
      </Section>
    );
  }
}

export default LocationContainer;
