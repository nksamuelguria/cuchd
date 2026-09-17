import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TopHighlightsSection from '@/components/TopHighlightsSection';
import PlacementsOverviewSection from '@/components/PlacementsOverviewSection';
import AllRankingsSection from '@/components/AllRankingsSection';
import JointPlacementSection from '@/components/JointPlacementSection';
import StudentTestimonialSection from '@/components/StudentTestimonialSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <TopHighlightsSection />
      <AllRankingsSection />
      <JointPlacementSection />
      <PlacementsOverviewSection />
      <StudentTestimonialSection />
      <Footer />
    </main>
  );
}
