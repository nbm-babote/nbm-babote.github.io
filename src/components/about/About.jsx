import React from 'react'
import "./about.css"
import AboutImg from "../../assets/img/nbm-profile.jpg"
import CV from "../../assets/Pdf/Nbm-CV.pdf"
import * as Unicons from "@iconscout/react-unicons";
import Info from './Info'

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />

            <div className="about__data">
                <Info />

                <p className="about__description">Frontend developer, I create web page with
                 UI / UX user interface, I have years of experience and many clients are happy 
                 with the projets carried out.</p>

                 <a download="" href={CV} className="button button--flex">
                    Download CV
                    <Unicons.UilFileAlt className="download__icon" />
                 </a>
            </div>
        </div>
    </section>
  )
}

export default About