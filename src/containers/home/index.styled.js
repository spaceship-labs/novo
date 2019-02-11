import styled from 'styled-components';
import img3 from "../../theme/livingroom.jpg";

import { SubTitle } from "../../theme/App.styled";

const Welcome = styled.div`
    padding: 50px 0;
`;

const TitleFooter = styled.p`
    font-size: ${props => props.theme.textSize};
    font-weight: bold;
    line-height: 1.92;
    margin: 0;
`;

const PTitle = styled.p`
    font-size: 20px;
    font-family: ${props => props.theme.Assistant};
    ${props => props.theme.largeBreakPoint}{
        font-size: 30px;
    }
`;

const ImageWithBox = styled.div`
    position: relative;
    min-height: 300px;
    max-height: 800px;
    height: ${props => props.theme.height};
    background-image: url(${img3});
`;

const Box = styled.div`
    background-color: white;
    width: 300px;
    margin: 0;
    padding: 35px 75px 35px 35px;
    box-sizing: border-box;
    position: absolute;
    left: 25px;
    top: 35px;
    h3{ 
        font-size: ${props => props.theme.TextBoxTitle};
        font-weight: normal;
        font-style: italic;
        margin: 0;
        margin-bottom: 30px;
        position: relative;
        &:after{
            content: '';
            position: absolute;
            bottom: -14px;
            width: 110px;
            height: 1px;
            background-color: ${props => props.theme.Gold};
            right: -130px;
        }
    }
    ${props => props.theme.largeBreakPoint}{
        width: 450px;
        h3{
            font-size: ${props => props.theme.TextBoxTitle2x};
        }
    }
`;

const Rows = styled.div`
    display: flex;
`;

const Row = styled.div`
    flex: ${props => props.width?"0 1 "+props.width:'1 0 auto'};
    ${props => props.width?'min-width:'+props.width+';':''}
    min-height: 300px;
    img{
        max-width: 100%;
        width: 100%;
    }
    ${props => props.align&&props.align==='right'?'padding-right:22px;':''}
    text-align: ${props => props.align&&props.align==='right'?'right':'left'};
`;

const TorreWrapp = styled.div`
    padding: 0 ${props => props.theme.pRight} 100px ${props => props.theme.pLeft};
`;

const TorreSubTitle = styled(SubTitle)`
    color: ${props => props.theme.Gold};
    font-family: ${props => props.theme.Playfair};
    font-style: italic;
    position: relative;
    padding-bottom: 40px;
    &:after{
        content: '';
        position: absolute;
        z-index: 1;
        bottom: 15px;
        width: 110px;
        height: 1px;
        background-color: ${props => props.theme.Gold};
        right: -50px;
    }
`;

export {
    PTitle,
    TitleFooter,
    ImageWithBox,
    Box,
    Welcome,
    Rows,
    Row,
    TorreWrapp,
    TorreSubTitle,
};