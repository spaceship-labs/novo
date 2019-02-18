import React, { Component } from "react";
import { ImageFooter, Paragraph } from "../../theme/App.styled";
import {
  AmenitiesBg,
  Rows,
  Row,
  RowImg,
  RowImgW,
  RowBg,
  TorreSubTitle,
  TorreSubTitleDivided,
  RowBlue,
  AmenitieList,
  Amenitie,
  List,
  TitleWrapper,
  AmenitiesTitle,
  AmenitiesSubTitle,
  AmenitiesFooter,
  VerticalLine,
  HorizontalLine
} from "./index.styled";

import Smallgallery from "../../components/smallgallery/index";
import img1 from "../../theme/images/Novo-Cancun-PH-Anemona-2026.jpg"; //baño
import img2 from "../../theme/images/Novo-Cancun-PH-Anemona-2078.jpg"; //cocina interior
import img3 from "../../theme/images/Novo-Cancun-PH-Anemona-2103.jpg";
import img4 from "../../theme/images/Novo-Cancun-PH-Anemona-2082.jpg";
import img5 from "../../theme/images/Novo-Cancun-PH-Anemona-2085.jpg";
import img6 from "../../theme/images/Novo-Cancun-PH-Anemona-2088.jpg";

class AmenitiesContainer extends Component {
  constructor(props) {
    super(props);
    const amenities = [
      { icon: "icon-room", title: "4 Rooms" },
      { icon: "icon-bed", title: "4 Beds" },
      { icon: "icon-shower", title: "4.5 Bathrooms" },
      { icon: "icon-laundry", title: "Laundry" }
    ];
    this.amenities = amenities.map((a, index) => {
      const delay = `${index * 0.3}s`;
      return (
        <Amenitie
          key={index}
          align="center"
          className="wow fadeInUp"
          data-wow-delay={delay}
        >
          <i className={a.icon} />
          <p>{a.title}</p>
        </Amenitie>
      );
    });
    this.props = props;
  }
  componentDidMount() {
    this.props.mount("amenities");
  }
  render() {
    const images = [
      { img: img1, label: "" },
      { img: img2, label: "" },
      { img: img3, label: "" },
      { img: img4, label: "" },
      { img: img5, label: "" },
      { img: img6, label: "" }
    ];
    return (
      <section id="amenities">
        <AmenitiesBg>
          <TitleWrapper className="wow fadeInUp">
            <VerticalLine />
            <AmenitiesTitle>Amenities</AmenitiesTitle>
            <AmenitiesSubTitle>A luxurious apartment,</AmenitiesSubTitle>
            <AmenitiesFooter>elegant and sophisticated.</AmenitiesFooter>
          </TitleWrapper>
          <Rows align="start">
            <RowImg className="wow fadeInLeft">
              <RowImgW>
                <Smallgallery images={images} />
              </RowImgW>
            </RowImg>
            <RowBg className="wow fadeInRight">
              <TorreSubTitle>Exclusive details:</TorreSubTitle>
              <HorizontalLine align="left" />
              <List>
                <li>
                  <Paragraph>
                    <span>-</span> Blue Brazilian granite finishes in kitchen.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>
                    <span>-</span> Italian marble in bedrooms, kitchen and
                    bathrooms.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>
                    <span>-</span> Imported cabinets from Italy.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>
                    <span>-</span> 3 large ovens.
                  </Paragraph>
                </li>
              </List>
            </RowBg>
          </Rows>
        </AmenitiesBg>
        <Rows min="">
          <Row width="20%" className="wow fadeInUp">
            <TorreSubTitleDivided division="true">
              Features <br /> and amenities:
            </TorreSubTitleDivided>
            <Paragraph>
              Imagine waking up everyday in paradise, in this extravagant and
              opulent penthouse. Enjoy its exclusive and wonderful features!
            </Paragraph>
          </Row>
          <RowBlue width="80%" align="center" bg="blue">
            <AmenitieList align="center">{this.amenities}</AmenitieList>
            <Paragraph align="center">
              Terrace<i> | </i>
              Walk in closet<i> | </i>
              Jacuzzi<i> | </i>
              Roof Garden
            </Paragraph>
          </RowBlue>
        </Rows>
      </section>
    );
  }
}

export default AmenitiesContainer;
