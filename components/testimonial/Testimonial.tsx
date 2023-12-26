'use client';

import Image from 'next/image';
import { Badge } from '../ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';

function Testimonial() {
  return (
    <div className='bg-[#36B8E8]'>
      <div className='container py-16'>
        <div className='flex flex-col items-center mb-5'>
          <div className='mb-2'>
            <Badge variant='secondary'>Testimonials</Badge>
          </div>
          <div className='text-5xl text-white text-center font-bold mb-4'>
            Ulasan Pelanggan
          </div>
          <p className='text-center text-xl text-white/80'>
            Apa yang mereka katakan
            <br />
            tentang Kami
          </p>
        </div>
        <div className='mx-12'>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
          >
            <CarouselContent className='-ml-4 pt-16'>
              <CarouselItem className='md:basis-1/2 lg:basis-1/3 pl-4'>
                <div className='bg-white py-8 px-8'>
                  <Image
                    src='/assets/quote.svg'
                    alt='icon'
                    width={200}
                    height={200}
                    className='w-10 h-10 md:w-[57px] md:h-[55px]'
                  />
                  <p className='text-lg md:text-2xl my-6 italic text-[#4F4F4F]'>
                    “Karena bantuan LUMI, saya melihat lonjakan signifikan dalam
                    awareness brand saya. Strategi instagram dan
                    konten-kontennya bener bener ciamik soro!”
                  </p>
                  <div>
                    <div className='text-base font-bold'>Andi</div>
                    <div className='text-sm text-[#4F4F4F] font-semibold mt-1'>
                      Our Happy Client
                    </div>
                  </div>
                </div>
              </CarouselItem>

              <CarouselItem className='md:basis-1/2 lg:basis-1/3 pl-4'>
                <div className='bg-white py-8 px-8'>
                  <Image
                    src='/assets/quote.svg'
                    alt='icon'
                    width={200}
                    height={200}
                    className='w-10 h-10 md:w-[57px] md:h-[55px]'
                  />
                  <p className='text-lg md:text-2xl my-6 italic text-[#4F4F4F]'>
                    “Dari pertemuan pertama, LUMI memberikan pendekatan yang
                    sangat personal. Mereka bukan hanya agensi, mereka adalah
                    mitra pemasaran yang sangat insightful!”
                  </p>
                  <div>
                    <div className='text-base font-bold'>Sari</div>
                    <div className='text-sm text-[#4F4F4F] font-semibold mt-1'>
                      Our Happy Client
                    </div>
                  </div>
                </div>
              </CarouselItem>

              <CarouselItem className='md:basis-1/2 lg:basis-1/3 pl-4'>
                <div className='bg-white py-8 px-8'>
                  <Image
                    src='/assets/quote.svg'
                    alt='icon'
                    width={200}
                    height={200}
                    className='w-10 h-10 md:w-[57px] md:h-[55px]'
                  />
                  <p className='text-lg md:text-2xl my-6 italic text-[#4F4F4F]'>
                    “Tingkat interaksi di instagram kami kami melejit setelah
                    bekerja sama dengan LUMI, thank you team!”
                  </p>
                  <div>
                    <div className='text-base font-bold'>Hidan</div>
                    <div className='text-sm text-[#4F4F4F] font-semibold mt-1'>
                      Our Happy Client
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
