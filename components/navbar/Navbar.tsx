'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navitem from './Navitem';
import { Button } from '../ui/button';
import { HiMiniBars3BottomRight, HiMiniBars4 } from 'react-icons/hi2';
import MobileMenu from './MobileMenu';

const navLinks = [
  {
    title: "About",
    path: "#about"
  },
  {
    title: "Projects",
    path: "#projects"
  },
  {
    title: "Contact",
    path: "#contact"
  }
];

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isMdScreen, setIsMdScreen] = useState(false);

  // Handle resizing
  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 768);
    };

    handleResize(); // Check on initial render
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Close mobile menu when resizing to md and above
  useEffect(() => {
    if (isMdScreen) {
      setNavbarOpen(false);
    }
  }, [isMdScreen]);

  return (
    <nav className='bg-mycolor-400 fixed mx-auto border-b border-mycolor-300 top-0 left-0 right-0 z-10 bg-opacity-85'>
      <div className='container mx-auto lg:py-4 px-4 flex items-center justify-between'>
        <Link href="/" className='text-xl md:text-4xl text-mycolor-700  font-pacifico'>
          Sezer Kara
        </Link>

        <div className='block md:hidden'>
          {!navbarOpen ? (
            <Button onClick={() => setNavbarOpen(true)}>
              <HiMiniBars4 className='h-5 w-5' />
            </Button>
          ) : (
            <Button onClick={() => setNavbarOpen(false)}>
              <HiMiniBars3BottomRight className='h-5 w-5' />
            </Button>
          )}
        </div>

        <div className='hidden md:block md:w-auto'>
          <ul className='flex p-4 md:space-x-5 md:flex-row mt-2'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Navitem href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? (<MobileMenu links={navLinks} />) : null}
    </nav>
  );
}

export default Navbar;
