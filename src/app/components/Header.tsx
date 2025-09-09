import NavBar from '@/components/NavBar';
import DwLogo from '../../../public/logos/dw-logo.png';
import { MY_NAME } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full gap-4 px-4 py-2 text-white bg-gray-800 sm:px-8 md:px-20">
      <Link href="/" className="flex items-center flex-shrink-0">
        <Image src={DwLogo} alt="Logo" width={50} height={50} />
        <span className="ml-2 text-xl font-bold sm:text-2xl">{MY_NAME}</span>
      </Link>
      <div className="flex-shrink-0">
        <NavBar />
      </div>
    </header>
  );
}
