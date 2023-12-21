import { TbSquareRoundedChevronDown } from 'react-icons/tb';
import { Button } from './ui/button';

function Banner() {
  return (
    <div className='bg-pattern bg-[#0CAAE3]'>
      <div className='container w-full h-full bg-gradient-to-t from-[#0CAAE3] to-[#0CAAE3]/10 pt-60 pb-60'>
        <div className='flex flex-col items-center justify-center'>
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
      </div>
    </div>
  );
}

export default Banner;
