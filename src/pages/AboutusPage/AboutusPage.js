import {InfoSection, TechStack,ContactForm} from "../../components";
import {homeObjOne,homeObjTwo} from "./Data";
import React, { Component } from 'react';


const AboutmePage = () =>{
    return(
        <div>
          <InfoSection {...homeObjOne}/>
          <InfoSection {...homeObjTwo} />
          <TechStack />
          <ContactForm />
        </div>
    )
  }
  
export default AboutmePage;