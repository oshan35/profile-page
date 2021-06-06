

import styled from 'styled-components';

export const Form=styled.form`

`;


export const FormContainer=styled.div`
    border-radius: 5px;
    background-color: #f2f2f2;
    height: 300px;
    width: 60%;

`;

export const formWrapper=styled.div`

`;

export const FormLabelWrapper=styled.div`
    display:flex;
    width: 30%;
    height: 40px;
`;

export const FormInputWrapper=styled.div`
    display: flex;
    width: 30%;
`;

export const FormLabel=styled.label`
    width: 100%;
    color: black;
`;

export const FormInput=styled.input`
    width: 100%;
    height: 30px;

`;

export const TextArea=styled.textarea`
    width: 100%;
    height: 100px;
`;

export const FormTextAreaWrapper=styled.div`

`;

export const ContactForm=styled.div`
    display: flex;
    flex-direction: row;
`;

export const ProfileContainer= styled.div`
    display: flex;
    width: 30%;
`;

export const ContactSection=styled.div`
    color: #fff;
    padding: 60px 0;

`;
export const ProfilePicture=styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    justify-self: center;
    flex-direction: row-reverse;
`;

export const ContactFormContainer=styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    margin: auto auto auto auto;

    flex: 1;
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width: 760px){
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;