import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import {ContactSection,ProfilePicture,ContactFormContainer,Form,FormLabel,FormInput,TextArea, FormContainer,formWrapper,FormLabelWrapper,FormInputWrapper} from './ContactForm.element'; 
import { Container } from '../../globalStyles';

const ContactForm = () => {
    const [state, handleSubmit] = useForm("xwkaorra");
    if(state.succeeded){
        return <p>Thanks for Joining</p>
    }
    return (
        <ContactSection>
            <Container>
                <ProfilePicture>
                    <ContactFormContainer>
                        <Form onSubmit={handleSubmit}>
                            <FormLabelWrapper>
                                <FormLabel id="email" type="email" name="email">Email Address</FormLabel>
                            </FormLabelWrapper>
                            <FormInputWrapper>
                                <FormInput id="id" type="email" name="email" />
                                <ValidationError prefix="Email" field="email" error={state.errors} />
                            </FormInputWrapper>
                            <FormLabelWrapper>
                                <FormLabel id="message" type="message" name="message">Message</FormLabel>
                            </FormLabelWrapper>
                            <FormInputWrapper>
                                <TextArea ID="message" name="message"/>
                                <ValidationError prefix="Message" field="message" error={state.errors} />
                            </FormInputWrapper>
                            <button type="submit" disabled={state.submitting}>submit</button>
                        </Form>
                    </ContactFormContainer>
                </ProfilePicture>
            </Container>
        </ContactSection>
    )
}

export default ContactForm
