import styled from "styled-components";
import img2 from "../../theme/portada.jpg";

const VideoWrapper = styled.div`
  min-height: 300px;
  height: ${props => props.theme.height};
  background-color: ${props => props.theme.Blue};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 25px;
  box-sizing: border-box;
  background-image: url(${img2});
  background-size: cover;
  position: relative;
  & * {
    position: relative;
    z-index: 1;
  }
  &:after {
    content: "";
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${props => props.theme.Blue};
    opacity: 0.5;
  }
  ${props => props.theme.mediumBreakPoint} {
    justify-content: center;
  }
`;

const VideoTitle = styled.h2`
  font-size: ${props => props.theme.videoTitle};
  font-weight: normal;
  font-style: normal;
  align-self: flex-start;
  color: white;
  strong {
    font-style: italic;
  }
  ${props => props.theme.largeBreakPoint} {
    font-size: ${props => props.theme.videoTitle2x};
  }
  ${props => props.theme.smallBreakPoint} {
    font-size: ${props => props.theme.videoTitleXs};
  }
`;

const Logo = styled.div`
    width: 200px;
    background-color: ${props => props.theme.Blue}
    padding: 25px;
    text-align: center;
    h1{
        color: ${props => props.theme.Gold}
        font-size: ${props => props.theme.textLogoSmall};
        font-style: italic;
        font-weight: normal;
        margin: 0;
    }
    h2{
        color: ${props => props.theme.Gold}
        font-size: ${props => props.theme.textLogoBig};
        font-weight: normal;
        line-height: 1.06;
        margin: 0;
    }
    ${props => props.theme.largeBreakPoint}{
        width: 250px;
        h1{
            font-size: ${props => props.theme.textLogoSmall2x};
        }
        h2{
            font-size: ${props => props.theme.textLogoBig2x};
        }
    }
    ${props => props.theme.mediumBreakPoint}{
      background-color: white;
      width: 100%;
      top: 0;
      padding: 10px;
      position: absolute;
      box-sizing: border-box;
      position: fixed;
      z-index: 888;
      h1,h2{
        color: ${props => props.theme.Black};
      }
    }
`;

export { VideoWrapper, VideoTitle, Logo };
