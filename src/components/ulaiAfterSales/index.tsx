import {
  Bot,
  ChevronRight,
  Clock,
  History,
  Package,
  RefreshCcw,
  Users,
} from 'lucide-react';
import { useState } from 'react';

import Button from '@/components/buttons/Button';
import { CardNative } from '@/components/common/card';

export default function UlaiAfterSales() {
  return (
    <div className='min-h-screen text-white' id='aftersales'>
      {/* Header */}

      {/* Main Content */}
      <main className='container mx-auto py-12'>
        <section className='mb-20'>
          <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2'>
            <div>
              <h2 className='mb-4 text-5xl font-bold'>
                <span className='text-white'>
                  Post-Sales & Customer Support
                </span>
              </h2>
              <p className='mb-8 text-lg text-gray-300'>
                Enhance customer satisfaction and retention with our AI-powered
                support system that works 24/7 to handle customer inquiries,
                returns, and more.
              </p>
              <div className='space-y-6'>
                <FeatureItem
                  icon={<Clock className='h-5 w-5 text-green-400' />}
                  title='24/7 AI + Agent Support'
                  description='Always-on support for refunds, returns & inquiries, no matter the time zone.'
                />
                <FeatureItem
                  icon={<Users className='h-5 w-5 text-blue-400' />}
                  title='Bot-to-Agent Handover'
                  description='Seamless transition to human agents when complex issues arise.'
                />
                <FeatureItem
                  icon={<History className='h-5 w-5 text-green-400' />}
                  title='Order History Management'
                  description='Track & manage order history within a unified chat window.'
                />
              </div>
              <Button demo className='mt-8 border-green-600 bg-green-500 p-3 '>
                Learn More <ChevronRight className='ml-2 h-4 w-4' />
              </Button>
            </div>
            <div className='relative'>
              <div className='absolute -left-10 -top-10 h-40 w-40 rounded-full bg-green-600 opacity-20 blur-3xl filter'></div>
              <div className='absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-600 opacity-20 blur-3xl filter'></div>
              <CardNative className='overflow-hidden border-gray-800 bg-gray-900'>
                <ChatInterface />
              </CardNative>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className='flex items-start'>
      <div className='mr-4 rounded-lg bg-gray-800 p-2'>{icon}</div>
      <div>
        <h3 className='text-lg font-semibold text-white'>{title}</h3>
        <p className='text-gray-400'>{description}</p>
      </div>
    </div>
  );
}

function ChatInterface() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Hello! How can I help you today?',
      time: '10:30 AM',
    },
    {
      id: 2,
      type: 'user',
      content: 'I need to return an item I purchased last week.',
      time: '10:31 AM',
    },
    {
      id: 3,
      type: 'bot',
      content:
        "I'd be happy to help with your return request. Could you please provide your order number?",
      time: '10:31 AM',
    },
    {
      id: 4,
      type: 'user',
      content: "Sure, it's ORD-12345678",
      time: '10:32 AM',
    },
    {
      id: 5,
      type: 'bot',
      content:
        "Thank you. I've found your order for a Wireless Headphones purchased on October 3rd. May I know the reason for the return?",
      time: '10:32 AM',
    },
    {
      id: 6,
      type: 'user',
      content: "The sound quality isn't what I expected.",
      time: '10:33 AM',
    },
    {
      id: 7,
      type: 'bot',
      content:
        "I understand. I've initiated the return process for your Wireless Headphones. You'll receive a return label via email shortly. Would you like me to connect you with a human agent to discuss any specific concerns?",
      time: '10:33 AM',
      actions: ['Yes, connect me', "No, that's all"],
    },
  ]);

  return (
    <div className='flex h-[600px] flex-col'>
      {/* Chat header */}
      <div className='flex items-center justify-between border-b  p-4'>
        <div className='flex items-center'>
          <Bot className='h-4 w-4 text-white' />

          <div className='ml-3'>
            <h3 className='text-sm font-medium text-white'>
              Support Assistant
            </h3>
            <p className='text-xs text-gray-400'>Online</p>
          </div>
        </div>
        <div className='flex items-center space-x-2'>
          <Button
            variant='ghost'
            className='h-8 w-8 text-gray-400 hover:text-white'
          >
            <Package className='h-4 w-4' />
          </Button>
          <Button
            variant='ghost'
            className='h-8 w-8 text-gray-400 hover:text-white'
          >
            <RefreshCcw className='h-4 w-4' />
          </Button>
        </div>
      </div>

      {/* Order info */}
      <div className='border-b border-gray-800 bg-gray-800/50 p-3'>
        <div className='flex items-center'>
          <Package className='text-purpl-400 mr-2 h-4 w-4' />
          <span className='text-xs text-gray-300'>
            Order #ORD-12345678 • Wireless Headphones • $129.99
          </span>
        </div>
      </div>

      {/* Chat messages */}
      <div className='flex-1 space-y-4 overflow-y-auto p-4'>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.type === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`flex max-w-[80%] ${
                message.type === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <div
                className={`mx-auto h-8 w-8 rounded-full ${
                  message.type === 'user' && 'mr-2 bg-green-700'
                }`}
              >
                {message.type !== 'user' && (
                  <Bot className='mx-auto my-auto h-4 w-4 text-white' />
                )}
              </div>
              <div>
                <div
                  className={`rounded-lg p-3 ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 text-gray-100'
                  }`}
                >
                  <p className='text-sm'>{message.content}</p>
                </div>
                <p className='mt-1 text-xs text-gray-500'>{message.time}</p>

                {message.actions && (
                  <div className='mt-2 flex space-x-2'>
                    {message.actions.map((action, index) => (
                      <Button
                        key={index}
                        variant={index === 0 ? 'dark' : 'outline'}
                        size='sm'
                        className={
                          index === 0
                            ? 'bg-green-600 hover:bg-green-700'
                            : 'border-gray-700 text-gray-300'
                        }
                      >
                        {action}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input area */}
      <div className='border-t border-gray-800 bg-gray-900 p-4'>
        <div className='flex items-center'>
          <input
            placeholder='Type your message...'
            className='flex-1 border-gray-700 bg-gray-800 text-white focus-visible:ring-green-500'
          />
          <Button className='ml-2 bg-green-600 hover:bg-green-700'>
            {/* <Send className='h-4 w-4' /> */}
          </Button>
        </div>
        <div className='mt-2 flex items-center justify-between'>
          <p className='text-xs text-gray-500'>
            Bot-to-Agent handover available
          </p>
          <Button
            variant='outline'
            size='sm'
            className='p-0 text-xs text-green-400'
          >
            Request human agent
          </Button>
        </div>
      </div>
    </div>
  );
}
