import { TbSquareRoundedChevronDown } from 'react-icons/tb';
import { Button } from './ui/button';
import { BadgeCheck, Clock, Users2 } from 'lucide-react';
import { Separator } from './ui/separator';

function Banner() {
  return (
    <div className='bg-pattern bg-[#0CAAE3]'>
      <div className='w-full h-full bg-gradient-to-t from-[#0CAAE3] to-[#0CAAE3]/10'>
        <div className='container'>
          <div className='flex flex-col items-center justify-center pt-60 pb-20'>
            <div className='font-bold text-5xl lg:text-8xl text-center uppercase drop-shadow-md text-white'>
              Lumi Studio
            </div>
            <div className='font-normal text-xl lg:text-2xl text-center my-5 text-white/75'>
              Jangkau pelanggan baru di Instagram bersama Kami!
            </div>
            <Button
              variant={'default'}
              className='gap-2 font-medium text-sm mt-2'
            >
              Scroll Down
              <TbSquareRoundedChevronDown className='h-6 w-6' />
            </Button>
          </div>
          <div className='flex flex-col items-center justify-center bg-white rounded-none md:rounded-md'>
            <div className='grid grid-cols-1 md:grid-cols-3 w-full h-full'>
              <div className='flex bg-white py-6 px-10 md:px-0 items-center md:justify-center gap-10'>
                <div className='py-2 px-2 bg-primary text-white rounded-full'>
                  <Clock />
                </div>
                <div className='flex flex-col items-start md:items-center'>
                  <div className='text-2xl text-[#0CAAE3] font-bold'>6+</div>
                  <div className='text-sm text-[#0CAAE3] font-semibold'>
                    Years of Experience
                  </div>
                </div>
              </div>
              <div className='flex bg-white py-6 md:py-0 md:my-6 mx-10 md:mx-0 items-center md:justify-center gap-10 border-[#0CAAE3] md:border-x-2 border-y-2 md:border-y-0'>
                <div className='py-2 px-2 bg-primary text-white rounded-full'>
                  <BadgeCheck />
                </div>
                <div className='flex flex-col items-start md:items-center'>
                  <div className='text-2xl text-[#0CAAE3] font-bold'>670+</div>
                  <div className='text-sm text-[#0CAAE3] font-semibold'>
                    Completed Projects
                  </div>
                </div>
              </div>
              <div className='flex bg-white py-6 px-10 md:px-0 items-center md:justify-center gap-10'>
                <div className='py-2 px-2 bg-primary text-white rounded-full'>
                  <Users2 />
                </div>
                <div className='flex flex-col items-start md:items-center'>
                  <div className='text-2xl text-[#0CAAE3] font-bold'>300+</div>
                  <div className='text-sm text-[#0CAAE3] font-semibold'>
                    Happy Clients
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
