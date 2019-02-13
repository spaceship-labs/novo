import styled from "styled-components";

const GalleryWrapp = styled.div`
  position: relative;
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
  display: flex;
`;

const GalleryItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 ${props => props.width}px;
  height: 100%;
  box-sizing: border-box;
  padding-left: ${props => props.theme.pLeft};
  padding-right: ${props => props.theme.pRight};
  img {
    width: 100%;
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
  overflow: hidden;
`;

const Menu = styled.div`
  position: relative;
  z-index: 0;
  max-width: 98%;
  width: 250px;
  width: 475px;
  overflow: hidden;
  overflow-x: scroll;
  white-space: nowrap;
  margin: 0 auto 25px;
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
  @media only screen and (max-width: 500px) {
    width: 500%;
  }
`;

const MenuItem = styled.a`
  flex: 1 0 auto;
  padding: 5px 25px;
  font-family: ${props => props.theme.Assistant};
  font-size: ${props => props.theme.textSmall};
  text-align: center;
  font-weight: bold;
  color: ${props => props.theme.Gray};
  cursor: pointer;
  box-sizing: border-box;
  &.active,
  &:hover {
    color: ${props => props.theme.Black};
  }
`;

const ArrowLeft = styled(MenuItem)`
  display: block;
  position: absolute;
  left: -10px;
  top: -7px;
  font-size: 13px;
  padding: 10px;
  background: white;
  z-index: 2;
`;

const ArrowRight = styled(MenuItem)`
  display: block;
  position: absolute;
  right: -10px;
  top: -7px;
  font-size: 13px;
  padding: 10px;
  background: white;
  z-index: 2;
`;

export {
  GalleryWrapp,
  GalleryReel,
  GalleryItem,
  GalleryItemImage,
  Menu,
  MenuReel,
  MenuItem,
  ArrowLeft,
  ArrowRight
};
