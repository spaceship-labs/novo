import React, { Component } from "react";
import { Button, Paragraph } from "../../theme/App.styled";
import { Rows, Row, TorreWrapp, TorreSubTitle } from "./index.styled";
import Smallgallery from "../../components/smallgallery/index";

import img1 from "../../theme/torre.jpg";
import img2 from "../../theme/torre2.jpg";
import img3 from "../../theme/kitchen.png";

class TorreComponent extends Component {
  render() {
    const images = [img1, img2, img3];
    return (
      <TorreWrapp>
        <Rows>
          <Row width="30%" align="right" className="wow fadeInUp">
            <TorreSubTitle>
              Torre Boreal <br /> PH2
            </TorreSubTitle>
            <Paragraph align="right">
              The penthouse encompasses the 20th and 21st floors where you can
              contemplate breathtaking views of Cancun’s glistening skyline and
              peaceful Caribbean waters.
            </Paragraph>
            <Button>Book a viewing</Button>
          </Row>
          <Row width="70%" className="wow fadeInUp">
            <Smallgallery images={images} />
          </Row>
        </Rows>
      </TorreWrapp>
    );
  }
}

export default TorreComponent;
