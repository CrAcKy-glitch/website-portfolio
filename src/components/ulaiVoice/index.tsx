import { motion } from 'framer-motion';
import { BarChart, Headphones, PhoneCall, Zap } from 'lucide-react';
import Link from 'next/link';
import type React from 'react';

import Button from '@/components/buttons/Button';

interface AnimatedFeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}

const AnimatedFeature = ({
  icon: Icon,
  title,
  description,
  delay,
}: AnimatedFeatureProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.2, duration: 0.5 }}
      viewport={{ once: true }}
      className='rounded-xl border border-gray-800 bg-gray-900 p-6'
    >
      <h3 className='mb-2 text-xl font-bold'>{title}</h3>
      <p className='text-gray-400'>{description}</p>
    </motion.div>
  );
};

export default function UlaiVoice() {
  const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.5, duration: 0.5, ease: 'easeOut' },
    }),
  };

  return (
    <section className='py-3' id='voice'>
      <div className='container mx-auto px-4'>
        {/* Section Header */}
        <div className='mb-16 text-center'>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='mb-4 inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-4 py-2 text-blue-400'
          >
            <Zap size={16} />
            <span>Revolutionary Voice AI</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className='mb-4 text-4xl font-bold md:text-5xl'
          >
            Voice Ops Agent
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className='mx-auto max-w-3xl text-xl text-gray-300'
          >
            Transform your call center operations with AI-powered voice
            assistance that understands context, sentiment, and intent.
          </motion.p>
        </div>

        {/* Main Content */}
        <div className='grid items-center gap-16 md:grid-cols-2'>
          {/* Left Side - Demo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className='relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900 p-8'
          >
            <div className='absolute left-4 top-4 flex items-center gap-2 text-blue-400'>
              <PhoneCall size={20} />
              <span className='font-medium'>Voice Ops Agent</span>
            </div>

            <div className='mt-12 space-y-6'>
              {/* Message 1 */}
              <motion.div
                className='flex justify-end gap-3'
                variants={messageVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                custom={0}
              >
                <div className='max-w-[80%] rounded-lg border border-blue-600 bg-blue-600/20 p-3'>
                  <p className='text-gray-300'>
                    "Hello, I'd like to check the status of my recent order
                    #45678."
                  </p>
                </div>
              </motion.div>

              {/* Message 2 */}
              <motion.div
                className='flex gap-3'
                variants={messageVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                custom={1}
              >
                <div className='h-4 w-4 flex-shrink-0 rounded-full bg-gray-800' />
                <div className='max-w-[80%] rounded-lg bg-gray-800 p-3'>
                  <p className='text-gray-300'>
                    "Hello! I found your order #45678. It's currently out for
                    delivery and should arrive today between 2-4 PM. Would you
                    like me to send you a tracking link via email or SMS?"
                  </p>
                </div>
              </motion.div>

              {/* Message 3 */}
              <motion.div
                className='flex justify-end gap-3'
                variants={messageVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                custom={2}
              >
                <div className='max-w-[80%] rounded-lg border border-blue-600 bg-blue-600/20 p-3'>
                  <p className='text-gray-300'>
                    "Email would be great. Also, can you tell me about your
                    return policy for this item?"
                  </p>
                </div>
              </motion.div>

              {/* Voice Call Status */}
              <motion.div
                className='flex justify-center'
                variants={messageVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                custom={3}
              >
                <div className='flex items-center gap-2 rounded-full bg-gray-800 px-4 py-2'>
                  <span className='h-2 w-2 animate-pulse rounded-full bg-blue-500'></span>
                  <span className='text-sm text-gray-400'>
                    AI Voice Assistant Active
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Features */}
          <div className='space-y-6'>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='mb-6 text-3xl font-bold'
            >
              Elevate Your Customer Experience
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className='mb-8 text-lg text-gray-300'
            >
              Our Voice Ops Agent handles customer calls with natural-sounding
              conversations, resolves inquiries in real-time, and provides 24/7
              support without the need for human intervention.
            </motion.p>

            <div className='mb-8 grid gap-4 sm:grid-cols-2'>
              <AnimatedFeature
                icon={PhoneCall}
                title='Natural Voice'
                description='Human-like conversations with advanced speech recognition and natural language processing'
                delay={0}
              />
              <AnimatedFeature
                icon={Headphones}
                title='24/7 Support'
                description='Round-the-clock customer service without staffing concerns'
                delay={1}
              />
              <AnimatedFeature
                icon={BarChart}
                title='Call Analytics'
                description='Gain insights from customer interactions to improve service quality'
                delay={2}
              />
              <AnimatedFeature
                icon={Zap}
                title='Cost Efficient'
                description='Reduce call center costs by up to 60% while improving satisfaction'
                delay={3}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              viewport={{ once: true }}
              className='flex flex-wrap gap-4'
            >
              <Link href='/product/voice-ops-agent'>
                <Button className='border-none bg-green-600 p-4 hover:bg-green-700'>
                  Learn More
                </Button>
              </Link>
              <Button
                variant='outline'
                demo
                className='border-white p-4 text-white hover:bg-white/10'
              >
                Request Demo
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <div className='mt-24 grid grid-cols-2 gap-8 md:grid-cols-4'>
          {[
            { value: '60%', label: 'Cost Reduction' },
            { value: '24/7', label: 'Availability' },
            { value: '95%', label: 'Customer Satisfaction' },
            { value: '3x', label: 'Faster Resolution' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className='text-center'
            >
              <h3 className='mb-2 text-4xl font-bold text-green-400'>
                {stat.value}
              </h3>
              <p className='text-gray-400'>{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className='mt-24 text-center'
        >
          <div className='mx-auto max-w-4xl rounded-2xl border border-green-800/50 bg-green-900/40  p-12'>
            <h3 className='mb-4 text-3xl font-bold'>
              Ready to transform your voice operations?
            </h3>
            <p className='mb-8 text-xl text-gray-300'>
              Join the companies already saving 60% on call center costs while
              improving customer satisfaction.
            </p>
            <div className='flex flex-col justify-center gap-4 sm:flex-row'>
              <Link href='/product/voice-ops-agent'>
                <Button className='w-full border-none bg-green-600 p-4 hover:bg-green-700 sm:w-auto'>
                  Get Started
                </Button>
              </Link>
              <Button
                variant='outline'
                className='w-full border-white p-4 text-white hover:bg-white/10 sm:w-auto'
              >
                Talk to Sales
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
