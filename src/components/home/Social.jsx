import React from 'react'
import * as Unicons from "@iconscout/react-unicons";

const Social = () => {
  return (
    <div className="home__social">
        <a
        href="https://www.instagram.com/" className="home__social-icon" target="_black">
        <Unicons.UilInstagram  />
        </a>

        <a href="https://dribbble.com/" className="home__social-icon" target="_black">
        <Unicons.UilDribbble  />
        </a>

        <a href="https://github.com/" className="home__social-icon" target="_black">
        <Unicons.UilGithubAlt  />
        </a>
    </div>
  )
}

export default Social