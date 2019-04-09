import React, { Component } from "react";
import {
  Columns,
  Column,
  Logo,
  Footer,
  Box,
  MessageText
} from "./index.styled";

class footerContainer extends Component {
  render() {
    const c1 =
      this.props.lang === "es"
        ? "Para más información contacte con Tatiana Martinez Castillo"
        : "For any information please contact Tatiana Martinez Castillo";
    return (
      <Footer id="footer">
        <Box>
          <Columns>
            <Column>
              <p>
                <MessageText>{c1}</MessageText>
                <a href="mailto:info@puertocancunpenthouse.com">
                  info@puertocancunpenthouse.com
                </a>
              </p>
              <p>
                <a href="tel:+52 1 55 6203 9056">
                  +52 1 55 6203 9056 <i className="icon-whatsapp" />
                </a>
              </p>
              <br />
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
