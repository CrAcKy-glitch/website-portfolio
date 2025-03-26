import { motion, useInView } from 'framer-motion';
import { Bot, CheckCircle, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

import Button from '@/components/buttons/Button';

import chat from '@/assets/images/chat.svg';
import nike from '@/assets/products/nike.png';
import puma from '@/assets/products/puma.webp';
import ulai from '@/assets/ulailogo.svg';

export default function UlaiDiscovery() {
  const chatRef = useRef(null);
  const textRef = useRef(null);
  const isChatInView = useInView(chatRef);
  const isTextInView = useInView(textRef);

  const messages = [
    {
      sender: '',
      text: 'Welcome! What kind of running shoes are you looking for today?',
    },
    {
      sender: 'user',
      text: 'I need comfortable shoes for long-distance running',
    },
    {
      sender: '',
      text: 'Great! Based on your needs, here are some options with extra cushioning for long-distance running:',
    },
  ];

  const features = [
    'AI-driven product recommendations based on real-time user behavior',
    'Smart open-ended questions to enhance product discovery',
    'Personalized suggestions based on browsing and past purchase data',
  ];

  return (
    <main className=' min-h-screen  text-white' id='discovery'>
      <section className='container mx-auto px-4 py-20'>
        {/* Section Header */}
        <div className='flex flex-row justify-between'>
          <Image
            src={chat}
            alt=''
            width={200}
            height={200}
            className='animate-flicker left-1 md:absolute md:mb-32'
          />
        </div>
        <div className='mb-16 flex flex-col items-center text-center'>
          <div className='mb-4 inline-flex items-center justify-center rounded-full bg-green-900/30 p-2'>
            <Sparkles className='h-14 w-14 text-green-400' />
          </div>
          <div className='flex flex-row items-center'>
            <h2 className='mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl'>
              RAG bot Product Discovery
            </h2>
          </div>
          <p className='max-w-2xl text-lg text-gray-400'>
            Revolutionize how customers find exactly what they need with our
            intelligent recommendation engine.
          </p>
        </div>

        {/* Content Section */}
        <div className='flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between'>
          {/* Text Content */}
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, x: -50 }}
            animate={isTextInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className='order-2 w-full space-y-8 lg:order-1 lg:w-1/2 lg:pr-12'
          >
            <h3 className='text-3xl font-bold text-white'>
              🔍 Understand What Your Customers Need
            </h3>

            <ul className='space-y-6'>
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={isTextInView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.2 }}
                  className='flex items-start gap-4 text-gray-300'
                >
                  <CheckCircle className='mt-1 h-5 w-5 flex-shrink-0 text-green-400' />
                  <span className='text-lg leading-relaxed'>{feature}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isTextInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <Button
                login
                className='w-full rounded-xl border-none bg-green-600  px-8 py-4 text-lg text-white lg:w-fit'
              >
                Try For Free
              </Button>
            </motion.div>
          </motion.div>

          {/* Chat Interface */}
          <motion.div
            ref={chatRef}
            initial={{ opacity: 0, x: 50 }}
            animate={isChatInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className='relative order-1 w-full lg:order-2 lg:w-1/2'
          >
            <div className='absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-green-600 to-blue-600 opacity-75 blur'></div>
            <div className='relative overflow-hidden rounded-2xl border border-gray-800 bg-black'>
              {/* Header */}
              <div className='flex items-center gap-3 border-b border-gray-800 bg-gray-900 p-4'>
                <Image src={ulai} alt='ulai' height={40} width={40} />
                <span className='font-medium text-green-400'>RAG Chatbot</span>
              </div>

              {/* Chat Messages */}
              <div className='space-y-4 p-6'>
                {messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isChatInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: isChatInView ? index * 0.3 : 0,
                    }}
                    className={`flex ${
                      msg.sender === 'user' ? 'justify-end' : ''
                    }`}
                  >
                    {msg.sender === 'bot' && (
                      <div className='flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-800'>
                        <Bot className='h-4 w-4 text-green-400' />
                      </div>
                    )}

                    <div
                      className={`max-w-[80%] rounded-2xl p-3 text-sm ${
                        msg.sender === 'user'
                          ? 'rounded-tr-none bg-green-900/50'
                          : 'rounded-tl-none bg-gray-800'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}

                {/* Suggested Products */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isChatInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: isChatInView ? messages.length * 0.3 : 0,
                  }}
                >
                  <div className='grid grid-cols-2 gap-3'>
                    {[1, 2].map((i) => (
                      <div
                        key={i}
                        className='rounded-lg bg-gray-800 p-3 transition hover:bg-gray-700/80'
                      >
                        <div className='mb-2 aspect-square overflow-hidden rounded-lg bg-gray-700'>
                          {i == 1 && (
                            <Image
                              src={nike}
                              alt={`Running shoe ${i}`}
                              width={100}
                              height={100}
                              className='h-full w-full object-cover'
                            />
                          )}
                          {i == 2 && (
                            <Image
                              src={puma}
                              alt={`Running shoe ${i}`}
                              width={100}
                              height={100}
                              className='h-full w-full object-cover'
                            />
                          )}
                        </div>
                        <div className='text-sm font-medium'>
                          Ultra Runner {i}
                        </div>
                        <div className='text-sm text-green-400'>$129.99</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
