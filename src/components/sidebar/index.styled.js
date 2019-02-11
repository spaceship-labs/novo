import styled from 'styled-components';

const SidebarWrapper = styled.div`
    width: ${props => props.theme.SidebarWidth}px;
    background-color: ${props => props.theme.Sidebar};
    color: ${props => props.theme.Gold};
    position: fixed;
    height: 100%;
    z-index: 1;
    ${props => props.theme.largeBreakPoint}{
        width: ${props => props.theme.SidebarWidth2x}px;
    }
`;

const SidebarSection = styled.div`
    position: absolute;
    width: 20px;
    top: 50%;
    left: 22px;
    text-align: center;
    p{
        transform: rotate(-90deg);
        transform-origin: left top 0;
        font-family: ${props => props.theme.Assistant};
        text-transform: uppercase;
        font-size: 14px;
        white-space: nowrap;
    }
    i{
        font-size: 40px;
        position: relative;
        left: -11px;
    }
    ${props => props.theme.largeBreakPoint}{
        left: 35px;
        p{
            font-size: 20px;
        }
        i{
            font-size: 50px;
        }
    }
`;

const SideMenu = styled.div`
    text-align: center;
    padding: 18px 10px;
    i{
        font-size: 20px;
    }
`;

export {
    SidebarWrapper,
    SideMenu,
    SidebarSection,
};