import Image from 'next/image';
import { AiOutlineRise } from 'react-icons/ai';

import Button from '@/components/buttons/Button';

import ulai from '../../assets/ulailogo.svg';

export default function UlaiIntro() {
  return (
    <div className='mx-auto mt-16 w-full space-y-10 px-6 text-white sm:px-12 md:px-20 lg:px-32'>
      {/* Main Section */}
      <div className='w-full rounded-lg bg-gray-900 px-6 py-12 text-white sm:px-10 sm:py-16 md:px-16 md:py-20'>
        <div className='mx-auto flex w-full flex-col-reverse items-center justify-between md:flex-row'>
          {/* Left Section */}
          <div className='w-full space-y-6 text-center md:w-1/2 md:text-left'>
            <h2 className='text-2xl font-semibold leading-tight sm:text-3xl'>
              Revolutionizing{' '}
              <span className='text-green-400'>E-Commerce AI</span>
            </h2>
            <p className='text-base text-gray-300 sm:text-lg'>
              Ulai is a cutting-edge AI platform built for modern businesses.
              From
              <span className='font-medium text-green-400'>
                {' '}
                Multilingual Support
              </span>{' '}
              to
              <span className='font-medium text-green-400'>
                {' '}
                Automated Support
              </span>
              , we empower e-commerce brands to scale effortlessly.
            </p>
            <ul className='space-y-2 text-sm text-gray-300 sm:text-base'>
              <li>✅ AI-driven customer interactions</li>
              <li>✅ Smart automation for better conversions</li>
              <li>✅ Cultural Adaptation</li>
              <li>
                ✅ Handle multiple customer inquiries with AI-powered
                conversations 24/7.
              </li>
            </ul>
            <div className='mt-6'>
              <Button
                className='border-none bg-green-600 px-6 py-3 text-white'
                login
              >
                Try for Free
              </Button>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className='flex w-full justify-center md:w-1/2'>
            <div className='relative h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56'>
              <Image
                src={ulai}
                alt='AI-powered e-commerce'
                className='drop-shadow-lg'
                layout='responsive'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Section */}
      <div className='mx-auto mt-20 flex flex-col items-center justify-between lg:flex-row'>
        {/* Left Section */}
        <div className='flex flex-col items-start space-y-3 text-center md:text-left'>
          <div className='flex w-full flex-col space-y-1'>
            <h5 className='text-lg font-medium sm:text-xl'>
              The Ulai Platform
            </h5>
            <hr className='h-[1px] w-10 bg-white' />
          </div>
          <h1 className='relative  items-center text-4xl font-semibold sm:text-5xl '>
            Built <br className='hidden sm:block' /> for Marketing
            <span className='relative inline-block px-2'>
              <span className='relative text-green-400'>
                Success
                {/* Green Circle */}
                <span className='absolute inset-0 -z-10 h-full w-full scale-125 rounded-full border-2 border-green-400'></span>
              </span>
              <span className='inline-flex items-center text-green-400'>
                <AiOutlineRise className='ml-1' />
              </span>
            </span>
          </h1>
          <div></div>
        </div>

        {/* Right Section */}
        <div className='w-full space-y-3 text-center md:w-1/3 md:text-left'>
          <p className='text-base'>
            Ulai is the purpose-built generative AI platform for marketing.
            Built on a foundation of enterprise trust, Ulai deeply understands
            marketing, delivering advanced brand control and an intuitive AI
            toolkit that allows marketers to run their business using ulai voice
            and AI based text assistant.
          </p>
          <div className='mt-6'>
            <Button
              className='border-none bg-green-600 px-6 py-3 text-white'
              login
            >
              Try for Free
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
