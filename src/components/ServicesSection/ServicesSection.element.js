import styled from "styled-components";
import {Button} from "bootstrap";


export const ServicesSec=styled.div`
  padding: 60px 0 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #4b59f7;
  // background:#101522;
`;

export const ServicesWrapper= styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 0 auto;

   @media screen and (max-width: 960px){
      margin: 0 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
   }
`;

export const ServicesHeading= styled.h1`
   color: #fff;
   font-size: 48px;
   margin-bottom: 24px;
`;

export const ServicesContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;

   @media screen and (max-width: 960px){
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
   }
`;

export const ServiceCard = styled.div`
   background: #242424;
   box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
   width: 280px;
   height: 60%;
   text-decoration: none;
   border-radius: 4px;


   &:nth-child(2){
      margin: 24px;
   }

   &:hover{
      transform: scale(1.06);
      transition: all 0.3s ease-out;
      color: #1c2237;
   }

   @media screen and (max-width: 960px){
      width: 90%;

      &:hover{
         transform: none;
      }
   }

`;

export const ServicesCardInfo= styled.div`
   display: flex;
   flex-direction: column;
   height: 500px;
   padding: 24px;
   align-items: center;
   color: #fff;
`;


export const ServiceIcon = styled.div`
   margin: 24px 0;
`;

export const ServicePlan=styled.div`
   margin-bottom: 5px;
   font-size: 24px;
`;

export const ServiceCardPrice= styled.h3`
   font-size: 14px;
   margin-bottom: 24px;
`;

export const ServiceDcs = styled.p`
   font-size: 14px;
   margin-bottom: 24px;
`;

export const HireNowBtn=styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 10px 27px;
  text-align: center;
  text-decoration: none;
  display: flex;
  font-size: 10px;
  margin: 4px 2px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  /* transition: all 0.5s; */
  position: relative;

  &:hover{
   box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
  }
  
`;