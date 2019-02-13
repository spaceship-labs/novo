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
    const reel = document.getElementById("largeGalReel");
    const sidebar =
      this.props.widthNumber >= 1400
        ? Theme.SidebarWidth2x
        : this.props.widthNumber < 750
        ? 0
        : Theme.SidebarWidth;
    const itemWidth = this.props.widthNumber - sidebar;
    this.setState({
      reel: reel,
      itemWidth: itemWidth
    });
  }
  moveMenu(direction) {
    let current = this.state.current + direction;
    if (current < 0) current = this.props.images.length - 1;
    if (current >= this.props.images.length) current = 0;

    this.setState({ current: current });
    this.scrollTo(current);
    console.log("MOVE", current, this.props.images.length);
  }
  scrollTo = index => {
    const sidebar =
      this.props.widthNumber >= 1400
        ? Theme.SidebarWidth2x
        : this.props.widthNumber < 750
        ? 0
        : Theme.SidebarWidth;
    const itemWidth = this.props.widthNumber - sidebar;
    const reel = this.state.reel;
    const left = itemWidth * index;
    console.log("scroll", left, reel);
    reel.scroll({ top: 0, left: left, behavior: "smooth" });
    if (this.props.widthNumber <= 500) {
      const menu = document.getElementById("largeMenuReel");
      const leftMenu = menu.offsetWidth;
      menu.scroll({ top: 0, left: leftMenu, behavior: "smooth" });
    }
    this.setState({ current: index });
  };
  render() {
    const sidebar =
      this.props.widthNumber >= 1400
        ? Theme.SidebarWidth2x
        : this.props.widthNumber < 750
        ? 0
        : Theme.SidebarWidth;
    const reelW = (this.props.widthNumber - sidebar) * this.props.images.length;
    const itemWidth = this.props.widthNumber - sidebar;
    const images = this.props.images.map((img, index) => {
      return (
        <GalleryItem key={index} width={itemWidth}>
          <GalleryItemImage>
            <img src={img.image} alt={img.alt} />
          </GalleryItemImage>
          <p>{img.name}</p>
        </GalleryItem>
      );
    });
    const menuItems = this.props.images.map((img, index) => {
      return (
        <MenuItem
          className={index === this.state.current ? "active" : ""}
          key={index}
          onClick={() => this.scrollTo(index)}
        >
          {img.label}
        </MenuItem>
      );
    });
    return (
      <React.Fragment>
        <Menu id="largeMenuReel">
          <ArrowLeft onClick={() => this.moveMenu(-1)}>
            <i className="icon-left" />
          </ArrowLeft>
          <ArrowRight onClick={() => this.moveMenu(1)}>
            <i className="icon-right" />
          </ArrowRight>
          <MenuReel>{menuItems}</MenuReel>
        </Menu>
        <GalleryWrapp id="largeGalReel">
          <GalleryReel width={reelW}>{images}</GalleryReel>
        </GalleryWrapp>
      </React.Fragment>
    );
  }
}

export default Largegallery;
