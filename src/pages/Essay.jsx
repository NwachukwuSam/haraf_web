import EssayHero from '../components/essay/EssayHero';
import EssayWriteUp from '../components/essay/EssayWriteUp';
import AuthorSection from '../components/essay/AuthorSection';
import ShareContact from '../components/essay/ShareContact';
import EssayCard from '../components/essay/EssayCard';
import PitchEssay from '../components/essay/PitchEssay';

function Essay() {
  return (
    <div>
        <EssayHero />
        <EssayWriteUp />
        <AuthorSection />
        <ShareContact />
        <EssayCard />
        <PitchEssay />

    </div>
  )
}

export default Essay