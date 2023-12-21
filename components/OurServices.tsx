import Image from 'next/image';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

function OurServices() {
  return (
    <div className='container py-16'>
      <div className='flex flex-col items-center py-16'>
        <div className='mb-2'>
          <Badge variant='secondary'>Our Services</Badge>
        </div>
        <div className='text-5xl text-white text-center font-bold'>
          Layanan Kami
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 md:gap-y-0'>
        <div className='grid grid-cols-1 md:grid-cols-2 col-span-2 w-full h-full bg-[#36B8E8]'>
          <div className='w-full h-full'>
            <Image src='/assets/1.jpg' alt='logo' width={1000} height={1000} />
          </div>
          <div className='px-6 py-10 flex flex-col my-auto gap-5'>
            <div className='font-bold text-4xl text-white'>
              Instagram Management
            </div>
            <Separator />
            <div className='font-normal text-lg text-white'>
              Semua kami urus dari <span className='font-semibold'>A-Z</span>
            </div>
            <div>
              <Button variant={'secondary'}>Hubungi Kami</Button>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 row-span-1 col-span-2 lg:col-span-1 lg:row-span-2 w-full h-full bg-[#36B8E8]'>
          <div className='w-full h-full'>
            <Image src='/assets/2.jpg' alt='logo' width={1000} height={1000} />
          </div>
          <div className='px-6 py-10 md:py-5 flex flex-col gap-5'>
            <div className='font-bold text-4xl text-white'>
              Instagram Content Design
              <br />
              <span className='font-semibold text-xl'>(non-Management)</span>
            </div>
            <Separator />
            <div className='font-normal text-lg text-white'>
              Sudah punya Tim Admin sendiri? Kami siap support kontennya!
            </div>
            <div className='items-start'>
              <Button variant={'secondary'}>Hubungi Kami</Button>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 col-span-2 w-full h-full bg-[#36B8E8]'>
          <div className='px-6 py-10 flex flex-col my-auto gap-5'>
            <div className='font-bold text-4xl text-white'>
              Instagram Ads Management
            </div>
            <Separator />
            <div className='font-normal text-lg text-white'>
              Tingkatkan penjualan dengan Iklan Berbayar Instagram
            </div>
            <div>
              <Button variant={'secondary'}>Hubungi Kami</Button>
            </div>
          </div>
          <div className='w-full h-full'>
            <Image src='/assets/3.jpg' alt='logo' width={1000} height={1000} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
