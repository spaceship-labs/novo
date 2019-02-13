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
import img1 from "../../theme/kitchen.png";
import img2 from "../../theme/torre.jpg";
import img3 from "../../theme/torre2.jpg";

class AmenitiesContainer extends Component {
  constructor(props) {
    super(props);
    const amenities = [
      { icon: "icon-room", title: "4 Rooms" },
      { icon: "icon-bed", title: "4 Beds" },
      { icon: "icon-shower", title: "4 Bath" },
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
    const images = [img1, img2, img3];
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
              <ImageFooter>
                Lorem upsum <span> | 01</span>
              </ImageFooter>
            </RowImg>
            <RowBg className="wow fadeInRight">
              <TorreSubTitle>Exclusive details:</TorreSubTitle>
              <HorizontalLine align="left" />
              <List>
                <li>
                  <Paragraph>
                    - Blue Brazilian granite finishes in kitchen.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>
                    - Italian marble in bedrooms, kitchen and bathrooms.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>- Imported cabinets from Italy.</Paragraph>
                </li>
                <li>
                  <Paragraph>- 3 large ovens.</Paragraph>
                </li>
              </List>
            </RowBg>
          </Rows>
        </AmenitiesBg>
        <Rows min="">
          <Row width="20%" className="wow fadeInUp">
            <TorreSubTitleDivided division="true">
              Amenities <br /> included:
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
