'use client';

import Image from 'next/image';
import { useState } from 'react';

import { cn } from '@/lib/utils';

import Button from '@/components/buttons/Button';
import { CardContent, WobbleCard } from '@/components/common/card';
import { CardNative } from '@/components/common/card';

export default function TestimonialsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const testimonials = [
    {
      quote:
        "We can be way more creative in what we're putting out into the world.",
      author: 'Debu Dutta',
      role: 'Director Business',
      company: 'Gamatics India',
      category: 'creative',
      color: 'bg-gray-700',
    },
    {
      quote:
        "This isn't just about staying relevant in a rapidly evolving industry; it's about leading the way.",
      author: 'Ansh Arora',
      role: 'CTO & Co-Founder',
      company: 'bob',
      category: 'tech',
      color: 'bg-gray-800',
    },
    {
      quote:
        'Ulai has transformed how we engage with customers. The AI-powered recommendations are spot on.',
      author: 'Priya Sharma',
      role: 'Head of Marketing',
      company: 'StyleHub',
      category: 'retail',
      color: 'bg-purple-500',
    },
    {
      quote:
        'The checkout optimization alone paid for the service in the first month. Incredible ROI.',
      author: 'Rahul Mehta',
      role: 'E-commerce Director',
      company: 'GadgetWorld',
      category: 'ecommerce',
      color: 'bg-blue-400',
    },
    {
      quote:
        'Our customer service team is now focused on complex issues while Ulai handles routine inquiries perfectly.',
      author: 'Neha Kapoor',
      role: 'Customer Success Manager',
      company: 'HomeDecor',
      category: 'service',
      color: 'bg-pink-500',
    },
    {
      quote:
        'The personalization capabilities have completely changed how we approach our digital strategy.',
      author: 'Vikram Singh',
      role: 'Digital Transformation Lead',
      company: 'FutureTech',
      category: 'tech',
      color: 'bg-green-500',
    },
  ];

  const stats = [
    {
      title: '45%',
      subtitle: 'less abandoned cart',
      company: 'E-commerce platforms',
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
      company: '',
      color: 'bg-blue-400',
    },
    {
      title: '93%',
      subtitle: 'faster creation of campaigns',
      company: 'Commercetools',
      color: 'bg-green-500',
    },
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'tech', name: 'Tech' },
    { id: 'retail', name: 'Retail' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'service', name: 'Service' },
    { id: 'creative', name: 'Creative' },
  ];

  const filteredTestimonials =
    activeCategory === 'all'
      ? testimonials
      : testimonials.filter((item) => item.category === activeCategory);

  return (
    <div className='min-h-screen bg-black text-white'>
      {/* Hero Section */}
      <div className='mx-auto max-w-7xl px-4 py-24'>
        <div className='mb-12 text-center'>
          <h1 className='mb-6 mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl'>
            Real Customers, <span className='text-green-400'>Real Results</span>
          </h1>
          <p className='mx-auto max-w-2xl text-lg text-gray-400'>
            See how businesses are transforming their customer experience and
            boosting revenue with Ulai's AI-powered solutions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className='mb-24 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {stats.map((stat, index) => (
            <CardNative
              key={index}
              className={cn(
                'group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900 p-8 transition-all hover:border-green-500/30'
              )}
            >
              <CardContent className='space-y-4'>
                <h3 className='text-4xl font-bold'>{stat.title}</h3>
                <p className='text-lg text-gray-300'>{stat.subtitle}</p>
                {stat.company && (
                  <div className='mt-4 flex items-center gap-3'>
                    <div className='h-px w-8 bg-green-400' />
                    <span className='font-medium text-gray-400'>
                      {stat.company}
                    </span>
                  </div>
                )}
              </CardContent>
            </CardNative>
          ))}
        </div>

        {/* Testimonials Section */}
        <div>
          <div className='mb-12 flex flex-col items-center justify-between gap-4 md:flex-row'>
            <div>
              <h2 className='text-3xl font-bold text-white md:text-4xl'>
                Customer Stories
              </h2>
              <p className='mt-2 text-gray-400'>
                Hear from the businesses transforming with Ulai
              </p>
            </div>
            <div className='flex flex-wrap gap-2'>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    activeCategory === category.id
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  )}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {filteredTestimonials.map((item, index) => (
              <CardNative
                key={index}
                className={cn(
                  'group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900 p-8 transition-all hover:border-green-500/30'
                )}
              >
                <CardContent className='space-y-4'>
                  <p className='text-xl italic text-gray-300'>"{item.quote}"</p>
                  <div className='mt-6 border-t border-gray-800 pt-6'>
                    <p className='font-medium'>{item.author}</p>
                    <p className='text-sm text-gray-400'>{item.role}</p>
                    <span className='mt-2 block text-sm text-green-400'>
                      {item.company}
                    </span>
                  </div>
                </CardContent>
              </CardNative>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Highlight */}
      <div className='bg-gray-900 py-24'>
        <div className='mx-auto max-w-7xl px-4'>
          <div className='grid gap-12 md:grid-cols-2'>
            <div className='flex flex-col justify-center'>
              <h2 className='mb-6 text-3xl font-bold text-white md:text-4xl'>
                Seamless Shopping & Checkout Experience
              </h2>
              <ul className='mb-8 space-y-4'>
                <li className='flex items-start gap-3'>
                  <div className='mt-1 rounded-full bg-green-500/20 p-1'>
                    <svg
                      className='h-4 w-4 text-green-400'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                  </div>
                  <span className='text-gray-300'>
                    Add-to-cart abandonment recovery via WhatsApp & Web
                    notifications
                  </span>
                </li>
                <li className='flex items-start gap-3'>
                  <div className='mt-1 rounded-full bg-green-500/20 p-1'>
                    <svg
                      className='h-4 w-4 text-green-400'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                  </div>
                  <span className='text-gray-300'>
                    Multiple secure payment options with instant checkout
                  </span>
                </li>
                <li className='flex items-start gap-3'>
                  <div className='mt-1 rounded-full bg-green-500/20 p-1'>
                    <svg
                      className='h-4 w-4 text-green-400'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                  </div>
                  <span className='text-gray-300'>
                    AI-powered cart retention strategies to reduce drop-offs
                  </span>
                </li>
              </ul>
              <Button
                demo
                className='w-fit border-green-600 bg-green-500 p-3 text-white hover:bg-green-600'
              >
                Book a Demo
              </Button>
            </div>
            <WobbleCard containerClassName=' border-gray-800 bg-gray-900'>
              <div className='max-w-sm'>
                <h2 className='text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl'>
                  Ulai Increases Customer Engagement
                </h2>
                <p className='mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200'>
                  By implementing Ulai's personalized communication strategies,
                  businesses have observed a significant improvement in customer
                  retention rates. Optimizing the checkout process can lead to a
                  40% increase in conversion rates.
                </p>
              </div>
            </WobbleCard>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='mx-auto max-w-7xl px-4 py-24'>
        <WobbleCard
          disableWobble
          containerClassName='col-span-1 lg:col-span-3 border-gray-800 bg-gray-900 min-h-[300px]'
        >
          <div className='relative z-10 mx-auto max-w-2xl text-center'>
            <span className='mb-4 inline-block rounded-full bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-400'>
              Get Started
            </span>
            <h2 className='mb-4 text-3xl font-bold text-white md:text-4xl'>
              Ready to transform your customer experience?
            </h2>
            <p className='mb-8 text-gray-400'>
              Join 1,000+ businesses already using Ulai to increase conversions
              and deliver personalized shopping experiences.
            </p>
            <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
              <Button
                demo
                className='w-full  border-green-600 bg-green-500 p-3 text-white hover:bg-green-600 sm:w-auto'
              >
                Book Demo
              </Button>
              <Button
                login
                className='w-full bg-transparent p-3 text-white outline sm:w-auto'
              >
                Start 14-day Free Trial
              </Button>
            </div>
            <p className='mt-4 text-sm text-gray-500'>
              No credit cards. 30-day money back guarantee. No strings attached
            </p>
          </div>
        </WobbleCard>
      </div>

      {/* Customer Stats Section */}
      <div className='bg-gray-900 py-16'>
        <div className='mx-auto max-w-7xl px-4'>
          <div className='mb-12 text-center'>
            <h2 className='text-3xl font-bold text-white md:text-4xl'>
              Ulai by the Numbers
            </h2>
            <p className='mt-2 text-gray-400'>
              Real impact for businesses of all sizes
            </p>
          </div>

          <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
            <WobbleCard
              disableWobble
              containerClassName='col-span-1 min-h-[300px] border-gray-800 bg-gray-900'
            >
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
            </WobbleCard>

            <WobbleCard
              disableWobble
              containerClassName='col-span-1 min-h-[300px] border-gray-800 bg-gray-900'
            >
              <h2 className='max-w-80 text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl'>
                AI-Powered Checkout Optimization
              </h2>
              <p className='mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200'>
                Smart AI-driven upsells and cross-sells enhance the checkout
                experience, maximizing revenue while keeping customers engaged.
                Our technology learns from each interaction to continuously
                improve results.
              </p>
            </WobbleCard>
          </div>
        </div>
      </div>
    </div>
  );
}
