import React, { Component } from 'react';
import {
  Header,
  MenuWrapp,
  Menu,
  MenuItem,
  FullMenuWrap,
  FullMenu,
} from './index.styled';

class HeaderComponent extends Component {
  render() {
    const scrollTo = section => {
      const top = section.top;
      window.scroll({ top: top, let: 0, behavior: 'smooth' });
    };
    const allSections = this.props.sections;
    const menuItems = Object.keys(allSections).map((key, index) => {
      if (key === 'video') return false;
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
    const menuItemsFull = Object.keys(allSections).map((key, index) => {
      if (key === 'video')
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
        <MenuWrapp>
          <Menu>
            {menuItemsFull}

            {/* <MenuItem
              onClick={() => this.props.openVideo(true)}
              className=""
              percentage={0}
            >
              Video
            </MenuItem> */}
          </Menu>
        </MenuWrapp>
        <FullMenuWrap isFullVisible={this.props.isFullVisible}>
          <FullMenu>
            {menuItemsFull}
            {/* <MenuItem
              onClick={() => this.props.openVideo(true)}
              className=""
              percentage={0}
            >
              Video
            </MenuItem> */}
          </FullMenu>
        </FullMenuWrap>
      </Header>
    );
  }
}

export default HeaderComponent;
