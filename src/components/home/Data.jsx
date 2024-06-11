import React from 'react'
import * as Unicons from "@iconscout/react-unicons";

const Data = () => {
  return (
    <div className="home__data">
        <h1 className="home__title">N. Babote <span className='home__hand'>👏</span></h1>
        <h3 className="home__subtitle">Analytic Developper</h3>
        <p className="home__description">I'm Analytic Developper based in Kinshasa, and I'm very 
        passionate and dedicated to my work.</p>

        <a href="#contact" className="button button--flex">
            Say Hello <Unicons.UilMessage className="button__icon" />
        </a>
    </div>
  )
}

export default Data