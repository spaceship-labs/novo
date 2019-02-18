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
    return (
      <Section id="location">
        <div className="wow fadeInUp">
          <Title>Location</Title>
          <Division />
          <Subtitle>
            Novo Cancún Torre Boreal PH2 | <i>Cancún Quintana Roo</i>
          </Subtitle>
          <Paragraph align="center">
            Novo Cancun is a real estate development located in Puerto Cancun,
            featuring a world-class 18-hole golf course and its own marina. 20
            minute drive from the Cancun International Airport and right by
            Marina Town Center shopping mall.
          </Paragraph>
        </div>
        {iframe}
      </Section>
    );
  }
}

export default LocationContainer;
