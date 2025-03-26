import React, { useEffect } from 'react';

import Layout from '@/components/layout/Layout';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position to top on page load
  }, []);

  return (
    <Layout>
      <div className='mt-8 overflow-scroll rounded-lg  px-32 py-20 text-white'>
        <section className='mb-8'>
          <h2 className='mb-4 text-center text-4xl font-bold'>
            Terms of Service
          </h2>
          <h4 className='mb-2 text-2xl font-semibold'>Introduction</h4>
          <p className='mb-4'>
            These terms of service (Terms) govern your use of any Platform,
            Software and the Services (as defined below), owned and operated by
            Sashakti Ventures Private Limited, a private limited company
            incorporated under the provision of the Companies Act 1956 having
            its registered office at #309, Bharat Nilaya, Kundalahalli,
            Bangalore, Karnataka 560037 India. This website is one such example.
          </p>
          <p className='mb-4'>
            The terms "user", "you", "your" hereinafter refer to customers
            registering, accessing and using the Platform or the Software and
            the terms "we", "us", "our" refer to Sashakti Ventures Private
            Limited.
          </p>
          <p className='mb-4'>
            Before registering on the Platform, using the Software or any
            Services (as defined below), please read these Terms carefully and
            select the "I Agree To The Terms and Conditions" option provided in
            the login and/or sign-up page. By selecting the "I Agree To The
            Terms and Conditions" option, you signify your acceptance of the
            Terms (as amended from time to time) and agree to be bound by them
            for as long as you are using or accessing the Platform or the
            Services (as defined below).
          </p>
          <p className='mb-4'>
            We reserve the right to unilaterally amend these terms from time to
            time. We will notify you of any changes that we make to the Terms.
          </p>
          <p className='mb-4 font-bold'>
            IF YOU DO NOT AGREE TO THESE TERMS, YOU WILL NOT BE ABLE TO REGISTER
            ON, ACCESS OR USE THE PLATFORM OR THE SERVICES.
          </p>
        </section>

        <section className='mb-8'>
          <h4 className='mb-2 text-2xl font-semibold'>Services</h4>
          <p className='mb-4'>
            The Services may be provided through the Platform or through the
            provision of the Software in the Customer's systems.
          </p>
          <p className='mb-4'>
            When provided through the Platform, the Services comprise the
            Platform and the APIs to integrate the Platform with your systems.
            When provided through a software, the Services comprise the Software
            and any Software Development Kit provided with that Software.
          </p>
          <p className='mb-4'>
            The Services allow you to store, analyze and send automated messages
            between your business systems and your customers on third-party
            messaging channels through a web-based interface.
          </p>
        </section>

        <section className='mb-8'>
          <h4 className='mb-2 text-2xl font-semibold'>Access And Use</h4>
          <p className='mb-4'>
            Upon your request, we may create and provide multiple profiles
            (Administrator's Profile) that may be used to access the Services by
            individuals employed or contracted by you (each, an Administrative
            User).
          </p>
          <ul className='mb-4 list-inside list-disc'>
            <li>
              Use the Services to send, upload, collect, transmit, store, use,
              disclose or process any data or messages that:
              <ul className='ml-6 list-inside list-decimal'>
                <li>
                  Contains any computer viruses, worms, malicious code, or any
                  software intended to damage or alter a computer system or
                  data;
                </li>
                <li>
                  Is false, intentionally misleading, or impersonates any other
                  person;
                </li>
                <li>
                  Is bullying, harassing, abusive, threatening, vulgar, obscene,
                  or offensive;
                </li>
                <li>
                  Violates the obligations of the Customer or any other person
                  under any applicable laws;
                </li>
              </ul>
            </li>
            <li>Attempt to gain unauthorized access to the Platform;</li>
            <li>
              Use the Services in a manner that causes harm, disruption, or
              interference to the Services;
            </li>
          </ul>
        </section>

        <section className='mb-8'>
          <h4 className='mb-2 text-2xl font-semibold'>
            Unauthorized Use or Access
          </h4>
          <p className='mb-4'>
            You will promptly notify us of any actual or suspected unauthorized
            access or use of the Platform or Software. We reserve the right to
            suspend, deactivate or replace any Account or Administrator's
            Profiles that may have been used for an unauthorized purpose.
          </p>
        </section>

        <section className='mb-8'>
          <h4 className='mb-2 text-2xl font-semibold'>
            Modifications to the Service and Fees
          </h4>
          <p className='mb-4'>
            Sashakti Ventures Private Limited reserves the right to modify,
            suspend, or discontinue the Service at any time for any reason with
            or without notice.
          </p>
        </section>

        <section className='mb-8'>
          <h4 className='mb-2 text-2xl font-semibold'>
            Subscription & Conversation Fees
          </h4>
          <p className='mb-4'>
            Subscription and Conversation Fees shall be paid within 10 business
            days from the date of invoice. Failure to pay may result in
            termination of service.
          </p>
        </section>

        <section className='mb-8'>
          <h4 className='mb-2 text-2xl font-semibold'>Limited Liability</h4>
          <p className='mb-4'>
            TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, IN NO EVENT
            WILL WE BE LIABLE FOR INDIRECT OR CONSEQUENTIAL DAMAGES, LOST
            PROFITS, BUSINESS INTERRUPTION, OR PERSONAL INJURY ARISING OUT OF OR
            IN CONNECTION WITH THESE TERMS.
          </p>
        </section>

        <section className='mb-8'>
          <h4 className='mb-2 text-2xl font-semibold'>Jurisdiction</h4>
          <p className='mb-4'>
            These Terms shall be governed by the laws of India and any disputes
            or proceedings arising hereunder shall be subject to the
            jurisdiction of the courts in Bangalore.
          </p>
        </section>

        <div className='flex justify-end'>
          <p className='text-sm'>Last Updated 26 Mar, 2025</p>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService;
