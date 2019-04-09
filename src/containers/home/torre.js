import React, { Component } from "react";
import { Button, Paragraph } from "../../theme/App.styled";
import {
  Rows,
  Row,
  TorreWrapp,
  TorreSubTitle,
  MessageText
} from "./index.styled";
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
    const c1 =
      this.props.lang === "es"
        ? "Para más información contacte con Tatiana Martinez"
        : "For any information please contact Tatiana Martinez";
    return (
      <TorreWrapp>
        <Rows>
          <Row width="30%" align="right" className="wow fadeInUp">
            <TorreSubTitle>
              Torre Boreal <br /> PH2
            </TorreSubTitle>
            <Paragraph align="right">
              {this.props.lang === "es" ? (
                <span>
                  El penthouse de 467 m&#178; está en el piso 20 y 21, donde
                  podrás contemplar asombrosas vistas citadinas Cancún, y las
                  tranquilas y pacíficas aguas del caribe mexicano.
                </span>
              ) : (
                <span>
                  The 467 m&#178; penthouse encompasses the 20th and 21st floors
                  where you can contemplate breathtaking views of Cancun’s
                  glistening skyline and peaceful Caribbean waters.
                </span>
              )}
            </Paragraph>
            <Button onClick={this.props.openContact}>{book}</Button>
            <br />
            <Paragraph align="center">
              <MessageText>
                {c1}
                <span>
                  <a href="mailto:info@puertocancunpenthouse.com">
                    info@puertocancunpenthouse.com
                  </a>
                </span>
                <span>
                  <a href="tel:+52 1 55 62 03 9056">+52 1 55 62 03 9056 <i className='icon-whatsapp'></i></a>
                </span>
              </MessageText>
            </Paragraph>
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
