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
    const book =
      this.props.lang === "es" ? "Agenda una visita" : "Book a viewing";
    return (
      <TorreWrapp>
        <Rows>
          <Row width="30%" align="right" className="wow fadeInUp">
            <TorreSubTitle>
              Torre Boreal <br /> PH2
            </TorreSubTitle>
            <Paragraph align="right">
              {this.props.lang === "es"
                ? "El penthouse está en el piso 20 y 21, donde podrás contemplar asombrosas vistas citadinas Cancún, y las tranquilas y pacíficas aguas del caribe mexicano."
                : "The penthouse encompasses the 20th and 21st floors where you can contemplate breathtaking views of Cancun’s glistening skyline and peaceful Caribbean waters."}
            </Paragraph>
            <Button onClick={this.props.openContact}>{book}</Button>
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
