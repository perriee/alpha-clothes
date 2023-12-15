import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Review from '../Components/Review/Review'
import Footer from '../Components/Footer/Footer'




const Home = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Review/>
        <Footer/>
    </div>
  )
}

export default Home