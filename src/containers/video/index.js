import React, { Component } from 'react';
import {
  VideoWrapper,
  Logo,
  VideoTitle
} from "./index.styled";

import HeaderComponent from "../../components/header/index";

class VideoContainer extends Component {
  constructor( props ){
    super( props );
  }
  componentDidMount(){
    this.props.mount('video');
  }
  render() {
    return (
      <section id="video">
        <VideoWrapper>
          <Logo>
            <h1>Novo Cancún</h1>
            <h2>Boreal PH2</h2>
          </Logo>
          <VideoTitle>
            <strong>Lorem ipsum</strong> <br /> amet, consectetur.
          </VideoTitle>
          <HeaderComponent 
            scroll={this.props.scroll}
            sections={this.props.sections} 
            isFullVisible={this.props.isMenuVisible} />
        </VideoWrapper>
      </section>
    );
  }
}

export default VideoContainer;