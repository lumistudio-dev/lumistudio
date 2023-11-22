import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TbSquareRoundedChevronDown } from 'react-icons/tb';

export default function Home() {
  return (
    <div className=''>
      <nav className='container absolute flex items-center justify-between py-5'>
        <div>
          <Link href='/'>
            <Image
              src='/assets/logo/logo.png'
              alt='logo'
              width={80}
              height={80}
            />
          </Link>
        </div>
        <div className='flex gap-10 uppercase font-medium text-sm'>
          <Link href='/'>Layanan Kami</Link>
          <Link href='/'>Alur Kerja</Link>
          <Link href='/'>Tentang Kami</Link>
          <Link href='/'>Hubungi Kami</Link>
        </div>
      </nav>
      <div className='bg-pattern bg-[#49B1E4]'>
        <div className='container w-full h-full bg-gradient-to-t from-[#49B1E4] pt-44 pb-60'>
          <div className='flex flex-col items-center justify-center text-white'>
            <div className='font-bold text-8xl uppercase drop-shadow-md'>
              Lumi Studio
            </div>
            <div className='font-normal text-2xl text-center my-5'>
              Jangkau pelanggan baru di Instagram <br /> bersama Kami!
            </div>
            <Button
              variant={'default'}
              className='gap-2 font-medium text-sm mt-2'
            >
              Scroll Down
              <TbSquareRoundedChevronDown className='h-6 w-6' />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
