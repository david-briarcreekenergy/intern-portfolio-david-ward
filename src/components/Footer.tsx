import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="flex items-center justify-center w-full px-3 py-3 text-white bg-gradient-to-r from-neutral-800 via-neutral-900 via-50% to-neutral-950 to-95% border border-t-neutral-900 sm:justify-between sm:px-8 md:px-20">
      <p className="text-xs sm:text-sm text-center sm:text-left">© 2024 David Ward. All rights reserved.</p>
      <div className="hidden sm:flex space-x-4">
      </div>
    </footer>
  );
}
