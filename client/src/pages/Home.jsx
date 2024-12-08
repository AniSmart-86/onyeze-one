import React from 'react'
import Hero from '../components/Hero'
import Service from '../components/Service'
import MyProject from '../components/Project'
import Feedbacks from '../components/Feedbacks'
import Intouch from '../components/Intouch'

const Home = () => {
  return (
    <section>
        <Hero />
        <Service />
        <MyProject />
        <Feedbacks />
        <Intouch />
      
    </section>
  )
}

export default Home