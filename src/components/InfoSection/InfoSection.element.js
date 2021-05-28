import styled from "styled-components";

export const InforSection=styled.div`
   color : '#fff';
   padding: 60px 0;
   background: ${({lightBg}) => (lightBg ? '#fff':'#101522')};
`;

export const InforRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    justify-self: center;
    flex-direction: ${({direction}) =>(direction ? 'row-reverse' : 'row')};
`;


export const InforColumn = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    margin: auto auto auto auto;
    
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width : 760px){
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;

    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 760px){
        padding-bottom: 20%;
    }
`;

export const TopLine=styled.div`
    color: ${({lightTopLine}) => (lightTopLine ? '#a9b3c1' : '#4B59F7')};
    font-size: 18px;
    line-height: 16px;
    letter-spacing: 1.4px;
    margin-bottom: 16px;

`;


export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    color: ${({lightText}) => (lightText ? '#f7fBfa' : '#1c2237')}
`;

export const Subtitle = styled.p`
    max-width: 448px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({lightTextDesc}) => (lightTextDesc ? '#fff' : '#1c2237')};
    // #a9b3c1
`;

export const Anima =styled.div`
    width: 460px;
    align-self: center;
    margin: auto auto;
`;
