import styled from 'styled-components';

const Header = styled.header`
    width: 100%;
    position: relative;
    z-index: 2;
`;

const MenuWrapp = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

const Menu = styled.nav`
    width: 50%;
    display: flex;
`;

const MenuItem = styled.a`
    flex: 1 0 auto;
    color: white;
    font-size: ${props => props.theme.MenuItemSmall}
    text-transform: uppercase;
    text-decoration: none;
    padding: 20px 5px;
    font-family: ${props => props.theme.Assistant};
    position: relative;
    &:before{
        content: '';
        position: absolute;
        ${props => props.percentage?'width:'+props.percentage+'%':''}
        max-width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: white;
        z-index: -1;
    }
    &:hover{
        color: ${props => props.theme.Gold};
    }
    ${ props => props.theme.largeBreakPoint }{
        font-size: ${props => props.theme.MenuItemSmall2x}
    }
`;

const FullMenuWrap = styled.div`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: ${props => props.isFullVisible===true?props.theme.MenuHeigth:'0'};
    overflow: hidden;
    background-color: ${props => props.theme.Blue};
    transition: height .5s;
    ${MenuItem}{
        font-weight: bold;
        color: ${props => props.theme.Gold};
        ${props => props.theme.largeBreakPoint}{
            padding: 35px 5px;
        }
    }
    ${ props => props.theme.largeBreakPoint }{
        height: ${props => props.isFullVisible===true?props.theme.MenuHeigth2x:'0'};
    }
`;

const FullMenu = styled.nav`
    height: ${props => props.theme.MenuHeigth};
    display: flex;
    text-align: center;
    ${MenuItem} {
        font-size: ${props => props.theme.MenuItemFull};
        ${ props => props.theme.largeBreakPoint }{
            font-size: ${props => props.theme.MenuItemFull2x};
        }
    }
    ${ props => props.theme.largeBreakPoint }{
        height: ${props => props.theme.MenuHeigth2x};
    }
`;

export {
    Header,
    MenuWrapp,
    Menu,
    MenuItem,
    FullMenuWrap,
    FullMenu,
}