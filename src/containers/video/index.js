import React, { Component } from "react";
import { VideoWrapper, Logo, VideoTitle } from "./index.styled";

import HeaderComponent from "../../components/header/index";

class VideoContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.mount("video");
  }
  render() {
    return (
      <section id="video">
        <VideoWrapper>
          <Logo className="wow fadeInUp">
            <h1>Novo Cancún</h1>
            <h2>Boreal PH2</h2>
          </Logo>
          <VideoTitle className="wow fadeInUp">
            <strong>A fascinating</strong> <br /> world of luxury and style…
          </VideoTitle>
          <HeaderComponent
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
