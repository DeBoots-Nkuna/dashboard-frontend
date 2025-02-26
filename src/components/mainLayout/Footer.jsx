'use client';

export default function Footer() {
  return (
    <footer className="bg-customNavyTeal text-white py-4 h-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
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
          <a href="/terms" className="text-sm" target="_blank">
            Terms &amp; Conditions
          </a>
          <a href="/privacy" className="text-sm" target="_blank">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
