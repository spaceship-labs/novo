import styled from 'styled-components';

const GalleryWrapp = styled.div`
    height: ${props => props.theme.height};
    position: relative;
    width: 100%;
    overflow: hidden;
    overflow-x: scroll;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;

`;

const GalleryReel = styled.div`
    position: relative;
    height:100%;
    width: ${props => props.width}px;

`;

const GalleryItem = styled.div`
    display: inline-block;
    width: ${props => props.width}px;
    height: 100%;
    box-sizing: border-box;
    img{
        width: 100%;
    }
`;

export {
    GalleryWrapp,
    GalleryReel,
    GalleryItem,
}