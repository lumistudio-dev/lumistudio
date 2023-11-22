import { TbSquareRoundedChevronDown } from 'react-icons/tb';
import { Button } from './ui/button';

function Banner() {
  return (
    <div className='bg-pattern bg-[#49B1E4]'>
      <div className='container w-full h-full bg-gradient-to-t from-[#49B1E4] pt-44 pb-60'>
        <div className='flex flex-col items-center justify-center text-white'>
          <div className='font-bold text-5xl lg:text-8xl text-center uppercase drop-shadow-md'>
            Lumi Studio
          </div>
          <div className='font-normal text-xl lg:text-2xl text-center my-5'>
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
