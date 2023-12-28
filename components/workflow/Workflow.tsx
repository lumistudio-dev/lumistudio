import Image from 'next/image';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

function Workflow() {
  return (
    <div className='container'>
      <div className='flex flex-col items-center mt-16'>
        <div className='mb-2'>
          <Badge variant='secondary'>Workflow</Badge>
        </div>
        <div className='text-5xl text-white text-center font-bold'>
          Alur Kerja
        </div>
      </div>

      <div className='flex flex-col-reverse lg:flex-row my-16 lg:relative items-center'>
        <div className='flex flex-col w-full lg:w-4/6 bg-[#36B8E8] lg:bg-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#36B8E8] py-6 px-6 md:py-10 md:px-10 lg:py-16 lg:pl-16 lg:pr-72 lg:rounded-r-[120px]'>
          <div className='text-2xl text-white font-bold'>
            Lihat bagaimana Alur Kerja Kami:
          </div>
          <div className='flex flex-col border-l-4 border-primary ml-4 lg:ml-10 my-10 gap-5'>
            <div className='flex gap-5 relative'>
              <div className='w-6 h-6 absolute -left-[14px] rounded-full border-4 border-primary bg-white'></div>
              <div className='ml-8'>
                <div className='text-base text-white font-bold mb-2'>
                  Pilih paket Anda
                </div>
                <p className='text-base text-white/80'>
                  Pastikan yang benar-benar sesuai dengan kebutuhan usaha Anda.
                </p>
              </div>
            </div>

            <div className='flex gap-5 relative'>
              <div className='w-6 h-6 absolute -left-[14px] rounded-full border-4 border-primary bg-white'></div>
              <div className='ml-8'>
                <div className='text-base text-white font-bold mb-2'>
                  Pembayaran
                </div>
                <p className='text-base text-white/80'>
                  Lunas 100% atau Dp 50% di awal dan pelunasan di akhir bulan.
                </p>
              </div>
            </div>

            <div className='flex gap-5 relative'>
              <div className='w-6 h-6 absolute -left-[14px] rounded-full border-4 border-primary bg-white'></div>
              <div className='ml-8'>
                <div className='text-base text-white font-bold mb-2'>
                  Diskusi Bersama
                </div>
                <p className='text-base text-white/80'>
                  Gabung dengan grup WhatsApp ekslusif Lumi
                </p>
              </div>
            </div>

            <div className='flex gap-5 relative'>
              <div className='w-6 h-6 absolute -left-[14px] rounded-full border-4 border-primary bg-white'></div>
              <div className='ml-8'>
                <div className='text-base text-white font-bold'>
                  Project Dimulai 🚀
                </div>
              </div>
            </div>
          </div>
          <div>
            <Button variant={'secondary'}>Hubungi Kami</Button>
          </div>
        </div>
        <div className='w-full lg:w-2/6 lg:absolute right-64'>
          <div className='lg:w-[600px] lg:h-[350px] lg:relative'>
            <div className='hidden lg:block absolute -top-12 -right-12 z-20 w-32 h-32'>
              <Image
                src='/assets/circle.svg'
                alt='logo'
                width={1000}
                height={1000}
              />
            </div>
            <Image
              src='/assets/pic.png'
              alt='Picture'
              width={1000}
              height={1000}
              className='rounded-none lg:rounded-[60px] drop-shadow-none lg:drop-shadow-2xl'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workflow;
