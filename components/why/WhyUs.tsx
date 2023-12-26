import { CircleDollarSign, Lightbulb, LineChart, Video } from 'lucide-react';
import { Badge } from '../ui/badge';

function WhyUs() {
  return (
    <div className='bg-pattern bg-[#0CAAE3]'>
      <div className='w-full h-full bg-gradient-to-t from-[#0CAAE3] to-[#0CAAE3]/10'>
        <div className='container py-16'>
          <div className='flex flex-col items-center mb-24'>
            <div className='mb-2'>
              <Badge variant='secondary'>Why Us?</Badge>
            </div>
            <div className='text-5xl text-white text-center font-bold'>
              Kenapa harus Kami?
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-16'>
            <div className='flex flex-col py-12 px-8 bg-white rounded-lg items-center relative'>
              <div className='py-3 px-3 bg-primary text-white border-[6px] border-[#0CAAE3] rounded-full absolute -top-8 left-1/2 -translate-x-1/2'>
                <CircleDollarSign className='w-7 h-7' />
              </div>
              <div className='text-center'>
                <div className='text-2xl text-[#0CAAE3] font-bold mb-2'>
                  Budget Friendly
                </div>
                <div className='text-base text-[#0CAAE3] font-medium'>
                  <span className='font-bold'>Harga Terjangkau,</span> mulai
                  dari 1 Jt per-bulan
                </div>
              </div>
            </div>

            <div className='flex flex-col py-12 px-8 bg-white rounded-lg items-center relative'>
              <div className='py-3 px-3 bg-primary text-white border-[6px] border-[#0CAAE3] rounded-full absolute -top-8 left-1/2 -translate-x-1/2'>
                <LineChart className='w-7 h-7' />
              </div>
              <div className='text-center'>
                <div className='text-2xl text-[#0CAAE3] font-bold mb-2'>
                  Progress Report
                </div>
                <div className='text-base text-[#0CAAE3] font-medium'>
                  <span className='font-bold'>Laporan Perkembangan</span> media
                  sosial Anda setiap bulan
                </div>
              </div>
            </div>

            <div className='flex flex-col py-12 px-8 bg-white rounded-lg items-center relative'>
              <div className='py-3 px-3 bg-primary text-white border-[6px] border-[#0CAAE3] rounded-full absolute -top-8 left-1/2 -translate-x-1/2'>
                <Video className='w-7 h-7' />
              </div>
              <div className='text-center'>
                <div className='text-2xl text-[#0CAAE3] font-bold mb-2'>
                  Google Meet
                </div>
                <div className='text-base text-[#0CAAE3] font-medium'>
                  Diskusi bersama Tim Kami
                </div>
              </div>
            </div>

            <div className='flex flex-col lg:col-start-2 py-12 px-8 bg-white rounded-lg items-center relative'>
              <div className='py-3 px-3 bg-primary text-white border-[6px] border-[#0CAAE3] rounded-full absolute -top-8 left-1/2 -translate-x-1/2'>
                <Lightbulb className='w-7 h-7' />
              </div>
              <div className='text-center'>
                <div className='text-2xl text-[#0CAAE3] font-bold mb-2'>
                  Free Content Idea
                </div>
                <div className='text-base text-[#0CAAE3] font-medium'>
                  <span className='font-bold'>Gratis Ide Konten</span> untuk
                  media sosial Anda
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
