import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <nav className='container sticky top-0 left-0 right-0 z-10 flex items-center justify-between py-5'>
      <div>
        <Link href='/'>
          <Image
            src='/assets/logo/logo.png'
            alt='logo'
            width={80}
            height={80}
          />
        </Link>
      </div>
      <div className='flex gap-10 uppercase font-medium text-sm'>
        <Link href='/'>Layanan Kami</Link>
        <Link href='/'>Alur Kerja</Link>
        <Link href='/'>Tentang Kami</Link>
        <Link href='/'>Hubungi Kami</Link>
      </div>
    </nav>
  );
}
