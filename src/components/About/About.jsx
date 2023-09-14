import React from 'react';
import { FaLinkedinIn, FaGithub} from "react-icons/fa";
import './About.module.css';
import style from './About.module.css';
import imgProfile from './profile-pic (1).png';

function AboutMe() {
  return (
    <div >
     
      <div className={style.cont}>
      <div className={style.imgCont}>
      <h3>Melina Veyrat Durbex</h3>
       <img src={imgProfile} alt="" className={style.img} /> 
      <a
      className={style.linked} 
      href="https://www.linkedin.com/in/melina-veyrat-durbex-b66b3b227/"
      target="_blank"
      rel="noopener noreferrer">

      <FaLinkedinIn color='blue'></FaLinkedinIn>
      </a>
      <a
      className={style.linked} 
      href="https://github.com/meliveyrat1"
      target="_blank"
      rel="noopener noreferrer">

      <FaGithub color='gray'></FaGithub>
      </a>
      
      </div>
      <p className={style.contenedor}>
      <h2>About Me</h2>
      Hello!! My name is Melina and I have experience working on FullStack projects developed in the PERN stack with Java Script, Node js, PostgreSQL, Sequelize, Express, React, Redux, HTML, CSS, ChakraUI, working on projects with Scrum methodology. I believe that I can bring a lot of my personality, creativity and knowledge as a developer to companies that are looking for a Full-Stack Web Developer. Something that can complement my skills is having been chosen in a soft skills training program as a Teaching Assistant at Soy Henry for two months, culminating with a Team Work insignia from the students and teammates. For my professional background in gastronomy for 15 years I have good planning skills, problem solving, working under pressure, efficiency to achieve objectives and creativity.
      <br></br>
      <br></br>
      </p>
      </div>
    </div>
  );
}

export default AboutMe;
