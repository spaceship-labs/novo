import styled from 'styled-components'

const Wrapper = styled.div`
    color: ${props => props.theme.Black};
`;

const Content = styled.div`
    padding-left: 67px;
    ${props => props.theme.largeBreakPoint}{
        padding-left: 100px;
    }
`;

const SmallContainer = styled.div`
    max-width: 650px;
    box-sizing: border-box;
    padding: 40px;
    margin: 0 auto;
    ${props => props.align?'text-align:'+props.align:''};
    ${props => props.theme.largeBreakPoint}{
        max-width: 850px;
    }
`;

const Title = styled.h2`
    font-size: ${props => props.theme.textTitleGroup};
    font-style: italic;
    font-weight: normal;
    color: ${props => props.theme.Gold};
    margin: 0;
    line-height: 1;
    letter-spacing: -0.4px;
    ${props => props.theme.largeBreakPoint}{
        font-size: ${props => props.theme.textTitleGroup2x};
    }
`;

const SubTitle = styled.h3`
    font-size: ${props => props.theme.textSubTitleGroup};
    font-style: normal;
    font-weight: 200;
    margin: 0;
    line-height: 1;
    letter-spacing: -0.3px;
    font-family: ${props => props.theme.Assistant};
    ${props => props.theme.largeBreakPoint}{
        font-size: ${props => props.theme.textSubTitleGroup2x};
    }
`;

const TitleFooter = styled.p`
    font-size: ${props => props.theme.textFooterTitleGroup};
    font-weight: bold;
    line-height: 1.92;
    margin: 0;
    ${props => props.theme.largeBreakPoint}{
        font-size: ${props => props.theme.textFooterTitleGroup2x};
    }
`;

const Button = styled.a`
    border: 1px solid ${props => props.theme.Gold};
    color: ${props => props.theme.Gold};
    text-align: center;
    width: 100%;
    font-size: ${props => props.theme.textSmall};
    letter-spacing: 0.9px;
    display: block;
    padding: 12px;
    box-sizing: border-box;
    margin: 30px 0;
    ${props => props.theme.largeBreakPoint}{
        font-size: ${props => props.theme.textSmall2x};
    }
`;

const ImageFooter = styled.p`
    font-size: 10.5px;
    text-align: right;
    span{
        font-size: 12px;
        color: ${props => props.theme.Gold}
    }
    ${props => props.theme.largeBreakPoint} {
        font-size: 26.5px;
        span{
            font-size: 24.5px;
        }
    }
`;

const Paragraph = styled.p`
    font-size: ${props => props.theme.textSize};
    text-align: ${props => props.align?props.align:'left'};
    margin: 0;
    line-height: 1.67;
    letter-spacing: -0.1px;
    ${props => props.theme.largeBreakPoint} {
        font-size: ${props => props.theme.textSize2x};
        letter-spacing: -0.2px;
    }
`;

export { 
    Wrapper,
    Content,
    SmallContainer,
    Title,
    SubTitle,
    TitleFooter,
    Button,
    ImageFooter,
    Paragraph
};