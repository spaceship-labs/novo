import React, { Component } from "react";
import { Columns, Column, Logo, Footer, Box } from "./index.styled";

class footerContainer extends Component {
  render() {
    return (
      <Footer id="footer">
        <Box>
          <Columns>
            <Column>
              <p>
                <a href="mailto:info@puertocancunpenthouse.com">info@puertocancunpenthouse.com</a>
              </p>
              <p>
                <a href="tel:+52 1 55 6203 9056">+52 1 55 6203 9056</a>
              </p>
            </Column>
            <Column>
              <Logo>
                <span>Novo Cancún</span>
                Boreal ph2
              </Logo>
            </Column>
          </Columns>
        </Box>
      </Footer>
    );
  }
}

export default footerContainer;
