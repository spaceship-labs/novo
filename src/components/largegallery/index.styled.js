import styled from "styled-components";

const GalleryWrapp = styled.div`
  height: ${props => props.theme.heightNumber - 100}px;
  position: relative;
  width: 100%;
  overflow: hidden;
  overflow-x: scroll;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  box-sizing: border-box;
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
  max-width: 90%;
  width: 250px;
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
`;

const MenuItem = styled.a`
  flex: 0 1 auto;
  padding: 5px 25px;
  font-family: ${props => props.theme.Assistant};
  font-size: ${props => props.theme.textSmall};
  font-weight: bold;
  color: ${props => props.theme.Gray};
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.Black};
  }
`;

const ArrowLeft = styled(MenuItem)``;

const ArrowRight = styled(MenuItem)``;

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
