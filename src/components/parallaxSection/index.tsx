import { cards } from '@/lib/data';

import { WideCard } from '@/components/common/card';

export default function ParallaxSection() {
  return (
    <div className='mt-32'>
      {cards.map((parallaxCard) => (
        <WideCard
          key={1}
          leftContent={parallaxCard.left}
          rightGraphics={parallaxCard.right}
        />
      ))}
    </div>
  );
}
