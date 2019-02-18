import React, { Component } from "react";
import {
  GalleryWrapp,
  GalleryScreen,
  GalleryReel,
  GalleryItem,
  GalleryItemImage,
  Menu,
  MenuScreen,
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
      itemWidth: 0,
      images: 0
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
    let images = 0;
    this.props.images.map((section, i) => {
      images += section.images.length;
    });
    this.setState({
      reel: reel,
      itemWidth: itemWidth,
      images: images
    });
  }
  moveMenu(direction) {
    let current = this.state.current + direction;
    if (current < 0) current = this.state.images.length - 1;
    if (current >= this.state.images.length) current = 0;

    const start = this.props.images.reduce((val, item) => {
      val =
        current >= item.start && current < item.start + item.images.length
          ? item.start + item.images.length
          : val;
      return val;
    }, 0);

    this.setState({ current: start });
    this.scrollTo(start);
  }
  scrollTo = index => {
    if (index < 0) index = this.state.images - 1;
    if (index >= this.state.images) index = 0;
    const sidebar = this.props.widthNumber < 750 ? 0 : Theme.SidebarWidth;
    const itemWidth = this.props.widthNumber - sidebar - 0;
    const reel = this.state.reel;
    const left = itemWidth * index;
    console.log("scroll", left, reel);
    reel.scroll({ top: 0, left: left, behavior: "smooth" });
    if (this.props.widthNumber <= 920) {
      const menu = document.getElementById("largeMenuReel");
      const menuIndex = this.props.images.reduce((val, section, menuIndex) => {
        val =
          index >= section.start &&
          index < section.start + section.images.length
            ? menuIndex
            : val;
        return val;
      }, 0);
      const leftMenu = menu.offsetWidth * menuIndex;
      menu.scroll({ top: 0, left: leftMenu, behavior: "smooth" });
    }
    this.setState({ current: index });
  };
  render() {
    const sidebar = this.props.widthNumber < 750 ? 0 : Theme.SidebarWidth;
    const itemWidth = this.props.widthNumber - sidebar - 0;
    let items = 0;
    const images = this.props.images.map((section, i) => {
      items += section.images.length;
      return section.images.map((img, index) => {
        return (
          <GalleryItem
            className={img.vertical}
            key={section.start + index}
            width={itemWidth}
            vertical={img.vertical}
          >
            <GalleryItemImage>
              <img src={img.img} alt={img.label} />
            </GalleryItemImage>
            <p>{img.label}</p>
          </GalleryItem>
        );
      });
    });
    const reelW = (this.props.widthNumber - sidebar) * items;
    const menuItems = this.props.images.map((section, index) => {
      return (
        <MenuItem
          className={
            this.state.current >= section.start &&
            this.state.current < section.start + section.images.length
              ? "active"
              : ""
          }
          key={index}
          onClick={() => this.scrollTo(section.start)}
        >
          {section.section}
        </MenuItem>
      );
    });
    return (
      <React.Fragment>
        <Menu>
          <ArrowLeft onClick={() => this.moveMenu(-1)}>
            <i className="icon-left" />
          </ArrowLeft>
          <ArrowRight onClick={() => this.moveMenu(1)}>
            <i className="icon-right" />
          </ArrowRight>
          <MenuScreen id="largeMenuReel">
            <MenuReel>{menuItems}</MenuReel>
          </MenuScreen>
        </Menu>
        <GalleryWrapp>
          <ArrowLeft onClick={() => this.scrollTo(this.state.current - 1)}>
            <i className="icon-left" />
          </ArrowLeft>
          <ArrowRight onClick={() => this.scrollTo(this.state.current + 1)}>
            <i className="icon-right" />
          </ArrowRight>
          <GalleryScreen id="largeGalReel">
            <GalleryReel width={reelW}>{images}</GalleryReel>
          </GalleryScreen>
        </GalleryWrapp>
      </React.Fragment>
    );
  }
}

export default Largegallery;
