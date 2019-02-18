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
  max-height: ${props => props.theme.heightNumber - 120}px;
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
`;

const GalleryScreen = styled.div`
  width: 100%;
  overflow: hidden;
  overflow-x: scroll;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  box-sizing: border-box;
  max-height: ${props => props.theme.heightNumber - 120}px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const GalleryReel = styled.div`
  position: relative;
  height: 100%;
  width: ${props => props.width}px;
  max-height: ${props => props.theme.heightNumber - 120}px;
  display: flex;
`;

const GalleryItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 ${props => props.width}px;
  height: 100%;
  max-height: ${props => props.theme.heightNumber - 120}px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  padding: 0;
  img {
    margin: 0 auto;
    display: block;

    height: ${props => props.theme.heightNumber - 120 + "px"};
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
`;

const GalleryItemImage = styled.div`
  flex: 0 1 auto;
  overflow: hidden;
`;

const Menu = styled.div`
  position: relative;
  z-index: 0;
  max-width: 98%;
  width: 250px;
  width: 820px;
  margin: 0 auto 25px;
  ${props => props.theme.largeBreakPoint} {
    width: 960px;
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
  @media only screen and (max-width: 920px) {
    box-sizing: border-box;
    width: 600%;
    ${MenuItem} {
      flex: 1 0 16.66%;
    }
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
