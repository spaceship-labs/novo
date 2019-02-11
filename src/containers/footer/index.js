import React, { Component } from 'react';
import {
  Columns,
  Column,
  Logo,
  Footer,
  Box,
} from "./index.styled";

class footerContainer extends Component {
  render() {
    return (
      <Footer id="footer">
        <Box>
          <Columns>
            <Column>
              <p><a href='mailto:info@borealph2.com'>info@borealph2.com</a></p>
              <p><a href="tel:55+ (0448) 998120">55+ (0448) 998120</a></p>
            </Column>
            <Column>
              <Logo>
                <span>Novo Cancún</span>
                Boreal 209
              </Logo>
            </Column>
          </Columns>
        </Box>
      </Footer>
    );
  }
}

export default footerContainer;
