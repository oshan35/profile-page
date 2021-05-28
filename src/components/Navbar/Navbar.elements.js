import styled from 'styled-components';
import {Container} from '../../globalStyles';
import {FaMagento} from 'react-icons/fa';
import {Link} from 'react-router-dom';


export const Nav = styled.nav`
    background: #2C3E50;
    height: 80px;
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    margin: 0;
    height: 80px;
    width:100%;

    ${Container}
`;

export const NavLogo = styled(Link)`
    columns: white;
    justify-self: center;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: felx;
    align-items: center;
    color: white;
`;

export const NavIcon =styled(FaMagento)`
    margin-right: 0.5rem;
    color: white;
`;

export const MobileIcon = styled.div`
    display : none;
    float: right;
    @media screen and (max-width: 960px){
        display:block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px){
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: ${({click}) => (click ? 0 : '-100%')}; //slider command 
        opacity: 1;
        transition: all 0.5s ease;
        background: #101522;
    }
`;

export const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px;

    &::hover{
        border-bottom: 3px solid #fff;
    }

    @media screen and (max-width: 960px){
        width: 100%;

        &::hover{
            border:none;
        }
    }
`;

export const NavLink = styled(Link)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;

    @media screen and (max-width: 960px){
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &::hover{
            color: #F7F9F9 ;
            transition: all 0.3s ease;

        }
    }
`;




