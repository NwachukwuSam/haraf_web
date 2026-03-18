import FeaturedEssay from "../components/ideas/FeaturedEssay"
import IdeasHero from "../components/ideas/IdeasHero"
import IdeaCard from "../components/ideas/IdeaCard" 
import AuthorsSection from "../components/ideas/AuthorsSection"
import PitchEssay from "../components/essay/PitchEssay"
import NewsletterSignup from "../components/essay/NewsletterSignup"

function Ideas() {
  return (
    <div>
      <IdeasHero />
      <FeaturedEssay />
      <IdeaCard />
      <AuthorsSection />
      <NewsletterSignup/>
      <PitchEssay/>
    </div>
  )
}

export default Ideas
