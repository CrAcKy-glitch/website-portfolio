import Image from 'next/image';
import React from 'react';

import { cn } from '@/lib/utils';

import Button from '@/components/buttons/Button';
import { CardContent, WobbleCard } from '@/components/common/card';
import { CardNative } from '@/components/common/card';

import dashboard from '@/assets/dashboard.png';
import compass from '@/assets/images/compass.svg';
import ulaiPhone from '@/assets/ulaiPhone.png';

export function UlaiStats() {
  const data = [
    {
      quote:
        'We can be way more creative in what we’re putting out into the world.',
      author: 'Shantala',
      role: 'CoFounder',
      company: 'Gamatics India',
      color: 'bg-gray-700',
    },
    {
      title: '45%',
      subtitle: 'less abadoned cart',

      color: 'bg-purple-500',
    },
    {
      title: '200%',
      subtitle: 'surge in web traffic',
      company: 'Bestplaces',
      color: 'bg-pink-500',
    },
    {
      title: '40%',
      subtitle: 'increase in customer conversions with ulai',

      color: 'bg-blue-400',
    },
    {
      title: '93%',
      subtitle: 'faster creation of campaigns',
      company: 'Commercetools',
      color: 'bg-green-500',
    },
    {
      quote:
        'This isn’t just about staying relevant in a rapidly evolving industry; it’s about leading the way.',
      author: 'Ansh Arora',
      role: 'CTO & Co-Founder',
      company: 'bob',
      color: 'bg-gray-800',
    },
  ];

  return (
    <div className='mt-32'>
      <div className='mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 lg:grid-cols-3'>
        <WobbleCard
          containerClassName='col-span-1 lg:col-span-2 h-full border-gray-800 bg-gray-900 min-h-[500px] lg:min-h-[300px]'
          className=''
        >
          <div className='max-w-sm'>
            <h2 className='text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-2xl lg:text-3xl'>
              Seamless Shopping & Checkout Experience
            </h2>
            <p className='mt-4 text-left text-base/6 text-neutral-200'>
              🛒 Convert More with Smarter Shopping Journeys
            </p>
            <ul className='mt-2 list-disc pl-5 text-neutral-200'>
              <li>
                Add-to-cart abandonment recovery via WhatsApp & Web
                notifications.
              </li>
              <li>Multiple secure payment options with instant checkout.</li>
              <li>AI-powered cart retention strategies to reduce drop-offs.</li>
            </ul>
          </div>
          <Image
            src={ulaiPhone}
            width={250}
            height={400}
            alt='Checkout UI with AI-powered upsells'
            className='absolute bottom-5 right-4 hidden rounded-2xl object-contain hover:grayscale-0 md:block lg:grayscale'
          />
        </WobbleCard>
        <WobbleCard containerClassName='col-span-1 min-h-[300px] border-gray-800 bg-gray-900'>
          <h2 className='max-w-80 text-balance  text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl'>
            Ulai Increases Customer Engagement
          </h2>

          <p className='mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200'>
            By implementing Ulai's personalized communication strategies,
            businesses have observed a significant improvement in customer
            retention rates. Optimizing the checkout process can lead to a 40%
            increase in conversion rates.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName='col-span-1 lg:col-span-3 border-gray-800 bg-gray-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]'>
          <div className='max-w-sm'>
            <h2 className='text-balance max-w-sm text-left text-base font-semibold tracking-[-0.015em] text-white md:max-w-lg md:text-xl lg:text-3xl'>
              AI-Powered Checkout Optimization
            </h2>
            <p className='mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200'>
              Smart AI-driven upsells and cross-sells enhance the checkout
              experience, maximizing revenue while keeping customers engaged.
            </p>
          </div>
          <Image
            src={dashboard}
            width={500}
            height={500}
            alt='AI-powered checkout UI'
            className='absolute  bottom-10 right-5 hidden rounded-2xl object-contain hover:grayscale-0 md:block lg:grayscale '
          />
        </WobbleCard>
      </div>
      <section className='w-full  py-24 text-white'>
        <div className='container mx-auto px-4'>
          <div className='flex w-full flex-col items-center justify-between md:flex-row'>
            <div className='mb-12'>
              <span className='text-lg font-semibold text-green-400'>
                Customer Stories
              </span>
              <h2 className='mb-4 mt-2 text-4xl font-bold'>
                Real Marketers, Surreal Results
              </h2>
              <p className='mb-8 max-w-2xl text-lg text-gray-400'>
                Our Customer testimonials benefitting from cutting edge tech
                designed to upscale your buisness.
              </p>

              {/* Stats Row */}
              <div className='mb-8 flex gap-8 text-white'>
                <div className='border-r border-gray-700 pr-8'>
                  <p className='text-2xl font-bold'>1K+</p>
                  <p className='text-gray-400'>
                    traffic
                    <br />
                    increased conversions
                  </p>
                </div>
                <div>
                  <p className='text-2xl font-bold'>10,000+</p>
                  <p className='text-gray-400'>
                    hours saved
                    <br />
                    of traditional Customer Support and Sales
                  </p>
                </div>
              </div>

              <Button className='mb-12 rounded-lg bg-green-500  px-6 py-3 font-medium text-white '>
                Explore Customer Stories
              </Button>
            </div>
            <Image
              src={compass}
              width={300}
              height={300}
              alt=''
              className='animate-flicker absolute -mt-20 ml-80 h-20 w-20 md:relative md:mb-0 md:ml-0 md:mr-32 md:h-80 md:w-80'
            />
          </div>

          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {data.map((item, index) => (
              <CardNative
                key={index}
                className={cn(
                  ' group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900 p-8 transition-all hover:border-green-500/30'
                )}
              >
                <CardContent className='space-y-4'>
                  {item.title ? (
                    <>
                      <h3 className='text-4xl font-bold'>{item.title}</h3>
                      <p className='text-lg text-gray-300'>{item.subtitle}</p>
                      <div className='mt-4 flex items-center gap-3'>
                        <div className='h-px w-8 bg-green-400' />
                        <span className='font-medium text-gray-400'>
                          {item.company}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className='text-xl italic text-gray-300'>
                        "{item.quote}"
                      </p>
                      <div className='mt-6 border-t border-gray-800 pt-6'>
                        <p className='font-medium'>{item.author}</p>
                        <p className='text-sm text-gray-400'>{item.role}</p>
                        <span className='mt-2 block text-sm text-green-400'>
                          {item.company}
                        </span>
                      </div>
                    </>
                  )}
                </CardContent>
              </CardNative>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
