import React, { Component } from "react";
import Largegallery from "../../components/largegallery/index";
import { SectionWrapper } from "./index.styled";

import img1 from "../../theme/livingroom.jpg";
import img2 from "../../theme/kitchen.png";
import img3 from "../../theme/torre.jpg";
import img4 from "../../theme/torre2.jpg";

class PhotosContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.mount("photos");
  }
  render() {
    const images = [
      { image: img1, alt: "image 1", label: "Living Room", name: "name" },
      { image: img2, alt: "image 2", label: "Bathroom", name: "name" },
      { image: img3, alt: "image 3", label: "kitchen", name: "name" },
      { image: img4, alt: "image 4", label: "Exterior", name: "name" }
    ];
    return (
      <SectionWrapper id="photos">
        <Largegallery images={images} />
      </SectionWrapper>
    );
  }
}

export default PhotosContainer;
