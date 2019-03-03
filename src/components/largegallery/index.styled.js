import styled from "styled-components";

const MenuItem = styled.a`
  flex: 1 0 auto;
  padding: 5px 25px;
  font-family: ${props => props.theme.Assistant};
  font-size: ${props => props.theme.textSmall};
  letter-spacing: 1.4px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  color: ${props => props.theme.Gray};
  cursor: pointer;
  box-sizing: border-box;
  &.active,
  &:hover {
    color: ${props => props.theme.Black};
  }
  ${props => props.theme.largeBreakPoint} {
    font-size: ${props => props.theme.textSmall2x};
  }
`;

const Arrow = styled(MenuItem)`
  top: -7px;
  font-size: 13px;
  padding: 10px;
  background: white;
  z-index: 2;
  display: block;
  position: absolute;
  transition: all 0.5s;
  ${props => props.theme.largeBreakPoint} {
    top: -4px;
  }
`;

const ArrowLeft = styled(Arrow)`
  left: -10px;
`;

const ArrowRight = styled(Arrow)`
  right: -10px;
`;

const GalleryWrapp = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  ${ArrowLeft} {
    left: 10px;
    background-color: ${props => props.theme.Blue};
    opacity: 0.5;
    border-radius: 50%;
    width: 37px;
    top: calc(50% - 18px);
    &:hover {
      color: white;
      opacity: 1;
    }
  }
  ${ArrowRight} {
    right: 10px;
    background-color: ${props => props.theme.Blue};
    opacity: 0.5;
    border-radius: 50%;
    width: 37px;
    top: calc(50% - 18px);
    &:hover {
      color: white;
      opacity: 1;
    }
  }
  ${props => props.theme.mediumBreakPoint} {
    max-height: 600px;
  }
  ${props => props.theme.smallBreakPoint} {
    max-height: 300px;
  }
`;

const GalleryReel = styled.div`
  position: relative;
  height: 100%;
  width: ${props => props.width}px;
  display: flex;
  align-items: center;
  ${props => props.theme.mediumBreakPoint} {
    max-height: 600px;
  }
  ${props => props.theme.smallBreakPoint} {
    max-height: 300px;
  }
`;

const GalleryItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center
  flex: 0 1 ${props => props.width}px;
  height: 100%;
  max-height: 100%;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  padding: 0;
  text-align: center;
  span {
    position: relative;
    display: inline-block;
    margin: 0 auto;
    max-width: 100%;
    p {
      position: absolute;
      bottom: 5px;
      right: 5px;
      background-color: rgba(255, 255, 255, 0.7);
      padding: 5px 15px;
      margin: 0;
      color: ${props => props.theme.Black};
      font-family: ${props => props.theme.Assistant};
    }
  }
  img {
    display: block;
  }
  p {
    font-size: ${props => props.theme.MenuItemSmall};
    text-transform: uppercase;
    color: ${props => props.theme.Gray};
    font-weight: bold;
    ${props => props.theme.largeBreakPoint} {
      font-size: ${props => props.theme.MenuItemSmall2x};
    }
  }
  ${props => props.theme.mediumBreakPoint} {
    span {
      max-height: 600px;
    }
    img {
      max-height: 600px;
      width: ${props => (props.vertical ? "auto" : "100%")};
      height: ${props =>
        props.vertical ? "100%!important" : "auto !important"};
    }
  }
  ${props => props.theme.smallBreakPoint} {
    span {
      max-height: 300px;
    }
    img{
      max-height: 300px;
    }
  }
`;

const GalleryItemImage = styled.div`
  flex: 0 1 auto;
  overflow: hidden;
  max-height: 100%;
`;

const Menu = styled.div`
  position: relative;
  z-index: 0;
  max-width: 98%;
  width: 250px;
  width: 820px;
  width: 980px;
  margin: 0 auto 25px;
  ${props => props.theme.largeBreakPoint} {
    width: 1145px;
  }
`;

const MenuScreen = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-x: scroll;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const MenuReel = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  width: 500px;
  width: 100%;
  width: -webkit-fit-content;
  width: fit-content;
  @media only screen and (max-width: 750px) {
    box-sizing: border-box;
    width: 600%;
    ${MenuItem} {
      flex: 1 0 16.66%;
    }
  }
`;

const GalleryScreen = styled.div`
  width: 100%;
  overflow: hidden;
  overflow-x: scroll;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    display: none;
  }
  &.full-screen {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    ${GalleryReel},${GalleryItem}{
      height: 100%;
    }
  }
  ${props => props.theme.smallBreakPoint} {
    max-height: 300px;
  }
`;

/*const GalleryCircleWrap = styled`
  position: absolute;
  top: ${props => props.top}px;
`;*/

export {
  GalleryWrapp,
  GalleryScreen,
  GalleryReel,
  GalleryItem,
  GalleryItemImage,
  Menu,
  MenuScreen,
  MenuReel,
  MenuItem,
  ArrowLeft,
  ArrowRight
};
