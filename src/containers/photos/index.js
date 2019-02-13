import React, { Component } from "react";
import Largegallery from "../../components/largegallery/index";
import { SectionWrapper } from "./index.styled";

import livingroom from "../../theme/livingroom.jpg";
import bathroom from "../../theme/bathroom.jpg";
import kitchen from "../../theme/kitchen.png";
import masterroom from "../../theme/masterroom.jpg";
import exterior from "../../theme/exterior.jpg";

class PhotosContainer extends Component {
  componentDidMount() {
    this.props.mount("photos");
  }
  render() {
    const images = [
      { image: livingroom, alt: "image 1", label: "Living Room", name: "name" },
      { image: bathroom, alt: "image 2", label: "Bathroom", name: "name" },
      { image: kitchen, alt: "image 3", label: "kitchen", name: "name" },
      {
        image: masterroom,
        alt: "image 4",
        label: "Master Bedroom",
        name: "name"
      },
      { image: exterior, alt: "image 5", label: "Exterior", name: "name" }
    ];
    return (
      <SectionWrapper id="photos">
        <Largegallery widthNumber={this.props.widthNumber} images={images} />
      </SectionWrapper>
    );
  }
}

export default PhotosContainer;
