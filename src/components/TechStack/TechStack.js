import React from 'react'
import { Container } from '../../globalStyles'
import {FaAndroid, FaAngular, FaBeer, FaCss3, FaDatabase, FaFlask, FaGit, FaHtml5,FaJava,FaJs,FaNodeJs,FaNpm,FaNutritionix,FaPython,FaReact, FaRProject} from 'react-icons/fa';
import {TechStackSection,
    TechStackWrapper,
    TechStackHedding,
    TechIconContainer,
    TechIconList,
    TechIconItem,
    TechIcon,
    TechIconName} from './TechStack.element';

const TechStack = () => {
    return (
        <>
           <TechStackSection>
                <TechStackWrapper>
                    <TechStackHedding>Technology Stack</TechStackHedding>
                    <TechIconContainer>
                        <TechIconList>
                            <TechIconItem>
                                <TechIcon href='/' traget="_black" area-label="HTML">
                                    <FaHtml5/>
                                </TechIcon>
                                <TechIconName>
                                    HTML-5
                                </TechIconName>
                            </TechIconItem>
                            <TechIconItem>
                                <TechIcon href='/' traget="_black" area-label="CSS">
                                    <FaCss3/>
                                </TechIcon>
                                <TechIconName>
                                    CSS-3
                                </TechIconName>
                            </TechIconItem>
                            <TechIconItem>
                                <TechIcon href='/' traget="_black" area-label="NodeJs">
                                    <FaNodeJs/>
                                </TechIcon>
                                <TechIconName>
                                    NodeJs
                                </TechIconName>
                            </TechIconItem>
                            <TechIconItem>
                                <TechIcon href='/' traget="_black" area-label="ReactJs">
                                    <FaReact/>
                                </TechIcon>
                                <TechIconName>
                                    React
                                </TechIconName>
                            </TechIconItem>
                            <TechIconItem>
                                <TechIcon href='/' traget="_black" area-label="Anguler">
                                    <FaAngular/>
                                </TechIcon>
                                <TechIconName>
                                    Anguler
                                </TechIconName>
                            </TechIconItem>
                            <TechIconItem>
                                <TechIcon href='/' traget="_black" area-label="Java">
                                    <FaJava/>
                                </TechIcon>
                                <TechIconName>
                                    Java
                                </TechIconName>
                            </TechIconItem>

                            <TechIconItem>
                                <TechIcon href='/' traget="_black" area-label="SQL">
                                    <FaDatabase/>
                                </TechIcon>
                                <TechIconName>
                                    SQL
                                </TechIconName>
                            </TechIconItem>
                            <TechIconItem>
                                <TechIcon href='/' traget="_black" area-label="npm">
                                    <FaNpm/>
                                </TechIcon>
                                <TechIconName>
                                    npm
                                </TechIconName>
                            </TechIconItem>
                            <TechIconItem>
                                <TechIcon href='/' traget="_black" area-label="Python">
                                    <FaPython/>
                                </TechIcon>
                                <TechIconName>
                                    Python
                                </TechIconName>
                            </TechIconItem>
                            <TechIconItem>
                                <TechIcon href='/' traget="_black" area-label="JavaScript">
                                    <FaJs/>
                                </TechIcon>
                                <TechIconName>
                                    JavaScript
                                </TechIconName>
                            </TechIconItem>
                            <TechIconItem>
                                <TechIcon href='/' traget="_black" area-label="Git">
                                    <FaGit/>
                                </TechIcon>
                                <TechIconName>
                                    Git
                                </TechIconName>
                            </TechIconItem>
                            <TechIconItem>
                                <TechIcon href='/' traget="_black" area-black='R'>
                                    <FaRProject/>
                                </TechIcon>
                                <TechIconName>
                                    R
                                </TechIconName>
                            </TechIconItem>
                        </TechIconList>
                    </TechIconContainer>
                </TechStackWrapper>
            </TechStackSection> 
        </>
    )
}

export default TechStack
