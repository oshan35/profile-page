import styled from "styled-components";
import {Link} from 'react-router-dom';
import { FaMagento } from "react-icons/fa";


export const FooterContainer=styled.div`
    background: #2C3E50;
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

export const FooterLinksContainer= styled.div`
   width :100% ;
   max-width: 1000px;
   display: flex;
   justify-content: center;

   @media screen and (max-width: 820px){
       padding-top: 32px;
   }
`;

export const FooterLinksWrapper= styled.div`
    display: flex;
   
    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`;

export const FooterLinkItem= styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;


export const FooterLinkTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;

    &:hover{
        color: #0467fb;
        transition: 0.3s ease-out;
    }
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrapper=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1000px;
    margin:40px auto 0 auto;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`;

export const SocialMediaLogo=styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`;

export const SocialMediaIcon= styled(FaMagento)`
    margin-right: 10px;
`;

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`;

export const SocialMediaIcons= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialMediaIconsLink = styled.a`
    color: #fff;
    font-size: 24px;
`;