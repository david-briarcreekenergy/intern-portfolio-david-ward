import Image from 'next/image';
import GitHubLogo from '@public/logos/github-mark-white.png';
import LinkedInLogo from '@public/logos/InBug-White.png';

export default function Footer() {
  return (
    <footer className="flex items-center justify-center w-full px-20 py-2 text-white bg-gray-800">
      <p>© 2024 David Ward. All rights reserved.</p>
      <Image
        src={GitHubLogo}
        alt="GitHub Logo"
        width={24}
        height={24}
        className="ml-2"
      />
      <Image
        src={LinkedInLogo}
        alt="LinkedIn Logo"
        width={24}
        height={24}
        className="ml-2"
      />
    </footer>
  );
}
