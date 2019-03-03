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
    const text1 =
      this.props.lang === "es"
        ? "Un vistazo hacia este maravilloso hogar"
        : "Take a glance into this marvelous home";
    const text2 =
      this.props.lang === "es"
        ? "Con techos altísimos de 4.2 metros y grandes ventanales que permiten el paso de la luz en cada habitación, donde podrás admirar los mejores amaneceres y atardeceres de Cancún, así como preciosas vistas de las luces citadinas y las aguas del caribe mexicano."
        : "Extraordinary 12 to 14 feet ceilings and grand wall to wall windows allow the passage of light in every room, where you can appreciate the best of Cancun’s sunrises and sunsets, skylines and Caribbean waters.";
    const h = { height: this.props.height + "px" };
    return (
      <section id="home">
        <WelcomeComponent lang={this.props.lang} />
        <TorreComponent
          lang={this.props.lang}
          openContact={this.props.openContact}
          sections={this.props.sections}
        />
        <br />
        <br />
        <br />
        <Rows direction="column">
          <Box className="wow fadeInUp">
            <h3>{text1}</h3>
            <Paragraph>{text2}</Paragraph>
          </Box>
          <ImageWithBox style={h} />
        </Rows>
      </section>
    );
  }
}

export default HomeContainer;
