import React, { Component } from 'react';
import { Button, Paragraph } from "../../theme/App.styled";
import {
  Rows,
  Row,
  TorreWrapp,
  TorreSubTitle,
} from "./index.styled";
import Smallgallery from "../../components/smallgallery/index";

import img1 from "../../theme/torre.jpg";
import img2 from "../../theme/torre2.jpg";
import img3 from "../../theme/kitchen.png";

class TorreComponent extends Component {
  render() {
    const images = [ img1, img2, img3 ];
    return (
        <TorreWrapp>
            <Rows>
            <Row width="30%" align="right">
                <TorreSubTitle>Torre Boreal <br /> PH2</TorreSubTitle>
                <Paragraph align="right">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</Paragraph>
                <Button>Book a viewing</Button>
            </Row>
            <Row width="70%">
              <Smallgallery images={images} />
            </Row>
            </Rows>
        </TorreWrapp>
    );
  }
}

export default TorreComponent;