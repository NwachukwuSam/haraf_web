import FeaturedEssay from "../components/ideas/FeaturedEssay"
import IdeasHero from "../components/ideas/IdeasHero"
import IdeaCard from "../components/ideas/IdeaCard" 
import AuthorsSection from "../components/ideas/AuthorsSection"

function Ideas() {
  return (
    <div>
      <IdeasHero />
      <FeaturedEssay />
      <IdeaCard />
      <AuthorsSection />
    </div>
  )
}

export default Ideas
