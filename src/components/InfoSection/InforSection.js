import React from 'react'
import {InforSection,InforRow,InforColumn,TextWrapper,TopLine,Heading,Subtitle,Anima} from './InfoSection.element';
import {Container} from '../../globalStyles';
import DisplayLottie from "../../LottyAnimation/lottyToJason";

const InfoSection = (
    {
        lightBg,
        lightTopLine,
        lightTextDesc,
        lightText,
        headLine,
        heading,
        description,
        animation,
        direction,
    }
    ) => {

    return (
        <InforSection lightBg={lightBg}>
            <Container>
                <InforRow direction={direction}>
                    <Anima>
                        <DisplayLottie animationData={animation} />
                    </Anima>
                    <InforColumn>
                        <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>{headLine}</TopLine>
                            <Heading lighText={lightText}>{heading}</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                        </TextWrapper>
                    </InforColumn>
                </InforRow>
            </Container>
        </InforSection>
    )
}

export default InfoSection
