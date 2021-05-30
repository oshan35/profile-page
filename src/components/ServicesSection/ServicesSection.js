import React from "react";
import {ServicesSec,
     ServiceCard,
     ServiceIcon,
     ServiceDcs,
     ServicesContainer,
     ServicesWrapper,
     ServicesHeading,
     ServicePlan,
     ServiceCardPrice,
     ServicesCardInfo,
     HireNowBtn,
     } from "./ServicesSection.element";
import DisplayLottie from "../../LottyAnimation/lottyToJason";
import servicesImg01 from '../assets/servicesImg01.json';
import servicesImg02 from '../assets/servicesImg02.json';
import {Buttons} from '../../globalStyles';

const ServicesSection = () => {
    return(
        <>
            <ServicesSec>
                <ServicesWrapper>
                    <ServicesHeading>Our Services</ServicesHeading>
                    <ServicesContainer>
                        <ServiceCard>
                            <ServicesCardInfo>
                                <ServiceIcon>
                                    <DisplayLottie animationData={servicesImg01} />
                                </ServiceIcon>
                                <ServicePlan>Machine Learning</ServicePlan>

                                <ServiceDcs>
                                    Starter Pack
                                </ServiceDcs>
                                <HireNowBtn>$60.00</HireNowBtn>
                            </ServicesCardInfo>

                        </ServiceCard>

                        <ServiceCard>
                            <ServicesCardInfo>
                                <ServiceIcon>
                                    <DisplayLottie animationData={servicesImg02} />
                                </ServiceIcon>
                                <ServicePlan>Web Develpment</ServicePlan>
                                <ServiceDcs>
                                    Starter Pack
                                </ServiceDcs>
                                <HireNowBtn>$60.00</HireNowBtn>
                            </ServicesCardInfo>

                        </ServiceCard>

                    </ServicesContainer>

                </ServicesWrapper>
            </ServicesSec>
        </>
    )
}

export default ServicesSection;