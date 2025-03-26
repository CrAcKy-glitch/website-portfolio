'use client';

import { motion } from 'framer-motion';
import { Database, MessageSquare, PhoneCall, Search } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';

import Button from '@/components/buttons/Button';

import smileTile from '@/assets/images/smile.svg';
import leatherCaseProduct from '@/assets/products/leatherCase.svg';
import ruggedCaseProduct from '@/assets/products/protectionCase.svg';
import ulaiLogo from '@/assets/ulailogo.svg';
import ulaiDemo from '@/assets/ulaiPresentation.mov';
import whatsappBackground from '@/assets/whatsapp-bg.png';

// Product data
const products = {
  askii: {
    name: 'askii',
    title: 'AI-Powered Search Assistant',
    sideImage: smileTile,
    description:
      "Askii is an intelligent search assistant that helps customers find exactly what they're looking for with natural language understanding and personalized recommendations.",
    icon: Search,
    color: 'white',
    features: [
      'Natural language processing for human-like interactions',
      'Personalized product recommendations based on user behavior',
      'Seamless integration with your existing product catalog',
      'Real-time learning and adaptation to improve results',
      'Multi-language support for global businesses',
      'Analytics dashboard to track customer queries and improve inventory',
    ],
    benefits: [
      'Increase conversion rates by 35% with better product discovery',
      'Reduce cart abandonment by helping customers find exactly what they need',
      'Improve customer satisfaction with instant, accurate responses',
      'Gain valuable insights into customer preferences and search patterns',
      'Free up customer service resources for more complex inquiries',
    ],
    pricing: [
      {
        name: 'Starter',
        price: '$299',
        period: 'per month',
        features: [
          'Up to 1,000 queries per day',
          'Basic analytics',
          'Email support',
          'Standard response time',
        ],
      },
      {
        name: 'Business',
        price: '$799',
        period: 'per month',
        features: [
          'Up to 10,000 queries per day',
          'Advanced analytics',
          'Priority support',
          'Custom training',
        ],
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        features: [
          'Unlimited queries',
          'Dedicated account manager',
          'Custom integration',
          '24/7 premium support',
        ],
      },
    ],
  },
  'whatsapp-agent': {
    name: 'WhatsApp Agent',
    title: 'AI-Powered Commerce Assistant',
    description:
      "Our WhatsApp Commerce Agent handles customer inquiries, processes orders, and provides personalized recommendations 24/7 through the world's most popular messaging platform.",
    icon: MessageSquare,
    background: whatsappBackground,
    color: 'green-500',
    features: [
      '24/7 automated customer support with human-like conversations',
      'Order tracking, processing, and management directly in WhatsApp',
      'Personalized product recommendations based on customer preferences',
      'Seamless handoff to human agents for complex inquiries',
      'Multi-language support for global customer base',
      'Integration with your existing e-commerce platform',
    ],
    benefits: [
      'Meet customers where they already are - on WhatsApp',
      'Reduce response time from hours to seconds',
      'Increase sales with proactive recommendations',
      'Scale customer service without increasing headcount',
      'Improve customer satisfaction with instant, 24/7 support',
    ],
  },
  'voice-ops-agent': {
    name: 'Voice Ops Agent',
    title: 'AI-Powered Voice Assistant',
    description:
      'Our Voice Ops Agent handles customer calls, resolves inquiries, and provides real-time support 24/7 with natural-sounding conversations. Enhance your call center operations with AI that understands context, sentiment, and intent.',
    icon: PhoneCall,
    // background: voiceBackground,
    color: 'blue-500',
    features: [
      'Natural voice conversations with advanced speech recognition',
      'Seamless integration with existing phone systems and CRM platforms',
      '24/7 availability without staffing concerns',
      'Real-time sentiment analysis and emotion detection',
      'Detects Sudden interruption',
      'Multilingual support for global customer base',
      'Pivots through topics and gets into details of nested topics',
    ],
    benefits: [
      'Reduce call center costs by up to 60% while improving customer satisfaction',
      'Eliminate wait times with instant response to every call',
      'Increase first-call resolution rates with intelligent problem-solving',
      'Gain valuable insights from call analytics and customer interactions',
      'Scale customer support operations without proportional cost increases',
    ],
  },
  ecomAssistant: {
    name: 'RAG Bot',
    title: 'AI-Powered Knowledge Retrieval',
    description:
      'Our RAG Bot provides accurate and context-aware answers by retrieving information from your knowledge base in real-time. Improve customer support and internal knowledge sharing with AI that understands your data.',
    icon: Database,
    color: 'emerald-500',
    features: [
      'Real-time knowledge retrieval from multiple sources',
      'Context-aware responses with natural language understanding',
      'Seamless integration with existing knowledge base systems',
      'Customizable knowledge base indexing and management',
      'Analytics dashboard to track query performance and knowledge gaps',
    ],
    benefits: [
      'Improve customer support efficiency with instant answers',
      'Reduce response time and increase customer satisfaction',
      'Enhance internal knowledge sharing and collaboration',
      'Gain valuable insights from query analytics',
      'Scale knowledge management without proportional cost increases',
    ],
  },
};

export default function ProductPage() {
  const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 1, duration: 0.5, ease: 'easeOut' },
    }),
  };
  const router = useRouter();
  const product = products[router.query.name as keyof typeof products];
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  if (!product) {
    return;
  }

  const IconComponent = product.icon;

  return (
    <div className='mt-5 text-white'>
      {/* Breadcrumb */}

      {/* Hero Section */}
      <section className=' py-16'>
        <div className='container mx-auto px-4'>
          <div className='grid items-center gap-12 md:grid-cols-2'>
            <div>
              {product.name === 'askii' && (
                <Image
                  src={smileTile || '/placeholder.svg'}
                  alt='askii'
                  width={150}
                  height={150}
                  className='animate-flicker absolute right-0'
                />
              )}
              <div className='mb-6 inline-block rounded-full bg-gray-800 px-4 py-2'>
                <span className={`text-${product.color}`}>
                  AI-Powered Solution
                </span>
              </div>
              <h1 className='mb-6 text-4xl font-bold md:text-5xl'>
                {product.name}
              </h1>
              <h2 className='mb-6 text-2xl text-white md:text-3xl'>
                {product.title}
              </h2>
              <p className='mb-8 text-xl text-white'>{product.description}</p>
              <div className='flex flex-col gap-4 sm:flex-row'>
                <Button demo className='border-none bg-green-600 p-4'>
                  Request Demo
                </Button>
              </div>
            </div>
            <div
              className={`bg-gradient-to-br from-${product.color}/20 rounded-2xl to-purple-900/20 p-6`}
            >
              {router.query.name === 'askii' && (
                <div className='overflow-hidden rounded-xl border border-gray-800 bg-gray-900 shadow-2xl'>
                  <div className='flex items-center gap-2 border-b border-gray-800 p-4'>
                    <IconComponent
                      className={`h-5 w-5 text-${product.color}`}
                    />
                    <span className='font-medium'>{product.name}</span>
                  </div>

                  {/* Video Player */}
                  <div className='relative aspect-video'>
                    <video
                      ref={videoRef}
                      className='h-full w-full object-cover'
                      autoPlay
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      onEnded={() => setIsPlaying(false)}
                    >
                      <source src={ulaiDemo} type='video/mp4' />
                      Your browser does not support the video tag.
                    </video>

                    {!isPlaying && (
                      <div className='absolute inset-0 flex items-center justify-center bg-black/50'>
                        <button
                          className='flex h-16 w-16 items-center justify-center rounded-full bg-white text-gray-900 transition duration-200 hover:bg-gray-200'
                          onClick={() => videoRef.current?.play()}
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            className='h-8 w-8'
                          >
                            <path
                              fillRule='evenodd'
                              d='M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z'
                              clipRule='evenodd'
                            />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>

                  <div className='p-6'>
                    <h3 className='mb-3 text-lg font-medium'>
                      Askii in Action
                    </h3>
                    <p className='text-sm text-gray-400'>
                      Watch how Askii helps customers find exactly what they're
                      looking for with natural language understanding and
                      personalized recommendations.
                    </p>
                  </div>
                </div>
              )}
              {router.query.name === 'whatsapp-agent' && (
                <div className='relative overflow-hidden rounded-xl border border-gray-800'>
                  {/* Background Image */}

                  <div className='relative z-10 flex items-center gap-2 border-b border-gray-800 bg-gray-800 p-4'>
                    <IconComponent className='h-5 w-5 text-green-500' />
                    <span className='flex flex-row items-center font-medium'>
                      {product.name} by{'  '}
                      <Image
                        src={ulaiLogo || '/placeholder.svg'}
                        alt='image '
                        width={40}
                        height={40}
                        className='my-auto ml-2'
                      />
                    </span>
                  </div>
                  <div>
                    <div className='-z-1 absolute inset-0'>
                      <Image
                        src={whatsappBackground || '/placeholder.svg'}
                        alt='whatsapp'
                        layout='fill'
                        objectFit='cover'
                        quality={100}
                        className='pointer-events-none' // prevent the background from capturing pointer events
                      />
                    </div>
                    <div className='relative z-10 space-y-4 p-6'>
                      {/* Message 1 */}
                      <motion.div
                        className='flex justify-end gap-3'
                        variants={messageVariants}
                        initial='hidden'
                        animate='visible'
                        custom={0}
                      >
                        <div className='max-w-[80%] rounded-lg border border-green-600 bg-green-600 p-3'>
                          <p className='text-sm'>
                            Hi! I'd like to check the status of my order #45678
                          </p>
                        </div>
                      </motion.div>

                      {/* Message 2 */}
                      <motion.div
                        className='flex gap-3'
                        variants={messageVariants}
                        initial='hidden'
                        animate='visible'
                        custom={1}
                      >
                        <div className='h-4 w-4 flex-shrink-0 rounded-full bg-gray-800' />
                        <div className='max-w-[80%] rounded-lg bg-gray-800 p-3'>
                          <p className='text-sm'>
                            Hello! I found your order #45678. It's currently out
                            for delivery and should arrive today between 2-4 PM.
                            Would you like me to send you a tracking link?
                          </p>
                        </div>
                      </motion.div>

                      {/* Message 3 */}
                      <motion.div
                        className='flex justify-end gap-3'
                        variants={messageVariants}
                        initial='hidden'
                        animate='visible'
                        custom={2}
                      >
                        <div className='max-w-[80%] rounded-lg border border-green-600 bg-green-600 p-3'>
                          <p className='text-sm'>
                            Yes, please! And do you have any recommendations for
                            phone cases?
                          </p>
                        </div>
                      </motion.div>

                      {/* Message 4 */}
                      <motion.div
                        className='flex gap-3'
                        variants={messageVariants}
                        initial='hidden'
                        animate='visible'
                        custom={3}
                      >
                        <div className='h-4 w-4 flex-shrink-0 rounded-full bg-gray-800' />
                        <div className='max-w-[80%] rounded-lg bg-gray-800 p-3'>
                          <p className='text-sm'>
                            I've sent the tracking link to your email. Based on
                            your purchase history, you might like these premium
                            cases for your new iPhone 14:
                          </p>
                        </div>
                      </motion.div>

                      {/* Product Suggestions */}
                      <motion.div
                        className='grid grid-cols-2 gap-3'
                        variants={messageVariants}
                        initial='hidden'
                        animate='visible'
                        custom={4}
                      >
                        {/* Product 1 */}
                        <div className='rounded-lg bg-gray-800 p-3'>
                          <div className='mb-2 aspect-square rounded bg-gray-700 '>
                            <Image
                              src={leatherCaseProduct || '/placeholder.svg'}
                              alt='leather case'
                              width={150}
                              height={150}
                              className='h-full w-full'
                            />
                          </div>
                          <p className='text-sm font-medium'>
                            Premium Leather Case
                          </p>
                          <p className='text-xs text-white'>$39.99</p>
                        </div>
                        {/* Product 2 */}
                        <div className='rounded-lg bg-gray-800 p-3'>
                          <div className='mb-2 aspect-square rounded bg-gray-700'>
                            <Image
                              src={ruggedCaseProduct || '/placeholder.svg'}
                              alt='leather case'
                              width={150}
                              height={150}
                              className='h-full w-full'
                            />
                          </div>
                          <p className='text-sm font-medium'>
                            Rugged Protection Case
                          </p>
                          <p className='text-xs text-white'>$49.99</p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              )}
              {router.query.name === 'voice-ops-agent' && (
                <div className='relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900'>
                  <div className='relative z-10 flex items-center gap-2 border-b border-gray-800 bg-gray-800 p-4'>
                    <IconComponent className='h-5 w-5 text-blue-500' />
                    <span className='flex flex-row items-center font-medium'>
                      {product.name} by{'  '}
                      <Image
                        src={ulaiLogo || '/placeholder.svg'}
                        alt='image '
                        width={40}
                        height={40}
                        className='my-auto ml-2'
                      />
                    </span>
                  </div>
                  <div className='relative z-10 space-y-4 p-6'>
                    {/* Message 1 */}
                    <motion.div
                      className='flex justify-end gap-3'
                      variants={messageVariants}
                      initial='hidden'
                      animate='visible'
                      custom={0}
                    >
                      <div className='max-w-[80%] rounded-lg border border-blue-600 bg-blue-600/20 p-3'>
                        <p className='text-sm'>
                          "Hello, I'd like to check the status of my recent
                          order #45678."
                        </p>
                      </div>
                    </motion.div>

                    {/* Message 2 */}
                    <motion.div
                      className='flex gap-3'
                      variants={messageVariants}
                      initial='hidden'
                      animate='visible'
                      custom={1}
                    >
                      <div className='h-4 w-4 flex-shrink-0 rounded-full bg-gray-800' />
                      <div className='max-w-[80%] rounded-lg bg-gray-800 p-3'>
                        <p className='text-sm'>
                          "Hello! I found your order #45678. It's currently out
                          for delivery and should arrive today between 2-4 PM.
                          Would you like me to send you a tracking link via
                          email or SMS?"
                        </p>
                      </div>
                    </motion.div>

                    {/* Message 3 */}
                    <motion.div
                      className='flex justify-end gap-3'
                      variants={messageVariants}
                      initial='hidden'
                      animate='visible'
                      custom={2}
                    >
                      <div className='max-w-[80%] rounded-lg border border-blue-600 bg-blue-600/20 p-3'>
                        <p className='text-sm'>
                          "Email would be great. Also, can you tell me about
                          your return policy for this item?"
                        </p>
                      </div>
                    </motion.div>

                    {/* Message 4 */}
                    <motion.div
                      className='flex gap-3'
                      variants={messageVariants}
                      initial='hidden'
                      animate='visible'
                      custom={3}
                    >
                      <div className='h-4 w-4 flex-shrink-0 rounded-full bg-gray-800' />
                      <div className='max-w-[80%] rounded-lg bg-gray-800 p-3'>
                        <p className='text-sm'>
                          "I've sent the tracking link to your email. Regarding
                          our return policy, you have 30 days to return this
                          item for a full refund. Would you like me to send you
                          the detailed return instructions as well?"
                        </p>
                      </div>
                    </motion.div>

                    {/* Voice Call Status */}
                    <motion.div
                      className='flex justify-center'
                      variants={messageVariants}
                      initial='hidden'
                      animate='visible'
                      custom={4}
                    >
                      <div className='flex items-center gap-2 rounded-full bg-gray-800 px-4 py-2'>
                        <span className='h-2 w-2 animate-pulse rounded-full bg-blue-500'></span>
                        <span className='text-sm text-gray-400'>
                          AI Voice Assistant Active
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              )}
              {router.query.name === 'ecomAssistant' && (
                <div className='relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900'>
                  <div className='relative z-10 flex items-center gap-2 border-b border-gray-800 bg-gray-800 p-4'>
                    <IconComponent className='h-5 w-5 text-emerald-500' />
                    <span className='flex flex-row items-center font-medium'>
                      {product.name} by{'  '}
                      <Image
                        src={ulaiLogo || '/placeholder.svg'}
                        alt='image'
                        width={40}
                        height={40}
                        className='my-auto ml-2'
                      />
                    </span>
                  </div>

                  {/* Video Player */}
                  <div className='relative aspect-video'>
                    <video
                      ref={videoRef}
                      className='h-full w-full object-cover'
                      poster='/placeholder.svg?height=720&width=1280'
                      controls
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      onEnded={() => setIsPlaying(false)}
                    >
                      <source src={ulaiDemo} type='video/mp4' />
                      Your browser does not support the video tag.
                    </video>
                    {!isPlaying && (
                      <div className='absolute inset-0 flex items-center justify-center bg-black/50'>
                        <button
                          className='flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-600'
                          onClick={() => {
                            if (videoRef.current) {
                              videoRef.current.play();
                              setIsPlaying(true);
                            }
                          }}
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            className='h-8 w-8'
                          >
                            <path
                              fillRule='evenodd'
                              d='M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z'
                              clipRule='evenodd'
                            />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>

                  {/* RAG Bot Demo */}
                  <div className='relative z-10 space-y-4 p-6'>
                    {/* User Query 1 */}
                    <motion.div
                      className='flex justify-end gap-3'
                      variants={messageVariants}
                      initial='hidden'
                      animate='visible'
                      custom={0}
                    >
                      <div className='max-w-[80%] rounded-lg border border-emerald-600 bg-emerald-600/20 p-3'>
                        <p className='text-sm'>
                          What's the return policy for your premium
                          subscription?
                        </p>
                      </div>
                    </motion.div>

                    {/* Bot Response 1 */}
                    <motion.div
                      className='flex gap-3'
                      variants={messageVariants}
                      initial='hidden'
                      animate='visible'
                      custom={1}
                    >
                      <div className='flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20'>
                        <Database className='h-4 w-4 text-emerald-400' />
                      </div>
                      <div className='max-w-[80%] rounded-lg bg-gray-800 p-3'>
                        <p className='text-sm'>
                          According to our Terms of Service, we offer a 30-day
                          money-back guarantee for all premium subscriptions. If
                          you're not satisfied with our service, you can request
                          a full refund within 30 days of your initial purchase.
                          To request a refund, please contact our support team
                          at support@ragbot.com or through the help center in
                          your account dashboard.
                        </p>
                        <div className='mt-2 flex items-center gap-1 text-xs text-emerald-400'>
                          <Database className='h-3 w-3' />
                          <span>
                            Source: Terms of Service, last updated March 2025
                          </span>
                        </div>
                      </div>
                    </motion.div>

                    {/* User Query 2 */}
                    <motion.div
                      className='flex justify-end gap-3'
                      variants={messageVariants}
                      initial='hidden'
                      animate='visible'
                      custom={2}
                    >
                      <div className='max-w-[80%] rounded-lg border border-emerald-600 bg-emerald-600/20 p-3'>
                        <p className='text-sm'>
                          Can I integrate RAG Bot with my existing knowledge
                          base?
                        </p>
                      </div>
                    </motion.div>

                    {/* Bot Response 2 */}
                    <motion.div
                      className='flex gap-3'
                      variants={messageVariants}
                      initial='hidden'
                      animate='visible'
                      custom={3}
                    >
                      <div className='flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20'>
                        <Database className='h-4 w-4 text-emerald-400' />
                      </div>
                      <div className='max-w-[80%] rounded-lg bg-gray-800 p-3'>
                        <p className='text-sm'>
                          Yes, RAG Bot is designed to seamlessly integrate with
                          your existing knowledge base systems. We support
                          multiple integration methods:
                        </p>
                        <ul className='mt-2 list-disc space-y-1 pl-5 text-sm'>
                          <li>
                            Direct API connections to platforms like Shopify,
                            BigCommerce and Standalone Web Applications
                          </li>
                          <li>
                            File uploads for PDF, DOCX, and HTML documents
                          </li>
                          <li>Web crawling for public-facing documentation</li>
                          <li>
                            Database connections via our secure connectors
                          </li>
                        </ul>
                        <div className='mt-2 flex items-center gap-1 text-xs text-emerald-400'>
                          <Database className='h-3 w-3' />
                          <span>
                            Source: Integration Documentation, updated February
                            2025
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-gradient-to-b from-black to-gray-900 py-16'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto max-w-3xl text-center'>
            <h2 className='mb-6 text-3xl font-bold'>
              Ready to transform your business with {product.name}?
            </h2>
            <p className='mb-8 text-xl text-white'>
              Join thousands of businesses already using our AI solutions to
              improve customer experience and drive growth.
            </p>
            <div className='flex flex-col justify-center gap-4 sm:flex-row'>
              <Button className='border-none bg-green-600 p-4'>
                Get Started Today
              </Button>
              <Button
                variant='outline'
                className='border-white text-white hover:bg-transparent hover:text-white'
              >
                Talk to Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
