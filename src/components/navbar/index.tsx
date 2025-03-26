'use client';
import { motion } from 'framer-motion';
import Hamburger from 'hamburger-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import Button from '@/components/buttons/Button';

import askii from '@/assets/askii.webp';
import ulai from '@/assets/ulai.webp';
import voice from '@/assets/voice.webp';
import whatsapp from '@/assets/whatsapp.webp';

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
  mobile,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  mobile?: boolean;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className='relative'>
      <motion.p
        transition={{ duration: 0.3 }}
        className='cursor-pointer  text-white hover:opacity-[0.9]'
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
                className='overflow-hidden rounded-2xl border border-white/[0.2] bg-black shadow-xl backdrop-blur-sm'
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className={
                    mobile ? 'h-[300px] w-[300px]' : 'h-full w-max p-4'
                  }
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
  mobile,
}: {
  title: string;
  description: string;
  href: string;
  src: any;
  mobile?: boolean;
}) => {
  return (
    <Link href={href} className={mobile ? 'flex space-x-1' : 'flex space-x-2'}>
      {!mobile && (
        <Image
          src={src}
          width={mobile ? 50 : 140}
          height={mobile ? 25 : 70}
          alt={title}
          className='shrink-0 rounded-md shadow-2xl'
        />
      )}
      <div>
        <h4
          className={`mb-1 ${
            mobile ? 'text-sm' : 'text-xl'
          } font-bold text-white`}
        >
          {title}
        </h4>
        <p
          className={`max-w-[10rem] ${
            mobile ? 'text-[8px]' : 'text-sm'
          } text-sm text-neutral-300`}
        >
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link {...rest} className=' text-neutral-200 hover:text-green-600'>
      {children}
    </Link>
  );
};

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const toggleDropdown = (item: string) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };
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
                    <HoveredLink href='#stats'>Statistics</HoveredLink>
                    <HoveredLink href='#discovery'>RAG bot</HoveredLink>
                    <HoveredLink href='#postsales'>
                      Post Sales Support
                    </HoveredLink>
                    <HoveredLink href='#voice'>Voice Agent</HoveredLink>
                    <HoveredLink href='/branding'>
                      Growth Oriented Dashboard
                    </HoveredLink>
                    <HoveredLink href='#campaigns'>
                      Automated Campaigns
                    </HoveredLink>
                    <HoveredLink href='#partners'>Our Clients</HoveredLink>
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
                      src={askii}
                      description='Your website product personalization'
                    />
                    <ProductItem
                      title='Voice Sales Agent'
                      href='/product/voice-ops-agent'
                      src={voice}
                      description='Talks to your consumers and markets your product'
                    />
                    <ProductItem
                      title='E-Commerce AI Assistant'
                      href='/product/ecomAssistant'
                      src={ulai}
                      description='Never write from scratch again. Go from idea to blog in minutes.'
                    />
                    <ProductItem
                      title='WhatsApp Shopping'
                      href='/product/whatsapp-agent'
                      src={whatsapp}
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
            <Hamburger
              color='white'
              onToggle={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className='bg-black/90 p-4 md:hidden'>
          <Link href='#' className='block py-2 text-white'>
            Solutions
          </Link>

          {/* Products Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown('products')}
              className='block w-full py-2 text-left text-white'
            >
              Products
            </button>
            {activeDropdown === 'products' && (
              <div className='space-y-4 px-2'>
                <ProductItem
                  mobile
                  title='AsKii'
                  href='/product/askii'
                  src={askii}
                  description='Your website product personalization'
                />
                <ProductItem
                  mobile
                  title='Voice Sales Agent'
                  href='/product/voice-ops-agent'
                  src={voice}
                  description='Talks to your consumers'
                />
                <ProductItem
                  mobile
                  title='E-Commerce AI Assistant'
                  href='/product/ecomAssistant'
                  src={ulai}
                  description='Never write from scratch again'
                />
                <ProductItem
                  mobile
                  title='WhatsApp Shopping'
                  href='/product/whatsapp-agent'
                  src={whatsapp}
                  description='Respond to RFQs 10x faster'
                />
              </div>
            )}
          </div>

          <Link href='/contact' className='block py-2 text-white'>
            Contact
          </Link>
          <Button className='w-full bg-blue-500 hover:bg-blue-600'>
            Try for Free
          </Button>
        </div>
      )}
    </nav>
  );
}
