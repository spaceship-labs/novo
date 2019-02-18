import React, { Component } from "react";
import { Button, Paragraph } from "../../theme/App.styled";
import { Rows, Row, TorreWrapp, TorreSubTitle } from "./index.styled";
import Smallgallery from "../../components/smallgallery/index";

import img1 from "../../theme/images/Novo-Cancun-PH-Anemona-2052.jpg";
import img2 from "../../theme/images/Penthouse-Novo-Cancun-2407.jpg";
import img3 from "../../theme/images/Novo-Cancun-PH-Torre-Boreal-3783.jpg";
import img4 from "../../theme/images/Novo-Cancun-PH-Anemona-2002.jpg";
import img5 from "../../theme/images/Novo-Cancun-PH-Anemona-2032.jpg";

class TorreComponent extends Component {
  render() {
    const images = [
      { img: img1, label: "" },
      { img: img2, label: "" },
      { img: img3, label: "" },
      { img: img4, label: "" },
      { img: img5, label: "" }
    ];
    const scrollTo = sections => {
      const top = sections.contact.top;
      window.scroll({ top: top, let: 0, behavior: "smooth" });
    };
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
            <Button onClick={() => scrollTo(this.props.sections)}>
              Book a viewing
            </Button>
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
