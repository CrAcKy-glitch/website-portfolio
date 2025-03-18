import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from 'framer-motion';
import Image from 'next/image';
import React, { MouseEvent as ReactMouseEvent, useRef, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import { cn } from '@/lib/utils';

import Button from '@/components/buttons/Button';
import { CanvasRevealEffect } from '@/components/ui/canvas-real-effect';
type CardProps = {
  className?: string;
  heading: string;
  content: React.ReactNode;
  TopRightIcon?: React.ComponentType<any>;
  BottomIcon?: React.ComponentType<any>;
  backgroundGradient?: string;
  backgroundColor?: string;
};
type WideCardProps = {
  leftContent: any;
  rightGraphics: any;
};

type CredCardProps = {
  href: string;
  heading: React.ReactNode;
  background: string;
  body: React.ReactNode;
  backgroundPicture: any;
};

export const WobbleCard = ({
  children,
  containerClassName,
  className,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 20;
    const y = (clientY - (rect.top + rect.height / 2)) / 20;
    setMousePosition({ x, y });
  };
  return (
    <motion.section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovering
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1, 1, 1)`
          : 'translate3d(0px, 0px, 0) scale3d(1, 1, 1)',
        transition: 'transform 0.1s ease-out',
      }}
      className={cn(
        'relative mx-auto w-full  overflow-hidden rounded-2xl bg-indigo-800',
        containerClassName
      )}
    >
      <div
        className='relative  h-full overflow-hidden  [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))] sm:mx-0 sm:rounded-2xl'
        style={{
          boxShadow:
            '0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)',
        }}
      >
        <motion.div
          style={{
            transform: isHovering
              ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) scale3d(1.03, 1.03, 1)`
              : 'translate3d(0px, 0px, 0) scale3d(1, 1, 1)',
            transition: 'transform 0.1s ease-out',
          }}
          className={cn('h-full px-4 py-20 sm:px-10', className)}
        >
          <Noise />
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
};

const Noise = () => {
  return (
    <div
      className='absolute inset-0 h-full w-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]'
      style={{
        backgroundImage: 'url(/images/noise.webp)',
        backgroundSize: '30%',
      }}
    ></div>
  );
};

export const CardSpotlight = ({
  children,
  radius = 350,
  color = '#262626',
  className,
  ...props
}: {
  radius?: number;
  color?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  return (
    <div
      className={cn(
        'group/spotlight relative rounded-md border border-neutral-800 bg-black p-10 dark:border-neutral-800',
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <motion.div
        className='pointer-events-none absolute -inset-px z-0 rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-100'
        style={{
          backgroundColor: color,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
        }}
      >
        {isHovering && (
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName='bg-transparent absolute inset-0 pointer-events-none'
            colors={[
              [59, 130, 246],
              [139, 92, 246],
            ]}
            dotSize={3}
          />
        )}
      </motion.div>
      {children}
    </div>
  );
};

export const CredCard = ({
  heading,
  background,
  body,
  backgroundPicture,
  href,
}: CredCardProps) => {
  return (
    <div
      className={` h-[500px] w-[400px] rounded-lg border-2 border-gray-600 text-center ${background} relative overflow-hidden`}
    >
      {backgroundPicture && (
        <div className='absolute inset-0 z-0'>
          <Image
            src={backgroundPicture}
            alt='Background'
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      )}

      {/* Content with z-index to appear above the background */}
      <div className='relative z-10 flex h-full flex-col items-center justify-center p-4'>
        <div className='text-5xl font-bold'>{heading}</div>
        <div className='text-md mt-6'>{body}</div>
        <Button
          href={href}
          className=' mt-5 flex w-[150px] items-center space-x-4 border-gray-400 bg-gray-400 bg-opacity-40 p-5'
        >
          Know More
          <FaArrowRight />
        </Button>
      </div>
    </div>
  );
};

const Card: React.FC<CardProps> = ({
  heading,
  content,
  className,
  TopRightIcon,
  BottomIcon,
  backgroundGradient = 'from-pink-400 to-red-400',
  backgroundColor = 'bg-white',
}) => {
  return (
    <div
      className={`relative z-10 h-[18vw] w-[23vw] justify-center ${backgroundColor}`}
    >
      <div
        className={
          className ||
          `absolute inset-0 z-0 m-auto h-full w-full rounded-lg bg-gradient-to-r ${backgroundGradient} blur-sm`
        }
      ></div>

      <div className='relative z-10 flex h-full w-full flex-col justify-between rounded-lg border bg-white p-5 shadow-md'>
        <div className='flex flex-row items-center justify-between'>
          <h2 className='text-3xl font-semibold'>{heading}</h2>
          {TopRightIcon && <TopRightIcon />}
        </div>

        {/* Content */}
        <div className='mt-7 flex-1 text-xs'>{content}</div>

        {/* Bottom Icon */}
        {BottomIcon && (
          <div className='mt-2 flex justify-end text-3xl'>
            <BottomIcon />
          </div>
        )}
      </div>
    </div>
  );
};

export function WideCard({ leftContent, rightGraphics }: WideCardProps) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  // Apply parallax only to the right-side graphics
  const y = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <div
      ref={cardRef}
      className='w-full rounded-lg border border-gray-300 bg-gradient-to-r from-purple-200 to-white p-4 shadow-lg'
    >
      <div className='flex items-center justify-between rounded-xl bg-white p-4 shadow-md'>
        <div className='rounded-full bg-gray-100 px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm'>
          {leftContent}
        </div>
        {/* Apply motion effect only on right-side graphics */}
        <motion.div
          style={{ y }}
          className='rounded-full bg-purple-300 p-3 shadow-lg'
        >
          {rightGraphics}
        </motion.div>
      </div>
    </div>
  );
}

// native card component

const CardNative = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'bg-card text-card-foreground rounded-lg border shadow-sm',
      className
    )}
    {...props}
  />
));
Card.displayName = 'Card';

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-muted-foreground text-sm', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardNative,
  CardTitle,
};
