import Image from 'next/image';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { TbBrandWhatsapp, TbSquareRoundedChevronDown } from 'react-icons/tb';
import { Instagram, Mail } from 'lucide-react';
import Link from 'next/link';

function Footer() {
  return (
    <div>
      <div className='bg-[#2B9FD8] border-b-2 border-white'>
        <div className='container'>
          <div className='relative'>
            <div className='bg-pattern bg-[#0CAAE3] w-full rounded-2xl border-4 border-white overflow-hidden absolute -top-[220px] sm:-top-[175px] md:-top-48 lg:-top-48 xl:-top-40 left-1/2 -translate-x-1/2'>
              <div className='w-full h-full flex bg-gradient-to-t lg:bg-gradient-to-l from-[#0CAAE3] to-[#0CAAE3]/10 rounded-2xl'>
                <div className='flex flex-col text-center lg:text-start px-5 sm:px-14 md:px-16 py-14 w-full lg:w-4/5 z-10'>
                  <div className='mb-2'>
                    <Badge variant='secondary'>Contact Us</Badge>
                  </div>
                  <div className='text-4xl md:text-5xl text-white font-bold drop-shadow-md'>
                    Tertarik berkolaborasi
                    <br /> bersama Kami?
                  </div>
                  <div className='mt-6 flex flex-wrap flex-col md:flex-row justify-center lg:justify-start gap-2'>
                    <Button
                      variant={'destructive'}
                      className='gap-2 font-medium text-sm mt-2'
                    >
                      <Mail className='h-6 w-6' />
                      <Link href='mailto:lumistudio06@gmail.com'>
                        Hubungi Kami melalui Email
                      </Link>
                    </Button>
                    <Button
                      variant={'default'}
                      className='gap-2 font-medium text-sm mt-2'
                    >
                      <TbBrandWhatsapp className='h-6 w-6' />
                      <Link href='https://wa.me/message/LULXNY427CQWI1'>
                        Hubungi Kami di WhatsApp
                      </Link>
                    </Button>
                    <Button
                      variant={'secondary'}
                      className='gap-2 font-medium text-sm mt-2'
                    >
                      <Instagram className='h-6 w-6' />
                      <Link href='https://www.instagram.com/lumi.std/'>
                        Kunjungi Instagram Kami
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className='hidden lg:block w-1/5 h-[300px] relative'>
                  <div className='md:w-[400px] lg:w-[450px] absolute -right-10 md:-top-5 lg:-top-10'>
                    <Image
                      src='/assets/logo/logo.png'
                      alt='logo'
                      width={1000}
                      height={1000}
                      className='-rotate-[25deg]'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='pt-72 md:pt-60'>
              <div className='text-center text-white text-xl font-extrabold uppercase'>
                Lumi Studio
              </div>
              <div className='flex flex-wrap gap-4 md:gap-10 text-white justify-center my-5'>
                <div>Layanan Kami</div>
                <div>Alur Kerja</div>
                <div>Tentang Kami</div>
                <div>Hubungi Kami</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#2B9FD8] py-3 text-center text-white font-semibold'>
        <div className='container'>
          © 2024 Lumi Studio. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
