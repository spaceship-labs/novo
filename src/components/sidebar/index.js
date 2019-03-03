import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  SidebarWrapper,
  SidebarContent,
  SidebarSection,
  SidebarMenuWrapp,
  SideMenu,
  LogoSidebar,
  Lang
} from "./index.styled";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { menu: false };
  }
  toggleMenu() {
    this.setState({ menu: !this.state.menu });
  }
  openVideo = val => {
    this.toggleMenu();
    this.props.openVideo(val);
  };
  render() {
    const scrollTo = section => {
      this.toggleMenu();
      const top = section.top;
      window.scroll({ top: top, let: 0, behavior: "smooth" });
    };
    const Sections = {
      video: this.props.lang === "es" ? "Bienvenido" : "Welcome",
      home: this.props.lang === "es" ? "Bienvenido" : "Welcome",
      photos: this.props.lang === "es" ? "Galerías" : "Gallery",
      amenities: this.props.lang === "es" ? "Amenidades" : "Amenities",
      location: this.props.lang === "es" ? "Ubicación" : "Location",
      about: this.props.lang === "es" ? "Acerca de Novo" : "About Novo",
      contact: this.props.lang === "es" ? "Contacto" : "Contact us"
    };
    const getText = id => {
      return Sections[id] || "Welcome";
    };
    const section = Object.keys(this.props.sections).reduce(
      (result, key) => {
        const item = this.props.sections[key];
        if (
          this.props.scroll > item.top &&
          this.props.scroll < this.props.scroll + item.height
        )
          result = getText(key);
        return result;
      },
      this.props.lang === "es" ? "Bienvenido" : "Welcome"
    );
    const menuItems = Object.keys(this.props.sections).map((key, index) => {
      if (key === "video") return false;
      const section = this.props.sections[key];
      return (
        <li key={index}>
          <a onClick={e => scrollTo(section)}>{section.section.title}</a>
        </li>
      );
    });
    return (
      <SidebarWrapper className={this.state.menu ? "open" : ""}>
        <SideMenu
          onClick={() => this.toggleMenu()}
          className={this.state.menu ? "open" : ""}
        >
          <i className="" />
        </SideMenu>
        <SidebarContent className={this.state.menu ? "open" : ""}>
          <SidebarMenuWrapp className={this.state.menu ? "open" : ""}>
            <ul>
              {menuItems}
              <li>
                <a onClick={() => this.openVideo(true)}>Video Interior</a>
              </li>
              <li>
                <a onClick={() => this.openVideo(false)}>
                  {this.props.lang === "es" ? "Video de Drone" : "Drone Video"}
                </a>
              </li>
            </ul>
            <Lang>
              <a href="/es">ESP</a> <span>|</span> <a href="/">ENG</a>
            </Lang>
            <p>
              <a href="mailto:info@puertocancunpenthouse.com">
                info@puertocancunpenthouse.com
              </a>
            </p>
            <p>
              <a href="tel:+52 1 55 6203 9056">+52 1 55 6203 9056</a>
            </p>
            <LogoSidebar>
              <span>Novo Cancún</span>
              Boreal ph2
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
