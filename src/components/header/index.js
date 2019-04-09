import React, { Component } from "react";
import {
  Header,
  MenuWrapp,
  Menu,
  MenuItem,
  FullMenuWrap,
  FullMenu,
  Lang
} from "./index.styled";

import esp from "../../theme/images/esp.jpg";
import eng from "../../theme/images/eng.jpg";

class HeaderComponent extends Component {
  render() {
    const scrollTo = section => {
      const top = section.top;
      window.scroll({ top: top, let: 0, behavior: "smooth" });
    };
    const allSections = this.props.sections;
    const menuItemsFull = Object.keys(allSections).map((key, index) => {
      if (key === "video")
        return (
          <MenuItem
            onClick={() => this.props.openVideo(true)}
            className=""
            percentage={this.props.scroll < 3800 ? 0 : 100}
          >
            Video
          </MenuItem>
        );
      const section = allSections[key];
      const item = section.section;
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
          onClick={e => scrollTo(section)}
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
        <Lang isLangVisible={this.props.isLangVisible}>
          <a href="/es">
            <img alt="Español" src={esp} />
            <span>ESP</span>
          </a>
          <a href="/">
            <img alt="English" src={eng} />
            <span>ENG</span>
          </a>
        </Lang>
        <MenuWrapp>
          <Menu>{menuItemsFull}</Menu>
        </MenuWrapp>
        <FullMenuWrap isFullVisible={this.props.isFullVisible}>
          <FullMenu>{menuItemsFull}</FullMenu>
        </FullMenuWrap>
      </Header>
    );
  }
}

export default HeaderComponent;
