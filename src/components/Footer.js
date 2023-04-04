import React from 'react'
import Text from './Text'
import Image from './Image'
import leaf from '../images/leaf.png'

const Footer = () => {
  return (
    <div className='footer'>
      <Text text="Nigeria" className="pad"/>
      <hr></hr>
      <div className='foot'>
      <div className='leaf'>
        <Text text="About"/>
        <Text text="Advertising"/>
        <Text text="Business"/>
        <Text text="How Search Works"/>
      </div>
      <div className='leaf'>
        <Image src={leaf}/>
        <Text text="Carbon neutral since 2007"/>
      </div>
      <div className='leaf'>
        <Text text="Privacy"/>
        <Text text="Terms"/>
        <Text text="Settings"/>
      </div>
      </div>
    </div>
  )
}

export default Footer
