'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import Button from '@/components/buttons/Button';

const transition = {
  type: 'spring',
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className='relative '>
      <motion.p
        transition={{ duration: 0.3 }}
        className='cursor-pointer text-black hover:opacity-[0.9] dark:text-white'
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className='absolute left-1/2 top-[calc(100%_+_1.2rem)] -translate-x-1/2 transform pt-4'>
              <motion.div
                transition={transition}
                layoutId='active' // layoutId ensures smooth animation
                className='overflow-hidden rounded-2xl border border-black/[0.2] bg-white shadow-xl backdrop-blur-sm dark:border-white/[0.2] dark:bg-black'
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className='h-full w-max p-4'
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className='flex space-x-2'>
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className='shrink-0 rounded-md shadow-2xl'
      />
      <div>
        <h4 className='mb-1 text-xl font-bold text-black dark:text-white'>
          {title}
        </h4>
        <p className='max-w-[10rem] text-sm text-neutral-700 dark:text-neutral-300'>
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className='text-neutral-700 hover:text-black dark:text-neutral-200 '
    >
      {children}
    </Link>
  );
};

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  // Add scroll event listener to track scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Change background when scrolled more than 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);

    // Call once on mount to set initial state
    handleScroll();

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed z-50 w-full transition-colors duration-300 ${
        isScrolled ? 'bg-black/95 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div
        className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'
        onMouseLeave={() => setActive(null)}
      >
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link href='/'>
              <Image
                src='https://ulai.in/static/media/ULAILogo.caf5f847d8249c852fbbf7ac036c7256.svg'
                alt='ULAI Logo'
                width={100}
                height={64}
                className='h-12 w-auto'
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-center space-x-8'>
              <Link
                href='#'
                className='text-gray-300 transition-colors hover:text-white'
              >
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item='Solutions'
                >
                  <div className='flex flex-col space-y-4 text-sm'>
                    <HoveredLink href='/web-dev'>Whatsapp</HoveredLink>
                    <HoveredLink href='/interface-design'>
                      Integration
                    </HoveredLink>
                    <HoveredLink href='/seo'>Solutions</HoveredLink>
                    <HoveredLink href='/branding'>Instagram</HoveredLink>
                  </div>
                </MenuItem>
              </Link>
              <Link
                href='#'
                className='text-gray-300 transition-colors hover:text-white'
              >
                <MenuItem setActive={setActive} active={active} item='Products'>
                  <div className='  grid grid-cols-2 gap-10 p-4 text-sm'>
                    <ProductItem
                      title='AsKii'
                      href='/product/askii'
                      src='https://assets.aceternity.com/demos/algochurn.webp'
                      description='Your website product personalization'
                    />
                    <ProductItem
                      title='Voice Sales Agent'
                      href='/product/voice-ops-agent'
                      src='https://assets.aceternity.com/demos/tailwindmasterkit.webp'
                      description='Talks to your consumers and markets your product'
                    />
                    <ProductItem
                      title='E-Commerce AI Assistant'
                      href='/product/ecomAssistant'
                      src='https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png'
                      description='Never write from scratch again. Go from idea to blog in minutes.'
                    />
                    <ProductItem
                      title='WhatsApp Shopping'
                      href='/product/whatsapp-agent'
                      src='https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png'
                      description='Respond to government RFPs, RFIs and RFQs 10x faster using AI'
                    />
                  </div>
                </MenuItem>
              </Link>
              <Link
                href='/contact'
                className='text-gray-300 transition-colors hover:text-white'
              >
                Contact
              </Link>
              <Button
                login
                className='rounded-full bg-blue-500 px-6 py-2 text-white transition hover:bg-blue-600'
              >
                Try for Free
              </Button>
            </div>
          </div>

          {/* Login Button (Desktop) */}
          <div className='hidden md:block'>
            <button
              onClick={() => {
                window.location.href = 'https://app.ulai.in';
              }}
              className='rounded-xl border-2 border-[#64ffda] px-5 py-2 font-bold text-white transition-all hover:scale-105 hover:bg-[#64ffda] hover:text-[#0a192f]'
            >
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className='flex md:hidden'>
            <button
              type='button'
              className={`inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ${
                isScrolled ? 'hover:bg-gray-700' : 'hover:bg-black/30'
              }`}
              aria-controls='mobile-menu'
              aria-expanded='false'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className='sr-only'>Open main menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} ${
          isScrolled ? 'bg-black/95' : 'bg-black/90'
        }`}
        id='mobile-menu'
      >
        <div className='space-y-1 px-2 pb-3 pt-2'>
          <Link
            href='#'
            className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
          >
            Features
          </Link>
          <Link
            href='#'
            className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
          >
            Pricing
          </Link>
          <Link
            href='#'
            className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
          >
            Contact
          </Link>
          <button className='mt-2 w-full rounded-md bg-blue-500 px-3 py-2 text-center text-base font-medium text-white hover:bg-blue-600'>
            Try for Free
          </button>
          <button className='mt-2 w-full rounded-md border-2 border-[#64ffda] px-3 py-2 text-center text-base font-medium text-white hover:bg-[#64ffda] hover:text-[#0a192f]'>
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
