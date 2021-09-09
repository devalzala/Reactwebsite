import React from 'react';
import { Link } from 'react-router-dom';
import web from '../src/images/1905.jpg'
import Common from './Common';


const Home = () => {
  return(

    <>
       <Common name='Welcome to Home Page' visit='/service' btname='Get Started' imgsrc={web}/>
    </>
  );

}


export default Home;