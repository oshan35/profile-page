import React from "react";
import {FooterContainer,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItem,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrapper,
    SocialMediaLogo,
    SocialMediaIcon,
    WebsiteRights,
    SocialMediaIcons,
    SocialMediaIconsLink} from './Footer.elements';
import {FaFacebook,FaLinkedin,FaGithub,FaHackerrank} from 'react-icons/fa';


const Footer = () =>{
    return(
        <FooterContainer>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItem>
                        <FooterLinkTitle>About me</FooterLinkTitle>
                        <FooterLink to='###'>How it work</FooterLink>
                        <FooterLink to='###'>Languages</FooterLink>
                        <FooterLink to='###'>Technologies</FooterLink>
                        <FooterLink to='###'>Education</FooterLink>
                    </FooterLinkItem>
                    <FooterLinkItem>
                        <FooterLinkTitle>Contact me</FooterLinkTitle>
                        <FooterLink to='###'>Contact</FooterLink>
                        <FooterLink to='###'>Support</FooterLink>

                    </FooterLinkItem>
                    <FooterLinkItem>
                        <FooterLinkTitle>Services</FooterLinkTitle>
                        <FooterLink to='###'>Machine Learning</FooterLink>
                        <FooterLink to='###'>Web Development</FooterLink>
                        <FooterLink to='###'>Other</FooterLink>
                    </FooterLinkItem>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrapper>
                    <SocialMediaLogo to="/">
                        <SocialMediaIcon>
                            Oshan Devinda
                        </SocialMediaIcon>
                    </SocialMediaLogo>
                    <WebsiteRights>Oshan Devinda © 2021</WebsiteRights>
                    <SocialMediaIcons>
                        <SocialMediaIconsLink href='/' traget="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialMediaIconsLink>
                        <SocialMediaIconsLink href='/' traget="_blank" aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialMediaIconsLink>
                        <SocialMediaIconsLink href='/' traget="_blank" aria-label="Github">
                            <FaGithub/>
                        </SocialMediaIconsLink>
                        <SocialMediaIconsLink href='/' traget="_blank" aria-label="Hackerrank">
                            <FaHackerrank/>
                        </SocialMediaIconsLink>
                    </SocialMediaIcons>
                   
                </SocialMediaWrapper>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer;