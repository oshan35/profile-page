import styled from "styled-components";

export const TechStackSection=styled.section`
    background: #101522;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40hv;
`;

export const TechStackWrapper=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1000px;
    margin: 75px 0 75px 0;

    @media screen and (max-width: 920px){
        flex-direction: column;
    }
`;

export const TechStackHedding=styled.h2`
   color: #fff;
   font-size: 37px;
   margin-bottom: 24px;
`;

export const TechIconContainer=styled.section`
    max-width: 1000px;
    width: 100%;
    align-items: center;

`;

export const TechIconList=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 50px auto 0 auto;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }

`;



export const TechIconItem=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

export const TechIcon=styled.a`
    color: #fff;
    font-size: 60px;
 
`;

export const TechIconName=styled.small`
    color: #fff;
    margin-bottom: 16px;
`;

