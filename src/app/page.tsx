import React from 'react'
import Herosection from './components/Herosection'
import ServicesPage from './components/Services'
import ProjectSection from './components/Projects'
import CallToAction from './components/CallToAction'

export default function Page() {
  return (
    <div>
      <Herosection/>
     <ServicesPage/>
     <ProjectSection/>
     <CallToAction/>
    </div>
  )
}
