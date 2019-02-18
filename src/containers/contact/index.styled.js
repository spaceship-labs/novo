import styled from "styled-components";
import { Title, SubTitle, TitleFooter } from "../../theme/App.styled";

const Section = styled.section`
  background-color: ${props => props.theme.Blue};
  color: white;
  text-align: center;
  padding: 80px 25px 60px;
`;

const ContactTitle = styled(Title)`
  color: ${props => props.theme.GoldCommon};
`;
const ContactSubTitle = styled(SubTitle)`
  color: white;
`;
const ContactTitleFooter = styled(TitleFooter)`
  color: white;
`;

const Message = styled.p`
  position: absolute;
  left: 0;
  font-size: 12px;
  width: 100%;
  text-align: center;
  bottom: 0;
  color: ${props => props.theme.Gold};
`;

const Form = styled.form`
  text-align: left;
  display: flex;
  margin: 0 auto;
  max-width: 460px;
  margin-top: 30px;
  position: relative;
  ${props => props.theme.largeBreakPoint} {
    max-width: 600px;
  }
  p {
    margin: 0;
    margin-bottom: 10px;
  }
  label {
    color: ${props => props.theme.Gray};
    text-transform: uppercase;
    font-size: ${props => props.theme.textSmall};
    display: inline-block;
    margin-bottom: 4px;
    font-weight: bold;
    letter-spacing: 1.4px;
    font-family: ${props => props.theme.Assistant};
    ${props => props.theme.largeBreakPoint} {
      font-size: ${props => props.theme.textSmall2x};
    }
  }
  input {
    border: 0 none;
    outline: 0 none;
    width: 100%;
    box-sizing: border-box;
    padding: 8px 10px;
  }
  textarea {
    width: 100%;
    box-sizing: border-box;
    padding: 9px 10px;
  }
  ${props => props.theme.mediumBreakPoint} {
    flex-direction: column;
  }
`;

const Column = styled.div`
  padding: 0 11px;
  flex: 0 1 50%;
`;

const Button = styled.button`
  border: 1px solid ${props => props.theme.GoldCommon};
  color: ${props => props.theme.GoldCommon};
  background-color: transparent;
  text-align: center;
  width: 100%;
  font-size: ${props => props.theme.textSmall};
  letter-spacing: 1.4px;
  display: block;
  padding: 10px;
  box-sizing: border-box;
  margin: 28px 0;
  text-transform: uppercase;
  font-family: ${props => props.theme.Assistant};
  ${props => props.theme.largeBreakPoint} {
    font-size: ${props => props.theme.textSmall2x};
  }
`;

export {
  Section,
  ContactTitle,
  ContactSubTitle,
  ContactTitleFooter,
  Form,
  Column,
  Button,
  Message
};
