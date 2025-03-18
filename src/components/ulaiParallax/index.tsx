'use client';

import { useEffect, useRef, useState } from 'react';

import UlaiAnalytics from '@/components/ulaiAnalytics';
import UlaiWhatsapp from '@/components/ulaiWhatsapp';

export default function UlaiParallax() {
  const [scrollY, setScrollY] = useState(0);
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className='relative min-h-screen overflow-hidden'>
      {/* Hero Section */}

      {/* Parallax Sections Container */}
      <div ref={sectionsRef} className='relative'>
        {/* Section 1 */}
        <ParallaxSection
          scrollY={scrollY}
          index={0}
          bgColor='bg-blue-500'
          title='Creative Design'
          description='Our design philosophy combines aesthetics with functionality to create memorable experiences.'
          image='/placeholder.svg?height=400&width=600'
        >
          <UlaiAnalytics />
        </ParallaxSection>
        <ParallaxSection
          scrollY={scrollY}
          index={1}
          bgColor='bg-blue-500'
          title='Creative Design'
          description='Our design philosophy combines aesthetics with functionality to create memorable experiences.'
          image='/placeholder.svg?height=400&width=600'
        >
          <UlaiWhatsapp />
        </ParallaxSection>

        {/* Section 2 */}
      </div>
    </main>
  );
}

interface ParallaxSectionProps {
  scrollY: number;
  index: number;
  bgColor: string;
  title: string;
  description: string;
  image: string;
  children: React.ReactNode;
}

function ParallaxSection({
  scrollY,
  index,
  bgColor,
  title,
  description,
  image,
  children,
}: ParallaxSectionProps) {
  const sectionHeight =
    typeof window !== 'undefined' ? window.innerHeight : 800;
  const startPosition = sectionHeight * (index + 1);
  const endPosition = startPosition + sectionHeight;

  // Calculate the transform based on scroll position
  const calculateTransform = () => {
    if (scrollY < startPosition) {
      // Section is below the viewport
      return `translateY(${sectionHeight}px)`;
    } else if (scrollY > endPosition) {
      // Section is above the viewport and fully stacked
      return 'translateY(0)';
    } else {
      // Section is in the process of stacking
      const progress = (scrollY - startPosition) / sectionHeight;
      return `translateY(${(1 - progress) * sectionHeight}px)`;
    }
  };

  return (
    <section
      className='fixed left-0 top-0 h-screen w-full  transition-transform duration-300 ease-out'
      style={{
        transform: calculateTransform(),
        zIndex: index + 1,
      }}
    >
      {children}
    </section>
  );
}
