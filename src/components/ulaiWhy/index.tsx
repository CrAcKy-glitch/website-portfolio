import Image from 'next/image';

import Button from '@/components/buttons/Button';

import ulailogo from '@/assets/ulailogo.svg';

export default function UlaiWhy() {
  return (
    <section className=' flex flex-col items-center justify-center px-4 py-20 text-center'>
      <h2 className='mb-6 flex text-5xl font-bold text-white'>
        Get started today{' '}
        <span className='ml-3'>
          <Image src={ulailogo} alt='logo' width={100} height={100} />
        </span>
      </h2>
      <div className='flex justify-center gap-4'>
        <Button
          variant='outline'
          className='border-gray-900 bg-green-600 px-6 py-3 text-white'
        >
          Start Free Trial
        </Button>
        <Button className='bg-[#915EFF] px-6 py-3 text-white'>
          Get A Demo
        </Button>
      </div>
    </section>
  );
}
