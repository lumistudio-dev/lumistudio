import Banner from '@/components/Banner';
import OurServices from '@/components/OurServices';
import About from '@/components/about/About';
import Portfolio from '@/components/portfolio/Portfolio';
import WhyUs from '@/components/why/WhyUs';

export default function Home() {
  return (
    <div>
      <Banner />
      <OurServices />
      <Portfolio />
      <WhyUs />
      <About />
    </div>
  );
}
