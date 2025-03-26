import Layout from '@/components/layout/Layout';

export default function DataPolicy() {
  return (
    <Layout>
      <div className='mt-8 rounded-lg px-32 py-20 text-white'>
        <section className='flex justify-center'>
          <h2 className='mb-4 text-3xl font-bold'>Fair Usage Policy</h2>
        </section>

        <section>
          <h4 className='mb-2 text-xl font-semibold'>
            Monthly Active Contacts (MAC)
          </h4>
          <p>
            MAC is Monthly Active Contact. An active contact is an end user that
            has exchanged at least one message with your business over WhatsApp
            in a given month.
          </p>
        </section>

        <section className='mt-4'>
          <h4 className='mb-2 text-xl font-semibold'>Fair Use Policy:</h4>
          <p>
            The Monthly Active Contact fee per month is subject to a fair use
            policy of maximum 50 messages (of any type) per customer per month.
          </p>
          <p>
            You will be charged one additional Monthly Active User fee for every
            50 messages exchanged with one user. For example, if you exchange
            say, 101 messages with a single user then you will be charged for
            three users.
          </p>
        </section>

        <div className='mt-4 flex justify-end'>
          <span className='text-sm'>Last Updated 26 March, 2025</span>
        </div>
      </div>
    </Layout>
  );
}
