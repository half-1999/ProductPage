import React from 'react'

import Freelance from './Freelance/Freelance'

import Details from './Details'

import Action from './Action/Action'
import Client from './ClientLogo/Client'
import Anand from './Banner/Anand'
import Story2 from './Story/Story2'


const Landing = () => {
  return (
    <div>
        
        <Anand/>
        <Freelance/>
        <Story2/>
        <Details/>
        <Action/>
        <Client/>
       
    </div>
  )
}

export default Landing