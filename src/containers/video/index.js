import React, { Component } from "react";
import { VideoWrapper, Logo, VideoTitle } from "./index.styled";

import HeaderComponent from "../../components/header/index";

class VideoContainer extends Component {
  componentDidMount() {
    this.props.mount("video");
  }
  render() {
    const text1 =
      this.props.lang === "es"
        ? "Un mundo extraordinario"
        : "A fascinating world";
    const text2 =
      this.props.lang === "es"
        ? "donde el lujo y estilo convergen..."
        : "of luxury and style…";
    const h = { height: `${this.props.height}px` };
    return (
      <section id="video">
        <VideoWrapper style={{ height: `${this.props.height}px` }}>
          <Logo>
            <h1>Novo Cancún</h1>
            <h2>Boreal PH2</h2>
          </Logo>
          <VideoTitle className="wow fadeInUp">
            <span>{text1}</span> <br /> {text2}
          </VideoTitle>
          <HeaderComponent
            openVideo={this.props.openVideo}
            scroll={this.props.scroll}
            sections={this.props.sections}
            isFullVisible={this.props.isMenuVisible}
          />
        </VideoWrapper>
      </section>
    );
  }
}

export default VideoContainer;
