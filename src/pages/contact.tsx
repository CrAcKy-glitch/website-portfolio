import { Mail, MapPin, Phone } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Book a Demo',
  description:
    'Get in touch with our team or book a demo to learn how Ulai can transform your customer interactions.',
};

export default function Contact() {
  return (
    <div className='container mx-auto px-4 py-12'>
      <h1 className='mb-12 mt-32 text-center text-4xl font-bold text-white'>
        Contact Us
      </h1>

      <div className='grid grid-cols-1 items-start gap-8 lg:grid-cols-2'>
        {/* TidyCal Booking Widget - Left Side */}
        <div className='h-[800px] w-full overflow-hidden rounded-lg bg-white shadow-md'>
          <iframe
            src='https://tidycal.com/ulai/power-of-ulai'
            frameBorder='0'
            style={{ width: '100%', height: '100%' }}
            title='Book a demo with Ulai'
            className='h-full w-full'
          />
        </div>

        {/* Contact Information - Right Side */}
        <div className='space-y-8'>
          <div className='rounded-lg bg-white p-8 shadow-md'>
            <h2 className='mb-6 text-2xl font-bold'>Get in Touch</h2>
            <p className='mb-6 text-gray-600'>
              Have questions about how Ulai can transform your customer
              interactions? Our team is here to help you discover the power of
              AI-driven messaging.
            </p>

            <div className='space-y-4'>
              <div className='flex items-start'>
                <MapPin className='text-primary mr-3 mt-1 h-5 w-5' />
                <div>
                  <h3 className='font-medium'>Our Location</h3>
                  <p className='text-gray-600'>
                    Jayanagar, Bengaluru, Karnataka, India
                  </p>
                </div>
              </div>

              <div className='flex items-start'>
                <Mail className='text-primary mr-3 mt-1 h-5 w-5' />
                <div>
                  <h3 className='font-medium'>Email Us</h3>
                  <p className='text-gray-600'>admin@ulai.in</p>
                </div>
              </div>

              <div className='flex items-start'>
                <Phone className='text-primary mr-3 mt-1 h-5 w-5' />
                <div>
                  <h3 className='font-medium'>Call Us</h3>
                  <p className='text-gray-600'>+91 98451 78656</p>
                </div>
              </div>
            </div>
          </div>

          <div className='rounded-lg bg-white p-8 shadow-md'>
            <h2 className='mb-6 text-2xl font-bold'>Why Choose Ulai?</h2>
            <ul className='space-y-3 text-gray-600'>
              <li className='flex items-start'>
                <span className='text-primary mr-2 font-bold'>✓</span>
                Boost engagement by 55% with AI-powered messaging
              </li>
              <li className='flex items-start'>
                <span className='text-primary mr-2 font-bold'>✓</span>
                Increase revenue by 27% through personalized interactions
              </li>
              <li className='flex items-start'>
                <span className='text-primary mr-2 font-bold'>✓</span>
                Cut support costs by 80% with automated responses
              </li>
              <li className='flex items-start'>
                <span className='text-primary mr-2 font-bold'>✓</span>
                Seamless integration with WhatsApp and other channels
              </li>
              <li className='flex items-start'>
                <span className='text-primary mr-2 font-bold'>✓</span>
                Patent-pending personalization technology
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
