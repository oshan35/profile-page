import styled,{createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
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
export const Buttons=styled.button`
    border-radius: 4px;
    background-color: #4B59F7;
    white-space: nowrap;
    padding: 10px 20px;
    color: #fff;
    font-size: 15px;
    outline: none;
    border: none;
    cursor: pointer;

    &:hover{
        transition: all 0.3s ease-out;
        background: #fff;
        background: #0467FB;
    }

    @media screen and (max-width: 960px){
        width: 100%;
    }
`;

