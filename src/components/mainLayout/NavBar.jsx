'use client';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import logoImg from '@/assets/geda-logo.png';
import { DocumentIcon } from '@heroicons/react';
export default function NavBar() {
  const pathname = usePathname();

  //hiding global footer from specified route
  if (pathname.startsWith('/upload')) return null;

  return (
    <>
      <nav className="bg-customNavyTeal text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left logo title */}
          <div className="font-bold text-xl">
            <Link href="/">
              <Image src={logoImg} width={150} height={150} alt="geda-logo" />
            </Link>
          </div>

          {/* Right Menu links */}
          <div className="flex items-center space-x-4 ">
            <Link href="/" className="text-customTextNavy hover:text-teal-300">
              Home
            </Link>
            <Link
              href="/about"
              className=" text-customTextNavy hover:text-teal-300"
            >
              About
            </Link>
            <Link
              href="/resource"
              className="text-customTextNavy hover:text-teal-300"
            >
              Data Center
            </Link>

            {/* data upload icon */}
            <Link
              href="/upload"
              className="flex items-center space-x-1 text-customTextNavy hover:text-teal-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>

              <span>Upload Data</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
