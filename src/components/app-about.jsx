import React from 'react'
import Image from 'next/image'
import bg_white from '../../public/bg_white.png'
import portrait from '../../public/portrait.png'
import about from '../../public/about.png'

export const AppAbout = () => {
  return (
    <main>
      <div className="grid-container">
        <div className="bg-white"><Image src={bg_white} alt='White background image' width={"100%"} /></div>
        <div className="about-overlay">
          <div className="portrait"><Image src={portrait} alt='Representation of the artist' /></div>
          <div className="about-container">
            <div><Image src={about} alt='The heading for about article' /></div>
            <div>
              My favorite things to create are editorial and children's book illustrations, but actually anything can inspire me to work. My media interests lay in the sphere of traditional materials; I think that textures and wankiness may bring so much mood into the image.
              Let's make something together!</div>
          </div>
        </div>
      </div>
    </main>
  )
}
