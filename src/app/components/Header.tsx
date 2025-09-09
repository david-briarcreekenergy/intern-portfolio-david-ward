import NavBar from '@/components/NavBar';
import DwLogo from '../../../public/logos/dw-logo.png';
import { MY_NAME } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full px-20 py-2 text-white bg-gray-800">
      <Link href="/" className="flex items-center">
        <Image src={DwLogo} alt="Logo" width={50} height={50} />
        <span className="ml-2 text-2xl font-bold">{MY_NAME}</span>
      </Link>
      <NavBar />
    </header>
  );
}
