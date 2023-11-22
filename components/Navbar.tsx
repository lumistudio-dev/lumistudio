import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className='container absolute flex items-center justify-between py-5'>
      <div className='w-full md:w-4/12 lg:w-5/12 flex justify-center md:justify-start'>
        <Link href='/'>
          <Image
            src='/assets/logo/logo.png'
            alt='logo'
            width={80}
            height={80}
          />
        </Link>
      </div>
      <div className='hidden md:block md:w-8/12 lg:w-7/12'>
        <div className='flex justify-between uppercase font-medium text-sm text-white/80 tracking-widest'>
          <Link href='/'>Layanan Kami</Link>
          <Link href='/'>Alur Kerja</Link>
          <Link href='/'>Tentang Kami</Link>
          <Link href='/'>Hubungi Kami</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
