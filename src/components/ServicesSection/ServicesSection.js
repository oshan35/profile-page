import React from "react";
import {ServicesSec,
     ServiceCard,
     ServiceIcon,
     ServiceDcs} from "./ServicesSection.element";
import {Container} from "react-bootstrap";
import { Button } from "bootstrap";


const ServicesSection = () => {
    return(
        <>
            <ServicesSec>
                <Container>
                    <ServiceCard>
                        <ServiceIcon>
                            
                        </ServiceIcon>
                        <ServiceDcs>

                        </ServiceDcs>
                    </ServiceCard>
                </Container>
            </ServicesSec>
        </>
    )
}

export default ServicesSection;