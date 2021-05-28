
import React from "react";
import img02 from '../../components/assets/img02.json';
import img03 from '../../components/assets/img03.json';
import img04 from '../../components/assets/img04.json';

const homeObjOne ={
        lightBg:false,
        lightTopLine:true,
        lightTextDesc:true,
        lightText:true,
        headLine: "IT StartUp",
        heading: "We help You to grow",
        description: "We help you to gain your business in IT field.",
        animation:img02,
        direction: false,
};

const homeObjTwo ={
        lightBg:true,

        lightTopLine:false,
        lightTextDesc:false,
        lightText:false,
        headLine: "Technologies",
        heading: "Machine Learning",
        description: "We help you to gain your business in IT field.",
        animation:img03,
        direction: true,
};
const homeObjThree ={
        lightBg:false,
        lightTopLine:true,
        lightTextDesc:true,
        lightText:true,
        headLine: "Web Technology",
        heading: "Web Development",
        description: "We help you to gain your business in IT field.",
        animation:img04,
        direction: false,
};
export {homeObjOne,homeObjTwo,homeObjThree};