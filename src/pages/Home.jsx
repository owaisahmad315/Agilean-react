import React from 'react'
import {Feature, Hero,Studio, Work,Service,Vision,
Book} from '../components'
// import {motion,variants } from 'framer-motion';
import AnimatedPage from '../animatedPage'

const Variants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const Home = () => {
  return (
    <AnimatedPage>
    <div>
     <Hero />
     <Studio />
     <Feature /> 
     <Service />
     <Vision />
     <Work /> 
     <Book /> 
    </div>
    </AnimatedPage>
  )
}

export default Home