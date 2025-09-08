import NavBar from '@/components/NavBar';
import DwLogo from '../../../public/dw-logo.png';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full px-20 py-2 bg-gray-800 text-white flex items-center justify-between">
      <Image src={DwLogo} alt="Logo" width={50} height={50} />
      <NavBar />
    </header>
  );
}
