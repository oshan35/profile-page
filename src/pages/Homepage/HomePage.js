import { render } from '@testing-library/react';
import React, { Component } from 'react'
import {homeObjOne,homeObjTwo,homeObjThree} from "./Data";
import {InfoSection} from "../../components";

const HomePage = () =>{
  return(
      <div>
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjThree}/>
      </div>
  )
}

export default HomePage;

