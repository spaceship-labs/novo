import React, { Component } from "react";
import smoothscroll from "smoothscroll-polyfill";
import WOW from "wowjs";
import { Route, Redirect, Switch } from "react-router-dom";

import { Theme } from "./theme/theme";
import { ThemeProvider } from "styled-components";
import { Wrapper } from "./theme/App.styled";

import En from "./containers/en";
import Es from "./containers/es";

var wow;
class App extends Component {
  constructor(props) {
    super(props);
    smoothscroll.polyfill();
    const theme = {
      ...Theme
    };
    this.state = {
      theme: theme
    };
  }

  componentDidMount() {
    wow = new WOW.WOW({ live: false });
    wow.init();
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <Wrapper id="wrapper">
          <Switch>
            <Route exact path="/" component={En} />
            <Route exact path="/es" component={Es} />
            <Redirect to="/" />
          </Switch>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;
