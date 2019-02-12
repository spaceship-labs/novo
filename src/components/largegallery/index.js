import React, { Component } from "react";
import {
  GalleryWrapp,
  GalleryReel,
  GalleryItem,
  GalleryItemImage,
  Menu,
  MenuReel,
  MenuItem,
  ArrowLeft,
  ArrowRight
} from "./index.styled";
import { Theme } from "../../theme/theme";

class Largegallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      moving: false,
      reel: false,
      menuReel: false,
      reelW: 0,
      itemWidth: 0
    };
  }
  componentDidMount() {
    const sidebar =
      window.innerWidth >= 1400 ? Theme.SidebarWidth2x : Theme.SidebarWidth;
    const reelW = (window.innerWidth - sidebar) * this.props.images.length;
    const itemWidth = window.innerWidth - sidebar;
    this.setState({
      reel: document.getElementById("largeGalReel"),
      menuReel: document.getElementById("largeMenuReel"),
      reelW: reelW,
      itemWidth: itemWidth
    });
  }
  moveMenu(direction) {
    console.log("MOVE");
  }
  scrollTo = (img, index) => {
    const reel = this.state.reel;
    const left = this.state.itemWidth * index;
    console.log("scroll", left, reel);
    reel.scroll({ top: 0, left: left, behavior: "smooth" });
  };
  render() {
    const images = this.props.images.map((img, index) => {
      return (
        <GalleryItem key={index} width={this.state.itemWidth}>
          <GalleryItemImage>
            <img src={img.image} alt={img.alt} />
          </GalleryItemImage>
          <p>{img.name}</p>
        </GalleryItem>
      );
    });
    const menuItems = this.props.images.map((img, index) => {
      return (
        <MenuItem key={index} onClick={() => this.scrollTo(img, index)}>
          {img.label}
        </MenuItem>
      );
    });
    return (
      <React.Fragment>
        <Menu>
          <ArrowLeft onClick={() => this.scrollTo(-1)}> &lt; </ArrowLeft>
          <ArrowRight onClick={() => this.scrollTo(1)}> > </ArrowRight>
          <MenuReel id="largeMenuReel">{menuItems}</MenuReel>
        </Menu>
        <GalleryWrapp id="largeGalReel">
          <GalleryReel width={this.state.reelW}>{images}</GalleryReel>
        </GalleryWrapp>
      </React.Fragment>
    );
  }
}

export default Largegallery;
