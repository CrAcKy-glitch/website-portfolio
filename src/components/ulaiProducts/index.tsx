import { CredCard } from '@/components/common/card';

import console from '@/assets/console.png';
import carBackground from '@/assets/garage.webp';
import psych from '@/assets/sample.png';

export default function UlaiProducts() {
  return (
    <div className='mt-20'>
      <h1 className='text-center'>Features</h1>
      <div className='mt-10  flex flex-col items-center justify-center space-y-3 py-5 text-center md:space-x-3 lg:flex-row'>
        <CredCard
          heading='ASKII'
          background='bg-black'
          body='Powerful AI recommendation system, crafted for end user needs'
          backgroundPicture={carBackground}
          href='/product/askii'
        />
        <CredCard
          heading='Ulai '
          background='bg-black'
          body='The AI Assistant system that enables users to easily interact buy shop with ease like never before'
          backgroundPicture={psych}
          href='#'
        />
        <CredCard
          heading='E2E Shopping'
          background='bg-black'
          body='Whatsapp Shopping tool to ease users experience at their own comfort spot'
          backgroundPicture={console}
          href='/product/whatsapp-agent'
        />
      </div>
    </div>
  );
}
