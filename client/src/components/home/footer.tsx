import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-between text-base p-4 md:px-36">
      <Link href="#logo" className="font-bold text-2xl mb-4 md:mb-0">
        Leo & Cia Academia
      </Link>
      <div className="hidden md:flex items-center gap-8 md:gap-10 h-[72px]">
        <Link href="#">About</Link>
        <Link href="#">Services</Link>
        <Link href="#">Pricing</Link>
        <Link href="#">Contact</Link>
      </div>
      <div className="flex flex-row space-x-4 mt-4 md:mt-0">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-blue-600 w-6 h-6" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-blue-400 w-6 h-6" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-pink-500 w-6 h-6" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-blue-700 w-6 h-6" />
        </a>
      </div>
    </div>
  );
};
