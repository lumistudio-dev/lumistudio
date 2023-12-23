import { Separator } from './ui/separator';
import { Badge } from './ui/badge';

function Campaign() {
  return (
    <div className='bg-[#36B8E8]'>
      <div className='container py-16'>
        <div className='flex flex-col items-center mb-16'>
          <div className='mb-2'>
            <Badge variant='secondary'>Campaign Result</Badge>
          </div>
          <div className='text-5xl text-white text-center font-bold'>
            Hasil Kampanye
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          <div>
            <div className='flex flex-col bg-white py-8 px-6 gap-8'>
              <div className='text-3xl text-center text-[#2B9FD8] font-bold'>
                Jogja Orthopaedics Sport Clinic
              </div>
              <Separator className='bg-[#2B9FD8]' />
              <div className='flex flex-col gap-5 text-[#2B9FD8]'>
                <div>
                  <div className='uppercase text-base text-center font-bold'>
                    Akun Dijangkau Naik
                  </div>
                  <div className='text-5xl text-primary text-center font-bold'>
                    108,9<span className='text-3xl'>%</span>
                  </div>
                </div>
                <div>
                  <div className='uppercase text-base text-center font-bold'>
                    Interaksi Naik
                  </div>
                  <div className='text-5xl text-primary text-center font-bold'>
                    86<span className='text-3xl'>%</span>
                  </div>
                </div>
                <div>
                  <div className='uppercase text-base text-center font-bold'>
                    Impresi Naik
                  </div>
                  <div className='text-5xl text-primary text-center font-bold'>
                    36,7<span className='text-3xl'>%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='uppercase text-white text-center text-3xl font-black py-5 bg-primary px-2'>
              Dalam 1 Bulan
            </div>
          </div>
          <div>
            <div className='flex flex-col bg-white py-8 px-6 gap-8'>
              <div className='text-3xl text-center text-[#2B9FD8] font-bold'>
                Suan Thai
                <br />
                Resto
              </div>
              <Separator className='bg-[#2B9FD8]' />
              <div className='flex flex-col gap-5 text-[#2B9FD8]'>
                <div>
                  <div className='uppercase text-base text-center font-bold'>
                    Akun Dijangkau Naik
                  </div>
                  <div className='text-5xl text-primary text-center font-bold'>
                    78,6<span className='text-3xl'>%</span>
                  </div>
                </div>
                <div>
                  <div className='uppercase text-base text-center font-bold'>
                    Interaksi Naik
                  </div>
                  <div className='text-5xl text-primary text-center font-bold'>
                    230<span className='text-3xl'>%</span>
                  </div>
                </div>
                <div>
                  <div className='uppercase text-base text-center font-bold'>
                    Impresi Naik
                  </div>
                  <div className='text-5xl text-primary text-center font-bold'>
                    67,9<span className='text-3xl'>%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='uppercase text-white text-center text-3xl font-black py-5 bg-primary px-2'>
              Dalam 1 Bulan
            </div>
          </div>
          <div>
            <div className='flex flex-col bg-white py-8 px-6 gap-8'>
              <div className='text-3xl text-center text-[#2B9FD8] font-bold'>
                Highstreet Interior Studio
              </div>
              <Separator className='bg-[#2B9FD8]' />
              <div className='flex flex-col gap-5 text-[#2B9FD8]'>
                <div>
                  <div className='uppercase text-base text-center font-bold'>
                    Akun Dijangkau Naik
                  </div>
                  <div className='text-5xl text-primary text-center font-bold'>
                    31,4<span className='text-3xl'>%</span>
                  </div>
                </div>
                <div>
                  <div className='uppercase text-base text-center font-bold'>
                    Interaksi Naik
                  </div>
                  <div className='text-5xl text-primary text-center font-bold'>
                    42<span className='text-3xl'>%</span>
                  </div>
                </div>
                <div>
                  <div className='uppercase text-base text-center font-bold'>
                    Impresi Naik
                  </div>
                  <div className='text-5xl text-primary text-center font-bold'>
                    125<span className='text-3xl'>%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='uppercase text-white text-center text-3xl font-black py-5 bg-primary px-2'>
              Dalam 1 Bulan
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Campaign;
