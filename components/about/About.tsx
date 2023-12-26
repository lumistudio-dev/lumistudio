import Image from 'next/image';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import {
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconMail,
} from '@tabler/icons-react';

function About() {
  return (
    <div className='container py-16'>
      <div className='flex items-center justify-center md:justify-between mb-24'>
        <div className='text-center md:text-start'>
          <div className='mb-2'>
            <Badge variant='secondary'>About Us</Badge>
          </div>
          <div className='text-5xl text-white font-bold'>Tentang Kami</div>
        </div>
        <div className='hidden md:block'>
          <Button
            variant={'secondary'}
            className='text-lg text-black font-medium'
          >
            Tim Kami
          </Button>
        </div>
      </div>
      <div className='flex flex-col-reverse md:flex-row'>
        <div className='w-full md:w-1/2 md:mx-10'>
          <div className='text-white mb-5'>
            <div className='text-2xl font-bold mb-4'>Who we are?</div>
            <div className='text-justify'>
              <span className='font-bold'>
                LUMI adalah Social Media Agency{' '}
              </span>
              yang membantu <span className='font-bold'>UMKM </span>
              mengembangkan bisnisnya di dunia digital melalui konten-konten
              kreatif di media sosial dan iklan berbayar seperti
              Instagram/Facebook Ads.
            </div>
          </div>
          <div className='text-white'>
            <div className='text-2xl font-bold mb-4'>Connect with Us:</div>
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2'>
                <IconMail />
                lumistudio06@gmail.com
              </div>
              <div className='flex gap-2'>
                <IconBrandWhatsapp />
                (+62) 851 2345 6789
              </div>
              <div className='flex gap-2'>
                <IconBrandInstagram /> @lumistudio
              </div>
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/2 md:mx-10 relative mb-10 md:mb-0'>
          <div className='absolute -z-10 -top-12 -left-16'>
            <Image
              src='/assets/frame.svg'
              alt='logo'
              width={150}
              height={150}
              className=''
            />
          </div>
          <Image
            src='/assets/about.jpg'
            alt='logo'
            width={1000}
            height={1000}
            className='rounded-tr-[60px] rounded-bl-[60px] md:rounded-tr-[80px] md:rounded-bl-[80px] lg:rounded-tr-[120px] lg:rounded-bl-[120px]'
          />
        </div>
      </div>
    </div>
  );
}

export default About;
