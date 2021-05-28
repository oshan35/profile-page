import styled,{createGlobalStyle} from 'styled-components';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source San Pro',sans-serif;
}
`;

export const Container=styled.div`
z-index:1;
max-width: 100%;
margin-right: 1300px;
margin-left: auto;
margin-right: auto;
padding-right: 50px;
padding-left: 50px;
@media screen and (max-width:991px){
    padding-right: 30px;
    padding-left: 30px;
}
`
export const Buttons=Button;