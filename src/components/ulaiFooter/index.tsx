import Image from 'next/image';

import ulaiLogo from '@/assets/ulailogo.svg';

export default function UlaiFooter() {
  const col1 = [
    { name: 'Customer Stories', href: '#stories' },

    { name: 'Appreciation', href: '#stories' },
  ];
  const col2 = [
    { name: 'Careers', href: 'https://in.linkedin.com/company/ulai/jobs' },
    { name: 'Partnerships', href: '#partners' },
    { name: 'Contact Us', href: '/contact' },
  ];
  const col3 = [
    { name: 'Data Policy', href: '/dataPolicy' },
    { name: 'Privacy Policy', href: '/privacyPolicy' },
    { name: 'Terms & Conditions', href: '/serviceTerms' },
  ];
  return (
    <footer className='border-t border-gray-800 bg-black'>
      <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-5'>
          {/* Brand Column */}
          <div className='md:col-span-2'>
            <Image
              src={ulaiLogo}
              alt='ULAI'
              className='mb-4 h-7 w-auto'
              width={120}
              height={28}
            />
            <p className='max-w-xs text-sm leading-6 text-gray-400'>
              Boost support and customer satisfaction with AI-powered WhatsApp
              journeys. Perfect for rapidly growing e-commerce brands.
            </p>
          </div>

          {/* Resources */}
          <div className='space-y-3'>
            <h3 className='mb-2 text-sm font-medium text-gray-300'>Resource</h3>
            <ul className='space-y-2'>
              {col1.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className='text-sm text-gray-400 transition-colors hover:text-green-400'
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className='space-y-3'>
            <h3 className='mb-2 text-sm font-medium text-gray-300'>Company</h3>
            <ul className='space-y-2'>
              {col2.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className='text-sm text-gray-400 transition-colors hover:text-green-400'
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className='space-y-3'>
            <h3 className='mb-2 text-sm font-medium text-gray-300'>Policies</h3>
            <ul className='space-y-2'>
              {col3.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className='text-sm text-gray-400 transition-colors hover:text-green-400'
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className='mt-12 border-t border-gray-800'></div>

        {/* Bottom Row */}
        <div className='mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between'>
          <p className='order-last text-sm text-gray-500 sm:order-first'>
            &copy; {new Date().getFullYear()} Sashakti Ventures Pvt. Ltd.. All
            rights reserved.
          </p>

          <div className='flex space-x-6'>
            {['twitter', 'linkedin', 'github'].map((platform) => (
              <a
                key={platform}
                href='#'
                className='text-gray-400 transition-colors hover:text-green-400'
              >
                <span className='sr-only'>{platform}</span>
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  {/* Add appropriate SVG paths for each social icon */}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
