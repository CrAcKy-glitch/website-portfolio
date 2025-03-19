'use client';
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React from 'react';

import { companyData } from '@/lib/data';

import Button from '@/components/buttons/Button';

export const HeroParallax = ({
  products,
}: {
  products: {
    title: any;
    link: any;
    thumbnail: any;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className='relative top-0 flex h-[250vh] flex-col self-auto overflow-hidden py-40 antialiased [perspective:1000px] [transform-style:preserve-3d] md:h-[300vh]'
    >
      <Header />

      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=''
      >
        {/* <motion.p
          className='text-2xl font-bold dark:text-white  md:text-5xl'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Our Happy Clients
        </motion.p> */}
        <motion.div className='mb-20 flex flex-row-reverse space-x-20 space-x-reverse'>
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className='mb-20 flex flex-row space-x-20 '>
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  const paramKey = useSearchParams();
  const brand = paramKey.get('brand');
  let brandIcon: any = '';
  if (brand) {
    companyData.map((company) => {
      if (company.name === brand) {
        brandIcon = company.logo;
      }
    });
  }

  return (
    <div
      className={`relative mx-auto w-full max-w-7xl px-6 md:mt-0 ${
        brandIcon ? ' py-0 md:-mt-24' : 'py-20'
      } md:py-24`}
    >
      <motion.h1
        className=' -mt-20 max-w-[800px] text-3xl font-bold tracking-tight text-white md:mt-0 md:text-5xl lg:text-6xl'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {brandIcon && brand ? (
          <>
            <div className='-mt-10 flex flex-row items-center opacity-100'>
              <Image
                src={brandIcon}
                alt={brand}
                width={205}
                height={200}
                className='opacity-100'
              />
              <span>❤️ </span>
            </div>
            {/* <div className='text-4xl'>
              Empowering <span className='text-primary'>{brand}</span> with{' '}
              <br className='sm:hidden' />
              <br />
              <span className='text-primary-500'>
                AI-Powered Growth Solutions
              </span>
              <br />
              <br className='sm:hidden' />
              Tailored to Elevate Your Experience.
            </div> */}
            <div className=''>
              Empowering <br className='sm:hidden' />
              <span className='text-primary'>{brand}</span>{' '}
              <br className='sm:hidden' />
              <span className='text-primary-500'>
                {' '}
                with AI-Powered Growth Solutions
              </span>
            </div>
          </>
        ) : (
          <div className=''>
            AI-Powered and <br className='sm:hidden' />
            Voice Agentic Infrastructure
            <span className='text-primary'> That Grows Your</span>{' '}
            <br className='sm:hidden' />
            <span className='text-primary-500'> Business</span>
          </div>
        )}
      </motion.h1>

      <motion.p
        className='mt-4 max-w-2xl text-base text-gray-300 md:text-xl'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Elevate your sales with Ulai, the intelligent customer support assistant
        that resolves inquiries 24/7, Multilingual, increases conversions,
        manages processes and Customer journey
      </motion.p>

      <motion.div
        className='relative z-10 mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <Button className='hover:bg-primary/90 ounded-lg  border-none bg-green-400 px-6 py-3 text-lg font-medium text-black shadow-lg transition-all hover:scale-105'>
          Start Your Free Trial
        </Button>
        <Button
          variant='outline'
          className='border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg border-2 px-6 py-3 text-lg font-medium transition-all hover:scale-105'
          onClick={() => {
            window.location.href = '/contact';
          }}
        >
          Schedule a Demo
        </Button>
      </motion.div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className='group/product relative h-52 w-52 flex-shrink-0  md:h-96 md:w-[30rem]'
    >
      <div className='block group-hover/product:shadow-2xl '>
        <Image
          src={product.thumbnail}
          height='600'
          width='600'
          className='absolute inset-0 h-52 w-52 md:h-full md:w-full'
          alt={product.title}
        />
      </div>
      <div className='pointer-events-none absolute inset-0 h-52 w-52 bg-black opacity-0 group-hover/product:opacity-80 md:h-full md:w-full'></div>
      <h2 className='absolute bottom-4 left-4  text-white opacity-0 group-hover/product:opacity-100'>
        {product.title}
      </h2>
    </motion.div>
  );
};
