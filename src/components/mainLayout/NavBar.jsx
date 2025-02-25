'use client';
import Image from 'next/image';
import Link from 'next/link';
import logoImg from '@/assets/geda-logo.png';

export default function NavBar() {
  return (
    <>
      <nav className="bg-customNavyTeal text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left logo title */}
          <div className="font-bold text-xl">
            <Link href="/">
              <Image src={logoImg} width={150} height={150} />{' '}
            </Link>
          </div>

          {/* Right Menu links */}
          <div className="space-x-4 ">
            <Link href="/" className="text-customTextNavy hover:text-teal-600">
              Home
            </Link>
            <Link
              href="/about"
              className=" text-customTextNavy hover:text-teal-600"
            >
              About
            </Link>
            <Link
              href="/resource"
              className="text-customTextNavy hover:text-teal-600"
            >
              Data Center
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
