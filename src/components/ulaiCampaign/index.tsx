import { ArrowRight, Calendar, MessageSquare, Zap } from 'lucide-react';
import Image from 'next/image';

import Button from '@/components/buttons/Button';
import { CardNative } from '@/components/common/card';

import calendarTile from '@/assets/images/calendar.svg';

export default function UlaiCampaign() {
  return (
    <section
      className='mx-auto flex flex-col px-4 py-8 text-white md:flex-row md:space-x-20'
      id='campaign'
    >
      <div className='flex w-full flex-col px-4 md:w-1/2'>
        <div className='mb-12 max-w-4xl text-left'>
          <h2 className='mb-3 text-3xl font-bold md:text-5xl'>
            Campaigns & Automations
          </h2>
          <p className='mb-6 text-xl font-semibold text-green-400 md:text-2xl'>
            🎯 Automate, Personalize, and Scale
          </p>
          <p className='max-w-2xl text-base text-gray-400 md:text-lg'>
            Leverage AI-driven marketing campaigns to engage customers at the
            right time with the right message.
          </p>
        </div>

        <div className='relative w-full'>
          <div className='absolute inset-0 -z-10 rounded-lg bg-green-400/20 blur-xl' />
          <div className='rounded-lg border border-gray-800 bg-gray-900 p-6'>
            <h3 className='mb-4 text-lg font-medium text-green-400'>
              Marketing Automation Flow
            </h3>
            <AutomationFlowDiagram />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className='mt-5 flex w-full flex-col space-y-4 md:mt-0 md:w-1/3'>
        <FeatureCard
          icon={<Zap className='h-6 w-6 text-green-400' />}
          title='Fast Campaigns'
          description='Create & schedule marketing campaigns at lightning speed that learn and adapt to customer behaviors.'
        />
        <FeatureCard
          icon={<Calendar className='h-6 w-6 text-green-400' />}
          title='Order-Based Triggers'
          description='Set up personalized messaging based on customer purchase history and browsing patterns.'
        />
        <FeatureCard
          icon={<MessageSquare className='h-6 w-6 text-green-400' />}
          title='Social Support'
          description='Reach customers seamlessly across WhatsApp, Web, with unified messaging.'
        />

        <div className='relative pt-4'>
          <Button className='flex items-center gap-2 border-none bg-green-400 p-4 font-medium text-white hover:bg-green-500'>
            Start Automating
            <ArrowRight className='h-4 w-4' />
          </Button>
          <Image
            src={calendarTile}
            alt='Campaign image'
            width={200}
            height={200}
            className=' animate-flicker absolute right-0 top-[-40px] ml-32 mt-20 hidden md:block'
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <CardNative className='border-gray-800 bg-gray-900 p-6'>
      <div className='flex items-start'>
        <div className='mr-4 mt-1'>{icon}</div>
        <div>
          <h3 className='mb-2 text-lg font-semibold'>{title}</h3>
          <p className='text-gray-400'>{description}</p>
        </div>
      </div>
    </CardNative>
  );
}

function AutomationFlowDiagram() {
  return (
    <div className='relative h-[420px] w-full overflow-x-auto rounded-lg bg-gray-950 p-4 text-sm'>
      {/* SVG Definitions */}
      <svg width='0' height='0'>
        <defs>
          <marker
            id='arrowhead'
            markerWidth='10'
            markerHeight='7'
            refX='9'
            refY='3.5'
            orient='auto'
          >
            <polygon points='0 0, 10 3.5, 0 7' fill='#4ade80' />
          </marker>
        </defs>
      </svg>

      {/* Nodes */}
      <div className='flex justify-center gap-4'>
        {[
          { title: 'Customer Action', top: 0 },
          { title: 'Cart Abandon', top: 80 },
          { title: 'Purchase', top: 80 },
          { title: 'Inactivity', top: 80 },
        ].map((item, index) => (
          <div
            key={index}
            className='w-36 rounded-lg border border-green-900 bg-gray-800 p-3 text-center shadow-md'
          >
            <div className='font-medium text-green-400'>{item.title}</div>
          </div>
        ))}
      </div>

      <div className='mt-8 flex justify-center gap-4'>
        {[
          { title: 'WhatsApp Reminder', subtitle: 'Send after 4 hours' },
          { title: 'Thank You Email', subtitle: 'Send immediately' },
          { title: 'Discount Offer', subtitle: 'Send after 7 days' },
        ].map((item, index) => (
          <div
            key={index}
            className='w-36 rounded-lg border border-green-900 bg-gray-800 p-3 text-center shadow-md'
          >
            <div className='text-sm text-white'>{item.title}</div>
            <div className='mt-1 text-xs text-gray-400'>{item.subtitle}</div>
          </div>
        ))}
      </div>

      <div className='mt-8 flex justify-center gap-4'>
        {[
          { title: 'Follow-up Email', subtitle: 'If no response' },
          { title: 'Product Suggestions', subtitle: '3 days after purchase' },
          { title: 'Re-engagement SMS', subtitle: 'With special offer' },
        ].map((item, index) => (
          <div
            key={index}
            className='w-36 rounded-lg border border-green-900 bg-gray-800 p-3 text-center shadow-md'
          >
            <div className='text-sm text-white'>{item.title}</div>
            <div className='mt-1 text-xs text-gray-400'>{item.subtitle}</div>
          </div>
        ))}
      </div>

      {/* Result Node */}
      <div className='mt-12 flex justify-center'>
        <div className='w-64 rounded-lg border border-green-900 bg-gray-800 p-3 text-center shadow-md'>
          <div className='font-medium text-green-400'>
            Increased Conversion & Retention
          </div>
        </div>
      </div>
    </div>
  );
}
