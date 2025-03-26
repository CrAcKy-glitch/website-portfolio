import React, { useEffect } from 'react';

import Layout from '@/components/layout/Layout';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position to top on page load
  }, []);

  return (
    <Layout>
      <div className='mt-8 rounded-lg  px-32 py-20 text-white'>
        <section className='flex justify-center'>
          <h2 className='mb-4 text-3xl font-bold'>Privacy Policy</h2>
        </section>

        <p>
          In order to provide our services to you, we will, from time to time,
          collect, store, use, process, and transfer certain personal
          information about you. This privacy policy (Privacy Policy) governs
          the collection and use of personal information of users by Goexcelsior
          Private Limited.
        </p>
        <p>
          This Privacy Policy, read together with the terms and service of our
          mobile application (App) and the terms of use of the Website,
          constitutes a legal and binding agreement between you and Sashakti
          Ventures Private Limited and is enforceable under the laws of India.
        </p>
        <p>
          The Privacy Policy is subject to revisions at any time, as determined
          by us, without notice, and any such changes are effective immediately
          upon being posted on the Website and the App; any use of the Website
          or the App thereafter will be deemed to be an acceptance of these
          changes by you.
        </p>
        <p>
          You are strongly urged to read this Privacy Policy in its entirety and
          to periodically check this page to understand how modifications or
          revisions to this policy affects the use of our information. Ulai
          shall not be responsible for your failure to remain informed about
          such changes.
        </p>

        <section className='mt-6'>
          <h4 className='mb-2 text-xl font-semibold'>
            Types of Information collected:
          </h4>
          <p>We collect the following types of information from its users:</p>
          <ul className='list-disc pl-5'>
            <li>Name</li>
            <li>E-mail address</li>
            <li>Location and/or address</li>
            <li>Phone number</li>
            <li>Account password</li>
          </ul>
          <p>
            We do not collect any information which may contain 'sensitive
            personal data or information' as defined under the Information
            Technology (Reasonable Security Practices and Procedures and
            Sensitive Personal Data or Information) Rules, 2011 (Data Protection
            Rules).
          </p>
          <p>
            The information above will be collected and retained by the
            following entity:
          </p>
          <address className='not-italic'>
            Sashakti Ventures Private Limited <br />
            #309, Bharat Nilaya, <br />
            Kundalahalli, Bangalore- 37 <br />
            Phone: +91 9845178656 | E-mail: hello@ulai.in
          </address>
        </section>

        <section className='mt-6'>
          <h4 className='mb-2 text-xl font-semibold'>Purpose of collection:</h4>
          <p>
            We use the information collected from you for the provision of
            services to you. You will, at all times, have the option to refrain
            from disclosing your personal information to us. In such cases, we
            will no longer be obliged to continue providing services to you or
            continue to provide you with access to the App.
          </p>
          <p>
            By signing up for an account with us, you consent to receiving
            updates related to your account (such as, sign up confirmation,
            updated terms of service, account expiry, etc) on WhatsApp.
          </p>
        </section>

        <section className='mt-6'>
          <h4 className='mb-2 text-xl font-semibold'>Disclosure:</h4>
          <p>
            We will disclose any personal information if we are ordered to do so
            by a court of competent jurisdiction or to any government agency if
            required by law. Other than this, we will not disclose your personal
            information to any third parties.
          </p>
        </section>

        <section className='mt-6'>
          <h4 className='mb-2 text-xl font-semibold'>
            Security Practices & Procedures:
          </h4>
          <p>
            We will ensure the confidentiality and security of the personal
            information of our users by implementing comprehensive information
            security practices and standards as mandated by the Data Protection
            Rules. We have adopted the best security standard to protect the
            confidentiality and security of your information.
          </p>
        </section>

        <section className='mt-6'>
          <h4 className='mb-2 text-xl font-semibold'>Grievance Officer:</h4>
          <p>
            If you have any concerns or questions in relation to this Privacy
            Policy you may address them to our grievance officer whose email
            address is as follows: hello@ulai.in
          </p>
          <p>
            If you would like your account and all associated data to be deleted
            from our platform, please email your deletion request to
            hello@ulai.in
          </p>
        </section>

        <div className='mt-4 flex justify-end'>
          <span className='text-sm'>Last Updated 01 Feb, 2024</span>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
