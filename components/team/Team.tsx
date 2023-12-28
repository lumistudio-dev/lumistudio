import Image from 'next/image';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

function Team() {
  return (
    <div className='container py-16'>
      <div className='flex items-center justify-center md:justify-between mb-24'>
        <div className='text-center md:text-start'>
          <div className='mb-2'>
            <Badge variant='secondary'>Our Team</Badge>
          </div>
          <div className='text-5xl text-white font-bold'>Temui Tim Kami</div>
        </div>
        <div className='hidden md:block'>
          <Button
            variant={'secondary'}
            className='text-lg text-black font-medium'
          >
            Hubungi Kami
          </Button>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'>
        <div>
          <div className='flex flex-col items-center gap-3 py-5 px-5 bg-white rounded-t-3xl'>
            <Image
              src='/assets/team/haz.png'
              alt='haz'
              width={200}
              height={200}
              className='w-[120px] h-[120px] rounded-full'
            />
            <div className='uppercase text-2xl font-bold'>Haz</div>
          </div>
          <div className='uppercase text-base font-semibold py-3 text-center bg-primary text-white rounded-b-3xl'>
            Team Leader
          </div>
        </div>
        <div>
          <div className='flex flex-col items-center gap-3 py-5 px-5 bg-white rounded-t-3xl'>
            <Image
              src='/assets/team/lu.png'
              alt='lu'
              width={200}
              height={200}
              className='w-[120px] h-[120px] rounded-full'
            />
            <div className='uppercase text-2xl font-bold'>Lu</div>
          </div>
          <div className='uppercase text-base font-semibold py-3 text-center bg-primary text-white rounded-b-3xl'>
            Creative
          </div>
        </div>
        <div>
          <div className='flex flex-col items-center gap-3 py-5 px-5 bg-white rounded-t-3xl'>
            <Image
              src='/assets/team/ton.png'
              alt='ton'
              width={200}
              height={200}
              className='w-[120px] h-[120px] rounded-full'
            />
            <div className='uppercase text-2xl font-bold'>Ton</div>
          </div>
          <div className='uppercase text-base font-semibold py-3 text-center bg-primary text-white rounded-b-3xl'>
            Creative
          </div>
        </div>
        <div>
          <div className='flex flex-col items-center gap-3 py-5 px-5 bg-white rounded-t-3xl'>
            <Image
              src='/assets/team/zar.png'
              alt='zar'
              width={200}
              height={200}
              className='w-[120px] h-[120px] rounded-full'
            />
            <div className='uppercase text-2xl font-bold'>Zar</div>
          </div>
          <div className='uppercase text-base font-semibold py-3 text-center bg-primary text-white rounded-b-3xl'>
            Creative
          </div>
        </div>
        <div className='lg:col-start-2'>
          <div className='flex flex-col items-center gap-3 py-5 px-5 bg-white rounded-t-3xl'>
            <Image
              src='/assets/team/muz.png'
              alt='muz'
              width={200}
              height={200}
              className='w-[120px] h-[120px] rounded-full'
            />
            <div className='uppercase text-2xl font-bold'>Muz</div>
          </div>
          <div className='uppercase text-base font-semibold py-3 text-center bg-primary text-white rounded-b-3xl'>
            Creative
          </div>
        </div>
        <div>
          <div className='flex flex-col items-center gap-3 py-5 px-5 bg-white rounded-t-3xl'>
            <Image
              src='/assets/team/ni.png'
              alt='ni'
              width={200}
              height={200}
              className='w-[120px] h-[120px] rounded-full'
            />
            <div className='uppercase text-2xl font-bold'>Ni</div>
          </div>
          <div className='uppercase text-base font-semibold py-3 text-center bg-primary text-white rounded-b-3xl'>
            Admin
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
