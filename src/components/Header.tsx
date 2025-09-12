import NavBar from '@components/NavBar';
import DwLogo from '@public/logos/dw-anvil-transparent.png';
import { MY_NAME } from '@root/src/constants';
import Image from 'next/image';
import Link from 'next/link';
import GitHubLogo from '@public/logos/github-mark-white.png';
import LinkedInLogo from '@public/logos/InBug-White.png';

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full gap-2 px-3 py-2 text-white border-b bg-gradient-to-r from-neutral-900 via-neutral-950 to-black sm:gap-4 sm:px-8 md:px-20 border-neutral-800">
      <Link href="/" className="flex items-center flex-shrink-0 min-w-0">
        <Image
          src={DwLogo}
          alt="Logo"
          width={40}
          height={40}
          className="sm:w-[50px] sm:h-[50px]"
        />
        <span className="ml-2 font-mono text-lg font-bold tracking-wide truncate md:text-2xl lg:text-3xl sm:ml-4 md:ml-8">
          {MY_NAME}
        </span>
      </Link>
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="flex-shrink-0">
          <NavBar />
        </div>

        {/*   <div className="items-center hidden gap-2 sm:flex">
          <div className="p-1 transition duration-300 ease-in-out delay-150 rounded-md shadow hover:translate-y-1 hover:scale-110 bg-primary">
            <Link href="https://github.com/david-briarcreekenergy">
              <Image
                src={GitHubLogo}
                alt="GitHub Logo"
                width={20}
                height={20}
                className="sm:w-6 sm:h-6"
              />
            </Link>
          </div>
          <div className="p-1 transition duration-300 ease-in-out delay-150 rounded-md shadow hover:translate-y-1 hover:scale-110 bg-primary">
            <Link href="https://www.linkedin.com/in/david-ward-51859a356/">
              <Image
                src={LinkedInLogo}
                alt="LinkedIn Logo"
                width={20}
                height={20}
                className="sm:w-6 sm:h-6"
              />
            </Link>
          </div>
        </div> */}
      </div>
    </header>
  );
}
