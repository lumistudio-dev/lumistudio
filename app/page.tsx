import Banner from '@/components/Banner';
import Campaign from '@/components/Campaign';
import OurServices from '@/components/OurServices';
import Portfolio from '@/components/portfolio/Portfolio';

export default function Home() {
  return (
    <div>
      <Banner />
      <OurServices />
      <Campaign />
      <Portfolio />
    </div>
  );
}
