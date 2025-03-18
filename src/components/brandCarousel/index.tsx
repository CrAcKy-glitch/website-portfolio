import Image from 'next/image';
import Link from 'next/link';

import { companyData } from '@/lib/data';

export default function BrandCarousel() {
  return (
    <div className='relative mt-20 w-full overflow-hidden'>
      <h3 className='mb-6 text-center text-5xl'>Trusted by Growing Brands</h3>
      <div className='flex justify-center'>
        <div className='w-3/4 overflow-hidden'>
          <div className='flex w-max animate-[scroll_20s_linear_infinite] space-x-6 hover:[animation-play-state:paused]'>
            {[...companyData, ...companyData].map((company, index) => (
              <div
                key={index}
                className=' flex h-[200px] w-[220px] items-center justify-center rounded-lg bg-gray-800 p-4 hover:-translate-y-3 hover:transform'
              >
                <Link href={company.website} target='_blank'>
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={250} // Increased logo size
                    height={250} // Increased logo size
                    className='object-contain '
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
