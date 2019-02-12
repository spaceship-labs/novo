import React, { Component } from "react";
import {
  Header,
  MenuWrapp,
  Menu,
  MenuItem,
  FullMenuWrap,
  FullMenu
} from "./index.styled";

class HeaderComponent extends Component {
  render() {
    const scrollTo = link => {
      if (!link) return false;
      const element = document.getElementById(link);
      console.log("Scroll", link, element);
      element.scrollIntoView({ behavior: "smooth" });
    };
    const sections = {
      home: { link: "welcome", title: "Welcome", section: "home" },
      photos: { link: "photos", title: "Photos", section: "photos" },
      amenities: {
        link: "amenities",
        title: "Amenities",
        section: "amenities"
      },
      location: { link: "location", title: "Location", section: "location" },
      about: { link: "about", title: "About novo Cancún", section: "about" },
      contact: { link: "contact", title: "Contact us", section: "contact" }
    };
    const allSections = this.props.sections;
    const menuItems = Object.keys(allSections).map((key, index) => {
      if (key === "video") return false;
      const section = allSections[key];
      const item = sections[key];
      let percentage = 0;
      if (this.props.scroll > section.top + section.height) {
        percentage = 100;
      } else if (this.props.scroll < section.top) {
        percentage = 0;
      } else {
        const S = this.props.scroll - section.top;
        percentage = (S * 100) / section.height;
      }
      return (
        <MenuItem
          key={index}
          onClick={e => scrollTo(item.link)}
          className={percentage}
          percentage={percentage}
        >
          {item.title}
        </MenuItem>
      );
    });
    return (
      <Header>
        <div />
        <MenuWrapp>
          <Menu>{menuItems}</Menu>
        </MenuWrapp>
        <FullMenuWrap isFullVisible={this.props.isFullVisible}>
          <FullMenu>{menuItems}</FullMenu>
        </FullMenuWrap>
      </Header>
    );
  }
}

export default HeaderComponent;
