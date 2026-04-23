import React from 'react'
import Hero from '../components/home/Hero'
import WhoWeAre from '../components/home/WhoWeAre'
import Impact from '../components/home/Impact'
import SixPillars from '../components/home/SixPillars'
import HumanStories from '../components/home/HumanStories'
import HeadlineCarousel from '../components/home/HeadlineCarousel'
import Partners from '../components/home/Partners'
import JoinMovement from '../components/home/JoinMovement'
import LatestNews from '../components/home/LatestNews'
import ContactForm from '../components/home/ContactForm'
import NewsletterSignup from '../components/essay/NewsletterSignup'

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <main className="grow">
        <Hero />
        <WhoWeAre />
        <Impact />
        <SixPillars />
        <HumanStories />
        <HeadlineCarousel />
        <Partners />
        <JoinMovement />
        <LatestNews />
       <NewsletterSignup/>
      </main>
    </div>
  )
}

export default Home
