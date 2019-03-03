import React, { Component } from "react";
import { Button, Paragraph } from "../../theme/App.styled";
import {
  Rows,
  RowBg,
  RowImg,
  GalleryWrapp,
  AboutTitle,
  Division
} from "./index.styled";

import Smallgallery from "../../components/smallgallery/index";
import img from "../../theme/images/Novo-Cancun-PH-Torre-Boreal-3758.jpg";
import img2 from "../../theme/images/Novo-Cancun-PH-Torre-Boreal-3759.jpg";

class AboutContainer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  componentDidMount() {
    this.props.mount("about");
  }
  render() {
    const images = [{ img: img, label: "" }, { img: img2, label: "" }];
    const t1 = this.props.lang === "es" ? "Sobre" : "About";
    const t2 =
      this.props.lang === "es"
        ? "Un complejo residencial y comercial de donde podrás contemplar impresionantes paisajes: una espectacular vista de la zona hotelera de Cancún y sus fabulosas luces citadinas. Colinda con el SLS Hotel & Residences y el futuro Grand Hyatt hotel, ambos hoteles de 5 estrellas; lo cual brinda un valor agregado a esta excelente inversión inmobiliaria. La residencial en Novo Cancún proporciona todo lo necesario para la recreación en familia y para un estilo de vida de bienestar: cuenta con un centro fitness equipado con aparatos cardiovasculares y pesas de alta gama, así como hermosos jardines, albercas y spa revitalizante."
        : "An exclusive residential and commercial complex that overlooks the stunning Cancun hotel zone and the city’s downtown urban lights. Its neighboring SLS Hotel & Residences as well as the future Grand Hyatt both 5 stars hotels, add capital value to this already excellent real estate investment. The residential grounds at Novo Cancun provide everything you need for family enjoyment and wellbeing: a fully equipped fitness center, with state of the art cardio and weight lifting equipment, delightful gardens, swimming pools and a revitalizing spa.";
    const t3 =
      this.props.lang === "es" ? "Agenda una visita" : "Book a viewing";
    return (
      <section id="about">
        <Rows>
          <RowBg className="wow fadeInLeft">
            <AboutTitle>
              {t1} <br /> Novo Cancún
            </AboutTitle>
            <Division />
            <Paragraph>{t2}</Paragraph>
            <Button onClick={this.props.openContact}>{t3}</Button>
          </RowBg>
          <RowImg className="wow fadeInRight">
            <GalleryWrapp>
              <Smallgallery images={images} />
            </GalleryWrapp>
          </RowImg>
        </Rows>
        <br />
        <br />
        <br />
      </section>
    );
  }
}

export default AboutContainer;
