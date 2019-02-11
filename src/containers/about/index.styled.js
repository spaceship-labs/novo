import styled from 'styled-components';
import { 
    Title,
} from "../../theme/App.styled";

const AboutTitle = styled(Title)`
    text-align: left;
    font-size: ${props => props.theme.TextBoxTitle};
    ${props => props.theme.largeBreakPoint}{
        font-size: ${props => props.theme.TextBoxTitle2x};
    }
`;

const Rows = styled.div`
    display: flex;
    min-height: 400px;
    align-items: flex-start;
    padding-left: ${props => props.theme.pLeft};
    padding-right: ${props => props.theme.pRight};
`;

const RowImg = styled.div`
    flex: 0 1  auto;
    padding-top: 70px;
`;

const RowBg = styled.div`
    flex: 0 1 40%;
    max-width: 400px;
    background-color: ${props => props.theme.Box};
    padding: 60px 100px 30px;
    box-sizing: border-box;
    position: relative;
    z-index: 1;
    ${props => props.theme.largeBreakPoint}{
        flex: 0 1 40%;
        max-width: 610px;
    }
`;

const GalleryWrapp = styled.div`
    position: relative;
    z-index: 0;
    width: 115%;
    left: -15%;
    img{
        width: 100%;
    }
`;

const Division = styled.hr`
    max-width: 110px;
    margin: 30px 0;
    border-top: 1px solid ${props => props.theme.Gold};
    border-bottom: 0;
`;

export {
    Rows,
    RowBg,
    RowImg,
    GalleryWrapp,
    AboutTitle,
    Division,
}