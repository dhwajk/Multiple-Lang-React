import React from 'react';
import Nav from './Nav';
import Languageoption from "../Components/Language";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';



const About = () => {

  const {t} = useTranslation();
  const handleClick=(e)=>{
    i18next.changeLanguage(e.target.value)
  }

  return (
    <div style={{marginTop:'50px'}}>
      <Nav/>
      <Languageoption onChange={(e)=>handleClick(e)}/>
    <h1>{t('This is something about the About Page')}</h1></div>
  )
}

export default About;
