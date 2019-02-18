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
    const scrollTo = sections => {
      const top = sections.contact.top;
      window.scroll({ top: top, let: 0, behavior: "smooth" });
    };
    const images = [{ img: img, label: "" }, { img: img2, label: "" }];
    return (
      <section id="about">
        <Rows>
          <RowBg className="wow fadeInLeft">
            <AboutTitle>
              About <br /> Novo Cancún
            </AboutTitle>
            <Division />
            <Paragraph>
              An exclusive residential and commercial complex that overlooks the
              stunning Cancun hotel zone and the city’s downtown urban lights.
              Its neighboring SLS Hotel & Residences as well as the future Grand
              Hyatt both 5 stars hotels, add capital value to this already
              excellent real estate investment. The residential grounds at Novo
              Cancun provide everything you need for family enjoyment and
              wellbeing: a fully equipped fitness center, with state of the art
              cardio and weight lifting equipment, delightful gardens, swimming
              pools and a revitalizing spa.
            </Paragraph>
            <Button onClick={() => scrollTo(this.props.sections)}>
              Book a viewing
            </Button>
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
