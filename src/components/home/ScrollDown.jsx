import React from 'react'
import * as Unicons from "@iconscout/react-unicons";


const ScrollDown = () => {
  return (
    <div className="home__scroll">
        <a href="#about" className="home__scroll-button button--flex">
            <span className='scroll__icon'></span>
            <span className="home__scroll-name">Scroll Down</span>
            <Unicons.UilArrowDown className="home__scroll-arrow"  />
        </a>
    </div>
  )
}

export default ScrollDown