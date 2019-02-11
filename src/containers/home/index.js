import React, { Component } from 'react';
import {
  ImageWithBox,
  Box,
} from "./index.styled";
import { Paragraph } from "../../theme/App.styled";

import WelcomeComponent from "./welcome";
import TorreComponent from "./torre";

class HomeContainer extends Component {
  constructor( props ){
    super( props );
    this.props = props;
  }
  componentDidMount(){
    this.props.mount('home');
  }
  render() {
    return (
      <section id="home">
        <WelcomeComponent />
        <TorreComponent />
        <ImageWithBox>
          <Box>
            <h3>Lorem ipsum: dolor sit amet</h3>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</Paragraph>
          </Box>
        </ImageWithBox>
      </section>
    );
  }
}

export default HomeContainer;