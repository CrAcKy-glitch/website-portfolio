import { ArrowRight, BarChart3, LineChart, PieChart } from 'lucide-react';
import Image from 'next/image';

import Button from '@/components/buttons/Button';

import dashboard from '@/assets/dashboard.png';
export default function UlaiAnalytics() {
  return (
    <div className=' min-h-screen text-gray-100'>
      <main>
        <section className='container mx-auto px-4 py-24'>
          <div className='grid items-center gap-12 md:grid-cols-2'>
            <div className='space-y-6'>
              <h2 className='text-4xl font-bold tracking-tight text-white md:text-5xl'>
                AI Analytics & Business Growth Metrics
              </h2>

              <p className='text-xl text-gray-400'>
                📊 Real-Time Insights for Better Decisions
              </p>

              <ul className='space-y-4'>
                {features.map((feature, index) => (
                  <li key={index} className='flex items-start gap-3'>
                    <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-400'>
                      {feature.icon}
                    </div>
                    <div>
                      <p className='font-medium text-white'>{feature.title}</p>
                      <p className='text-gray-400'>{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div>
                <Button
                  login
                  className='inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 font-medium text-white transition-colors hover:bg-green-700'
                >
                  Try For free
                  <ArrowRight className='h-4 w-4' />
                </Button>
              </div>
            </div>

            <div className='relative rounded-xl border border-gray-800 bg-gray-900 p-2 shadow-2xl'>
              <div className='absolute -top-3 left-4 rounded-md bg-gray-800 px-2 py-1 text-xs font-medium text-gray-400'></div>
              <div className='overflow-hidden rounded-lg'>
                {/* This is where you would place your dashboard image */}
                <div className='flex aspect-[16/10] items-center justify-center bg-gray-800 text-gray-500'>
                  <p className='px-4 text-center'>
                    <Image
                      src={dashboard}
                      className='h-full w-full'
                      layout='object-fill'
                      alt='dashboard'
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const features = [
  {
    icon: <BarChart3 className='h-5 w-5' />,
    title: 'AI dashboard with revenue, retention, CSAT, AOV & CAC tracking',
    description:
      'Monitor all your critical business metrics in one place with real-time updates.',
  },
  {
    icon: <LineChart className='h-5 w-5' />,
    title: 'Automated reports on cart abandonment, RTO, and conversion rates',
    description:
      'Get actionable insights delivered automatically to help optimize your business.',
  },
  {
    icon: <PieChart className='h-5 w-5' />,
    title: 'Customizable widgets to display business-critical metrics',
    description:
      'Tailor your analytics view to focus on what matters most to your business.',
  },
];
