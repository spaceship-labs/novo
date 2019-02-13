import styled from "styled-components";
import { Logo } from "../../containers/footer/index.styled";

const speed = "0.5s";
const curve = "transition-timing-function: ease;";

const SidebarWrapper = styled.div`
  width: ${props => props.theme.SidebarWidth}px;
  color: ${props => props.theme.Gold};
  position: fixed;
  height: 100%;
  z-index: 999;
  display: flex;
  flex-direction: column;
  transition: width ${speed};
  ${curve}
  ${props => props.theme.largeBreakPoint} {
    width: ${props => props.theme.SidebarWidth2x}px;
  }
  &.open {
    width: 350px;
  }
`;

const SidebarSection = styled.div`
  position: absolute;
  width: 20px;
  top: 50%;
  right: 22px;
  text-align: center;
  transition: all ${speed};
  p {
    transform: rotate(-90deg);
    transform-origin: left top 0;
    font-family: ${props => props.theme.Assistant};
    text-transform: uppercase;
    font-size: 14px;
    white-space: nowrap;
  }
  i {
    font-size: 40px;
    position: relative;
    left: -11px;
  }
  ${props => props.theme.largeBreakPoint} {
    right: 35px;
    p {
      font-size: 20px;
    }
    i {
      font-size: 50px;
    }
  }
  ${props => props.theme.mediumBreakPoint} {
    display: none;
  }
`;

const SidebarContent = styled.div`
  flex: 1 0 auto;
  background-color: ${props => props.theme.Sidebar};
  width: ${props => props.theme.SidebarWidth}px;
  transition: width ${speed};
  ${curve}
  ${props => props.theme.largeBreakPoint} {
    width: ${props => props.theme.SidebarWidth2x}px;
  }
  ${props => props.theme.mediumBreakPoint} {
    width: 0px;
  }
  &.open {
    width: 350px;
    ${SidebarSection} {
      right: -10px;
      opacity: 0;
    }
  }
`;

const SidebarMenuWrapp = styled.div`
  width: 0px;
  overflow: hidden;
  transition: all ${speed};
  ${curve}
  position: relative;
  left: -350px;
  ul {
    list-style: none;
    padding: 0 30px;
    li a {
      width: 350px;
      color: ${props => props.theme.Black};
      font-size: ${props => props.theme.SidebarItems}px;
      font-family: ${props => props.theme.Assistant};
      font-weight: 200;
      text-decoration: none;
      line-height: 1.51;
      letter-spacing: -0.4px;
      display: block;
      ${props => props.theme.mediumBreakPoint} {
        font-size: ${props => props.theme.SidebarItemsSmall}px;
      }
    }
  }
  p {
    padding: 0 30px;
    font-size: 16.5px;
    font-weight: normal;
    font-style: italic;
    font-stretch: normal;
    line-height: 1.44;
    margin: 0;
    a {
      color: ${props => props.theme.Black};
      text-decoration: none;
    }
  }
  &.open {
    width: 350px;
    left: 0;
  }
  ${props => props.theme.mediumBreakPoint} {
    p {
      font-size: ${props => props.theme.textSize};
    }
  }
`;

const SideMenu = styled.div`
  text-align: left;
  padding: 20px 30px;
  cursor: pointer;
  height: 62px;
  background-color: ${props => props.theme.Sidebar};
  box-sizing: border-box;
  i {
    font-size: 20px;
  }
`;

const LogoSidebar = styled(Logo)`
  padding: 0 30px;
  color: ${props => props.theme.Black};
  text-align: center;
  width: 120px;
`;

export {
  SidebarWrapper,
  SidebarContent,
  SidebarMenuWrapp,
  SideMenu,
  SidebarSection,
  LogoSidebar
};
