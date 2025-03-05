'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import logoImage from '@/assets/geda-logo.png';
import Image from 'next/image';

export default function Footer() {
  const pathname = usePathname();

  //hiding global footer from specified route
  if (pathname.startsWith('/upload')) return null;

  return (
    <footer className="bg-customNavyTeal text-white py-4 h-20">
      {/* image  */}
      <div className="container mx-auto flex flex-col items-center">
        <div className="mb-1">
          <Image src={logoImage} alt="geda-logo" width={50} height={50} />
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center ">
        <p className="text-sm">&copy; 2025 Website. All rights reserved</p>

        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="/about" className="text-sm" target="_blank">
            About Us
          </a>
          <a
            href="https://genderenvironmentdata.org/"
            className="text-sm"
            target="_blank"
          >
            Contact us
          </a>
        </div>

        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="" className="text-sm" target="_blank">
            Terms &amp; Conditions
          </a>
          <a href="" className="text-sm" target="_blank">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
