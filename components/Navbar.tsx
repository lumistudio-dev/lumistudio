import Image from 'next/image';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import { Button } from './ui/button';
import { AlignRight, Figma, Github, Instagram } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

function Navbar() {
  return (
    <nav className='container absolute top-0 left-0 right-0 flex items-center justify-center py-5'>
      <div className='hidden md:block md:w-5/12 lg:w-4/12 justify-start pr-6'>
        <div className='flex justify-between uppercase font-medium text-sm text-white/80 tracking-widest'>
          <Link href='/'>Layanan Kami</Link>
          <Link href='/'>Alur Kerja</Link>
        </div>
      </div>
      <div className='w-full md:w-2/12 lg:w-4/12 flex md:justify-center'>
        <Link href='/'>
          <Image
            src='/assets/logo/logo.png'
            alt='logo'
            width={1000}
            height={1000}
            className='w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32'
          />
        </Link>
      </div>
      <div className='hidden md:block md:w-5/12 lg:w-4/12 justify-end pl-6'>
        <div className='flex justify-between uppercase font-medium text-sm text-white/80 tracking-widest'>
          <Link href='/'>Tentang Kami</Link>
          <Link href='/'>Hubungi Kami</Link>
        </div>
      </div>
      <div className='flex gap-2'>
        <div className='md:hidden'>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant='secondary' size='icon'>
                <AlignRight />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className='flex flex-col text-white gap-10 py-10'>
                <Link href='/'>Layanan Kami</Link>
                <Link href='/'>Alur Kerja</Link>
                <Link href='/'>Tentang Kami</Link>
                <Link href='/'>Hubungi Kami</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
