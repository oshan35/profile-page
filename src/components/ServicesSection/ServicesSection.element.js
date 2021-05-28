import styled from "styled-components";

export const ServicesSec=styled.div`
   color : '#fff';
   padding: 60px 0;
   background: ${({lightBg}) => (lightBg ? '#fff':'#101522')};
`

export const ServiceCard = styled.div`
   height: 300px;
   width: 100%;
   background-color: red;
`;

export const ServiceIcon = styled.div`
   height: 300px;
   width: 100%;
   background-color: blue;
`;

export const ServiceDcs = styled.div`
   height: 300px;
   width: 100%;
   background-color: yellow;
`;