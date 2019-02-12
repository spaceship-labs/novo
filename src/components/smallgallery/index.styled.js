import styled from "styled-components";

const GalleryWrapp = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  min-height: 550px;
  ${props => props.theme.mediumBreakPoint} {
    min-height: 400px;
  }
  ${props => props.theme.smallBreakPoint} {
    min-height: 200px;
  }
`;

const GalleryItem = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  opacity: ${props => (props.visible === true ? 1 : 0)};
  visibility: ${props => (props.visible === true ? "visible" : "hidden")};
  transition: all 1s;
  img {
    max-width: 100%;
  }
`;

export { GalleryWrapp, GalleryItem };
