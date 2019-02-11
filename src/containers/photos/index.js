import React, { Component } from 'react';
import Largegallery from "../../components/largegallery/index";
import { SectionWrapper } from "./index.styled";

import img1 from "../../theme/livingroom.jpg";
import img2 from "../../theme/kitchen.png";
import img3 from "../../theme/torre.jpg";
import img4 from "../../theme/torre2.jpg";

class PhotosContainer extends Component {
  constructor( props ){
    super( props );
  }
  componentDidMount(){
    this.props.mount('photos');
  }
  render() {
    const images = [ img1, img2, img3, img4 ];
    return (
      <SectionWrapper id="photos">
        <Largegallery images={images} />
      </SectionWrapper>
    );
  }
}

export default PhotosContainer;
