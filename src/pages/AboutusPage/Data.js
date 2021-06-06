import aboutmeImg01 from '../../components/assets/aboutmeImg01.json';
import edu from '../../components/assets/edu.json';

import myPic from '../../components/assets/myPic.png'


const homeObjOne ={
    lightBg:false,
    lightTopLine:true,
    lightTextDesc:true,
    lightText:true,
    headLine: "About me",
    heading: "We help You to grow",
    description: "Dummy Text!Dummy Text! Dummy Text! Dummy Text!",
    animation: aboutmeImg01,
    direction: true,
};


const homeObjTwo ={
    lightBg:true,
    lightTopLine:false,
    lightTextDesc:false,
    lightText:false,
    headLine: "About me",
    heading: "We help You to grow",
    description: "Dummy Text!Dummy Text! Dummy Text! Dummy Text!",
    animation:edu,
    direction: false,
};


export {homeObjOne, homeObjTwo};