import styled from "styled-components";

const Footer = styled.footer`
  background-color: ${props => props.theme.Blue};
  padding-bottom: 55px;
  position: relative;
  z-index: 2;
`;

const Box = styled.div`
  box-sizing: border-box;
  width: 90%;
  padding: 50px 20px;
  margin: 0 auto;
  background-color: ${props => props.theme.Box};
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 1px;
    height: 110px;
    background-color: ${props => props.theme.Gold};
    top: -55px;
    left: 50%;
  }
`;

const Columns = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 660px;
  color: ${props => props.theme.Black};
  ${props => props.theme.largeBreakPoint} {
    max-width: 600px;
  }
  p {
    font-style: italic;
    margin: 0;
    font-size: 16.5px;
    a {
      color: ${props => props.theme.Black};
      text-decoration: none;
    }
    ${props => props.theme.largeBreakPoint} {
      font-size: 24.5px;
    }
  }
  ${props => props.theme.mediumBreakPoint} {
    p {
      font-size: ${props => props.theme.textSize};
    }
  }
  ${props => props.theme.smallBreakPoint} {
    flex-direction: column;
  }
`;

const Column = styled.div`
  padding: 0 11px;
  flex: 0 1 50%;
`;

const Logo = styled.h2`
  font-size: ${props => props.theme.textLogoBig};
  font-weight: normal;
  line-height: 1.06;
  letter-spacing: normal;
  text-transform: uppercase;
  span {
    text-transform: capitalize;
    line-height: normal;
    display: inline-block;
    width: 100%;
    font-size: ${props => props.theme.textLogoSmall};
    font-style: italic;
  }
  ${props => props.theme.largeBreakPoint} {
    font-size: ${props => props.theme.textLogoBig2x};
    span {
      font-size: ${props => props.theme.textLogoSmall2x};
    }
  }
`;
const Contact = styled.div`
  text-align: left;
  box-sizing: border-box;
  width: 90%;
  position: relative;
`;

const MessageText = styled.span`
  display: block;
  font-size: 21px;
  font-weight: lighter;
  font-style: italic;
  line-height: normal;
`;

export { Footer, Box, Columns, Column, Logo, Contact, MessageText };
