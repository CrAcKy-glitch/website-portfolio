import Image from 'next/image';

import Button from '@/components/buttons/Button';

import ulaiWhatsapp from '@/assets/whatsappChatInsight.png';

export default function UlaiWhatsapp() {
  return (
    <div className='flex w-full flex-row p-20'>
      <div className='1 flex w-2/3 flex-col py-10'>
        <h1>Interactive Whatsapp Marketing</h1>
        <h5 className='w-2/3 py-5 text-lg'>
          Leverage WhatsApp as a dynamic conversational channel with Ulai's
          interactive marketing. Create personalized, engaging campaigns that
          captivate your audience and keep your messaging spam-free with AI-
          powered segmentation. Turn WhatsApp into your top- performing channel
          and watch your RoAS soar.
        </h5>
        <div className='py-2'>
          <Button login className='w-[130px] bg-green-400'>
            Try For Free
          </Button>
        </div>
      </div>
      <div className='w-1/3'>
        <Image alt='hello' src={ulaiWhatsapp} />
      </div>
    </div>
  );
}
