import Banner from '@/components/Banner';
import OurServices from '@/components/OurServices';
import About from '@/components/about/About';
import Footer from '@/components/footer/Footer';
import Portfolio from '@/components/portfolio/Portfolio';
import Team from '@/components/team/Team';
import Testimonial from '@/components/testimonial/Testimonial';
import WhyUs from '@/components/why/WhyUs';
import Workflow from '@/components/workflow/Workflow';

export default function Home() {
  return (
    <div>
      <Banner />
      <OurServices />
      <Workflow />
      <Portfolio />
      <WhyUs />
      <About />
      <Team />
      <Testimonial />
      <Footer />
    </div>
  );
}
