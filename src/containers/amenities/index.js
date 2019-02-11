import React, { Component } from 'react';
import { ImageFooter, Paragraph} from "../../theme/App.styled";
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
  HorizontalLine,
} from "./index.styled";

import Smallgallery from "../../components/smallgallery/index";
import img1 from "../../theme/kitchen.png";
import img2 from "../../theme/torre.jpg";
import img3 from "../../theme/torre2.jpg";

class AmenitiesContainer extends Component {
  constructor(props){
    super( props);
    const amenities = [
      { icon: 'icon-room', title: '3 Rooms' },
      { icon: 'icon-bed', title: '4 Beds' },
      { icon: 'icon-shower', title: '3 Bath' },
      { icon: 'icon-laundry', title: 'Laundry' },
    ];
    this.amenities = amenities.map( (a, index) =>{
      return <Amenitie key={index} align="center">
          <i className={a.icon}></i>
          <p>{a.title}</p>
        </Amenitie>
    })
    this.props = props;
  }
  componentDidMount(){
    this.props.mount('amenities');
  }
  render() {
    const images = [ img1, img2, img3 ];
    return (
      <section id="amenities">
        <AmenitiesBg>
          <TitleWrapper>
            <VerticalLine />
            <AmenitiesTitle>Amenities</AmenitiesTitle>
            <AmenitiesSubTitle>amet, consectetur.</AmenitiesSubTitle>
            <AmenitiesFooter>Lorem ipsum dolor sit amet</AmenitiesFooter>
          </TitleWrapper>
          <Rows align='start'>
            <RowImg>
              <RowImgW><Smallgallery images={images} /></RowImgW>
              <ImageFooter>Lorem upsum <span> | 01</span></ImageFooter>
            </RowImg>
            <RowBg>
              <TorreSubTitle>Lorem ipsum consectetur:</TorreSubTitle>
              <HorizontalLine align='left' />
              <List>
                <li><Paragraph>- Lorem ipsum dolor sit amet.</Paragraph></li>
                <li><Paragraph>- Lorem ipsum dolor sit amet.</Paragraph></li>
                <li><Paragraph>- Lorem ipsum dolor sit amet.</Paragraph></li>
              </List>
            </RowBg>
          </Rows>
        </AmenitiesBg>
        <Rows min="">
          <Row width="20%">
            <TorreSubTitleDivided division="true">Amenities <br /> included:</TorreSubTitleDivided>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</Paragraph>
          </Row>
          <RowBlue width='80%' align="center" bg="blue">
            <AmenitieList align="center">
              {this.amenities}
            </AmenitieList>
            <Paragraph align="center">
              Lorem ipsum dolor sit amet<i> | </i>
              consectetur adipisicing elit<i> | </i>
              sed do eiusmod tempor<i> | </i>
              incididunt ut labore<i> | </i>
              consectetur adipisicing elit<i> | </i>
              sed do eiusmod tempor
            </Paragraph>
          </RowBlue>
        </Rows>
      </section>
    );
  }
}

export default AmenitiesContainer;
