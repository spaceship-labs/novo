import styled from "styled-components";
import { Paragraph } from "../../theme/App.styled";

const Section = styled.section`
  text-align: center;
  padding-top: 70px;
  padding-bottom: 50px;
  color: ${props => props.theme.Black};
  ${Paragraph} {
    width: 95%;
    max-width: 750px;
    margin: 20px auto;
    ${props => props.theme.largeBreakPoint} {
      max-width: 950px;
    }
  }
  iframe {
    display: block;
    width: 100%;
    height: 300px;
    margin-top: 40px;
    ${props => props.theme.largeBreakPoint} {
      height: 550px;
    }
  }
`;

const Title = styled.h2`
  font-size: ${props => props.theme.textTitleGroup};
  font-weight: normal;
  letter-spacing: -0.4px;
  color: ${props => props.theme.Black};
  margin: 0;
  font-style: italic;
  ${props => props.theme.largeBreakPoint} {
    font-size: ${props => props.theme.textTitleGroup2x};
  }
`;

const Division = styled.hr`
  width: 110px;
  margin: 30px auto;
`;

const Subtitle = styled.h3`
  font-size: ${props => props.theme.TextSmallSubtitle};
  i {
    color: ${props => props.theme.Gold};
    font-weight: normal;
  }
  ${props => props.theme.largeBreakPoint} {
    font-size: ${props => props.theme.TextSmallSubtitle2x};
  }
`;

export { Title, Division, Subtitle, Section };
