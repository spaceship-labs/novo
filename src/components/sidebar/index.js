import React, { Component } from "react";
import {
  SidebarWrapper,
  SidebarContent,
  SidebarSection,
  SidebarMenuWrapp,
  SideMenu,
  LogoSidebar
} from "./index.styled";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { menu: false };
  }
  toggleMenu() {
    this.setState({ menu: !this.state.menu });
  }
  render() {
    const scrollTo = section => {
      const top = section.top;
      window.scroll({ top: top, let: 0, behavior: "smooth" });
    };
    const Sections = {
      video: "Welcome",
      home: "Welcome",
      photos: "Photos",
      amenities: "Amenities",
      location: "Location",
      about: "About Novo",
      contact: "Contact us"
    };
    const getText = id => {
      return Sections[id] || "Welcome";
    };
    const section = Object.keys(this.props.sections).reduce((result, key) => {
      const item = this.props.sections[key];
      if (
        this.props.scroll > item.top &&
        this.props.scroll < this.props.scroll + item.height
      )
        result = getText(key);
      return result;
    }, "Welcome");
    const menuItems = Object.keys(this.props.sections).map((key, index) => {
      if (key === "video") return false;
      const section = this.props.sections[key];
      return (
        <li key={index}>
          <a href="#" onClick={e => scrollTo(section)}>
            {section.section.title}
          </a>
        </li>
      );
    });
    return (
      <SidebarWrapper className={this.state.menu ? "open" : ""}>
        <SideMenu
          onClick={() => this.toggleMenu()}
          className={this.state.menu ? "open" : ""}
        >
          <i className="icon-menu" />
        </SideMenu>
        <SidebarContent className={this.state.menu ? "open" : ""}>
          <SidebarMenuWrapp className={this.state.menu ? "open" : ""}>
            <ul>{menuItems}</ul>
            <p>
              <a href="mailto:info@borealph2.com">info@borealph2.com</a>
            </p>
            <p>
              <a href="tel:55+ (0448) 998120">55+ (0448) 998120</a>
            </p>
            <LogoSidebar>
              <span>Novo Cancún</span>
              Boreal 209
            </LogoSidebar>
          </SidebarMenuWrapp>
          <SidebarSection>
            <p>{section}</p>
            <i className="icon-arrow" />
          </SidebarSection>
        </SidebarContent>
      </SidebarWrapper>
    );
  }
}

export default Sidebar;
