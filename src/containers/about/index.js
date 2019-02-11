import React, { Component } from 'react';
import { Button, Paragraph } from "../../theme/App.styled";
import {
  Rows,
  RowBg,
  RowImg,
  GalleryWrapp,
  AboutTitle,
  Division,
} from "./index.styled";
import img from "../../theme/about.jpg";

class AboutContainer extends Component {
  constructor( props ){
    super( props );
    this.props = props;
  }
  componentDidMount(){
    this.props.mount('about');
  }
  render() {
    return (
      <section id="about">
        <Rows>
          <RowBg>
            <AboutTitle>About <br /> Novo Cancún</AboutTitle>
            <Division />
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
            <Button>Book a viewing</Button>
          </RowBg>
          <RowImg>
            <GalleryWrapp><img src={img} alt='algo' /></GalleryWrapp>
          </RowImg>
        </Rows>
        <br /><br /><br />
      </section>
    );
  }
}

export default AboutContainer;
