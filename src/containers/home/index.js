import React, { Component } from "react";
import { Rows, ImageWithBox, Box } from "./index.styled";
import { Paragraph } from "../../theme/App.styled";

import WelcomeComponent from "./welcome";
import TorreComponent from "./torre";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  componentDidMount() {
    this.props.mount("home");
  }
  render() {
    return (
      <section id="home">
        <WelcomeComponent />
        <TorreComponent sections={this.props.sections} />
        <br />
        <br />
        <br />
        <Rows direction="column">
          <Box className="wow fadeInUp">
            <h3>Take a glance into this marvelous home</h3>
            <Paragraph>
              Extraordinary 12 to 14 feet ceilings and grand wall to wall
              windows allow the passage of light in every room, where you can
              appreciate the best of Cancun’s sunrises and sunsets, skylines and
              Caribbean waters.
            </Paragraph>
          </Box>
          <ImageWithBox />
        </Rows>
      </section>
    );
  }
}

export default HomeContainer;
