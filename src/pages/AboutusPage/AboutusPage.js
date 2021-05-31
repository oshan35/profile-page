import {InfoSection} from "../../components";
import {homeObjOne} from "./Data";
import React, { Component } from 'react';


const AboutmePage = () =>{
    return(
        <div>
          <InfoSection {...homeObjOne}/>
        </div>
    )
  }
  
export default AboutmePage;