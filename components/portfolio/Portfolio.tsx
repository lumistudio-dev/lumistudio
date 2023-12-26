import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import Image from 'next/image';

function Portfolio() {
  return (
    <div className='bg-[#36B8E8]'>
      <div className='container py-16'>
        <div className='flex flex-col items-center mb-5'>
          <div className='mb-2'>
            <Badge variant='secondary'>Our Portfolio</Badge>
          </div>
          <div className='text-5xl text-white text-center font-bold'>
            Portofolio Visual Kami
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <Tabs defaultValue='jasa' className='flex flex-col w-full'>
            <ScrollArea className=''>
              <TabsList className='flex w-full'>
                <TabsTrigger value='jasa' className='w-28 md:w-1/6'>
                  Jasa
                </TabsTrigger>
                <TabsTrigger value='kesehatan' className='w-28 md:w-1/6'>
                  Kesehatan
                </TabsTrigger>
                <TabsTrigger value='fnb' className='w-28 md:w-1/6'>
                  F&B
                </TabsTrigger>
                <TabsTrigger value='retail' className='w-28 md:w-1/6'>
                  Retail
                </TabsTrigger>
                <TabsTrigger value='kecantikan' className='w-28 md:w-1/6'>
                  Kecantikan
                </TabsTrigger>
                <TabsTrigger value='property' className='w-28 md:w-1/6'>
                  Property
                </TabsTrigger>
              </TabsList>
              <ScrollBar orientation='horizontal' />
            </ScrollArea>

            <TabsContent value='jasa' className='mt-16'>
              <div className='flex flex-col text-center bg-[#0CAAE3] text-white py-5 mb-2'>
                <div className='text-xl font-bold uppercase'>
                  Timor Logistic
                </div>
                <div>@timorlogistic</div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                <div className='col-span-full row-span-full md:col-span-2 md:row-span-2 bg-white aspect-square'>
                  <Image
                    src='/assets/portfolio/timorlogistic/1.webp'
                    alt='logo'
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className='bg-white aspect-square'>
                  <Image
                    src='/assets/portfolio/timorlogistic/2.webp'
                    alt='logo'
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className='bg-white aspect-square'>
                  <Image
                    src='/assets/portfolio/timorlogistic/3.webp'
                    alt='logo'
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className='bg-white aspect-square'>
                  <Image
                    src='/assets/portfolio/timorlogistic/4.webp'
                    alt='logo'
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className='bg-white aspect-square'>
                  <Image
                    src='/assets/portfolio/timorlogistic/9.webp'
                    alt='logo'
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value='kesehatan' className='mt-16'>
              <div className='flex flex-col text-center bg-[#0CAAE3] text-white py-5 mb-2'>
                <div className='text-xl font-bold uppercase'>
                  RSIA Buah Delima
                </div>
                <div>@rsiabuahdelima</div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                <div className='col-span-full row-span-full md:col-span-2 md:row-span-2 bg-white aspect-square'>
                  <Image
                    src='/assets/portfolio/rsiabuahdelima/1.heic'
                    alt='logo'
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className='bg-white aspect-square'>
                  <Image
                    src='/assets/portfolio/rsiabuahdelima/2.heic'
                    alt='logo'
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className='bg-white aspect-square'>
                  <Image
                    src='/assets/portfolio/rsiabuahdelima/3.heic'
                    alt='logo'
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className='bg-white aspect-square'>
                  <Image
                    src='/assets/portfolio/rsiabuahdelima/4.heic'
                    alt='logo'
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className='bg-white aspect-square'>
                  <Image
                    src='/assets/portfolio/rsiabuahdelima/5.heic'
                    alt='logo'
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value='fnb' className='mt-16'>
              <div className='flex flex-col text-center bg-[#0CAAE3] text-white py-5 mb-2'>
                <div className='text-xl font-bold uppercase'>
                  Suan Thai 1988
                </div>
                <div>@suanthai1988</div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                <div className='col-span-full row-span-full md:col-span-2 md:row-span-2 bg-white aspect-square'>
                  <Image
                    src='/assets/portfolio/suanthai1988/1.heic'
                    alt='logo'
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className='bg-white aspect-square'>
                  <Image
                    src='/assets/portfolio/suanthai1988/2.heic'
                    alt='logo'
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className='bg-white aspect-square'>
                  <Image
                    src='/assets/portfolio/suanthai1988/3.heic'
                    alt='logo'
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className='bg-white aspect-square'>
                  <Image
                    src='/assets/portfolio/suanthai1988/4.heic'
                    alt='logo'
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className='bg-white aspect-square'>
                  <Image
                    src='/assets/portfolio/suanthai1988/5.heic'
                    alt='logo'
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value='retail' className='mt-16'>
              <div className='flex flex-col text-center bg-[#0CAAE3] text-white py-5 mb-2'>
                <div className='text-xl font-bold uppercase'>Ceilo Perfume</div>
                <div>@ceiloperfume</div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                <div className='col-span-full row-span-full md:col-span-2 md:row-span-2 bg-white aspect-square'>
                  <Image
                    src='/assets/portfolio/ceiloperfume/3.webp'
                    alt='logo'
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className='bg-white aspect-square'>
                  <Image
                    src='/assets/portfolio/ceiloperfume/2.webp'
                    alt='logo'
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className='bg-white aspect-square'>
                  <Image
                    src='/assets/portfolio/ceiloperfume/6.webp'
                    alt='logo'
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className='bg-white aspect-square'>
                  <Image
                    src='/assets/portfolio/ceiloperfume/4.webp'
                    alt='logo'
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className='bg-white aspect-square'>
                  <Image
                    src='/assets/portfolio/ceiloperfume/5.webp'
                    alt='logo'
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value='kecantikan' className='mt-16'>
              <div className='flex flex-col text-center bg-[#0CAAE3] text-white py-5 mb-2'>
                <div className='text-xl font-bold uppercase'>
                  D`Aesthetic Clinic
                </div>
                <div>@daesthetics_clinic</div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                <div className='col-span-full row-span-full md:col-span-2 md:row-span-2 bg-white aspect-square'>
                  <Image
                    src='/assets/portfolio/daesthetics_clinic/4.webp'
                    alt='logo'
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className='bg-white aspect-square'>
                  <Image
                    src='/assets/portfolio/daesthetics_clinic/2.webp'
                    alt='logo'
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className='bg-white aspect-square'>
                  <Image
                    src='/assets/portfolio/daesthetics_clinic/3.webp'
                    alt='logo'
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className='bg-white aspect-square'>
                  <Image
                    src='/assets/portfolio/daesthetics_clinic/1.webp'
                    alt='logo'
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className='bg-white aspect-square'>
                  <Image
                    src='/assets/portfolio/daesthetics_clinic/5.webp'
                    alt='logo'
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value='property' className='mt-16'>
              <div className='flex flex-col text-center bg-[#0CAAE3] text-white py-5 mb-2'>
                <div className='text-xl font-bold uppercase'>Kyo Property</div>
                <div>@kyoproperti</div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                <div className='col-span-full row-span-full md:col-span-2 md:row-span-2 bg-white aspect-square'>
                  <Image
                    src='/assets/portfolio/kyoproperti/3.heic'
                    alt='logo'
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className='bg-white aspect-square'>
                  <Image
                    src='/assets/portfolio/kyoproperti/2.heic'
                    alt='logo'
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className='bg-white aspect-square'>
                  <Image
                    src='/assets/portfolio/kyoproperti/1.heic'
                    alt='logo'
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className='bg-white aspect-square'>
                  <Image
                    src='/assets/portfolio/kyoproperti/4.heic'
                    alt='logo'
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className='bg-white aspect-square'>
                  <Image
                    src='/assets/portfolio/kyoproperti/5.heic'
                    alt='logo'
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
