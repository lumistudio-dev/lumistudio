import Banner from '@/components/Banner';
import Campaign from '@/components/Campaign';
import OurServices from '@/components/OurServices';
import Portfolio from '@/components/portfolio/Portfolio';
import WhyUs from '@/components/why/WhyUs';

export default function Home() {
  return (
    <div>
      <Banner />
      <OurServices />
      <Campaign />
      <Portfolio />
      <WhyUs />
    </div>
  );
}
