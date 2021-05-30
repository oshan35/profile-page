import {React} from 'react';
import {ServicesSection} from "../../components";

import {homeObjOne} from "./Data";
import {InfoSection} from "../../components";


const ServicesPage = () =>{
    return(

        <div>
            <InfoSection {...homeObjOne}/>
            <ServicesSection />
        </div>
    )
  }
  

export default ServicesPage;
  