import React from 'react';
import { Link } from 'react-router-dom';
import web from '../src/images/4942219.jpg'
import Common from './Common';


const About = () => {
  return(

    <>
        <Common name='Welcome to About Page' visit='/contact' btname='Contact Now' imgsrc={web} />
    </>
  );

}


export default About;