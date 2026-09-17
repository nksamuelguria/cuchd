import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TopHighlightsSection from '@/components/TopHighlightsSection';
import AllRankingsSection from '@/components/AllRankingsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <TopHighlightsSection />
      <AllRankingsSection />
      <Footer />
    </main>
  );
}
