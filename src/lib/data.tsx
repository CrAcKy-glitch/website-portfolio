import { FaBicycle, FaBus, FaCar } from 'react-icons/fa';

import aabosc from '../assets/images/hero/aabosc.png';
import adukalesc from '../assets/images/hero/adukalesc.png';
import bigCom from '../assets/images/hero/bigcom.png';
import ecobhoo from '../assets/images/hero/ecobhoosc.png';
import evlogia from '../assets/images/hero/evlogiasc.png';
import shopify from '../assets/images/hero/shopify.png';
import sugandhlok from '../assets/images/hero/sugandhsc.png';
import wereduse from '../assets/images/hero/weredusesc.png';
import aabo from '../assets/images/partners/aabo.png';
import adukale from '../assets/images/partners/adukale.png';
import ecobhoologo from '../assets/images/partners/ecobhoo.png';
import evlogialogo from '../assets/images/partners/evlogia.png';
import sugandhloklogo from '../assets/images/partners/sugandhLok.png';
import wereduselogo from '../assets/images/partners/wereduse.png';
export const companyData = [
  {
    name: 'Aabo',
    description: 'Aabo',
    logo: aabo,
    website: 'https://aabo.com',
  },
  {
    name: 'Adukale',
    description: 'Adukale',
    logo: adukale,
    website: 'https://adukale.com/',
  },
  {
    name: 'Evlogia',
    description: 'Evlogia',
    logo: evlogialogo,
    website: 'https://evlogiaeco.com',
  },
  {
    name: 'WeReduse',
    description: 'Wereduse',
    logo: wereduselogo,
    website: 'https://wereduse.com',
  },
  {
    name: 'EcoBhoo',
    description: 'EcoBhoo',
    logo: ecobhoologo,
    website: 'https://ecobhoo.com',
  },
  {
    name: 'Sugandhlok',
    description: 'SugandhLok',
    logo: sugandhloklogo,
    website: 'https://sugandhklok.com',
  },
];

export const cards = [
  {
    left: (
      <>
        <h3 className='text-3xl font-bold'>
          Personalized Product Recommendations
        </h3>
        <p className='text-lg text-gray-600'>
          Enhance your customers' shopping experience with tailored product
          suggestions, increasing conversion rates and average order value.
        </p>
        <ul>
          <li>Uncover hidden actionable insights from chats</li>
          <li>Learn how to increase your store CR even further</li>
          <li>Discover trends before they become clear Track</li>
          <li>improvements over time</li>
        </ul>
      </>
    ),
    right: <FaCar size={24} className='text-purple-600' />,
  },
  {
    left: (
      <>
        <h3 className='text-3xl font-bold'>24/7 AI-Powered Customer Support</h3>
        <p className='text-lg text-gray-600'>
          Provide instant, human-like responses to customer inquiries at any
          time, reducing support tickets and improving satisfaction.
        </p>
      </>
    ),
    right: <FaBicycle size={24} className='text-purple-600' />,
  },
  {
    left: (
      <>
        <h3 className='text-3xl font-bold'>Seamless Integration in Minutes</h3>
        <p className='text-lg text-gray-600'>
          Integrate Ulai's AI capabilities into your existing platform
          effortlessly, going live in just 15 minutes without extensive coding.
        </p>
      </>
    ),
    right: <FaBus size={24} className='text-purple-600' />,
  },
];

export const products = [
  {
    title: 'Aabo',
    link: 'https://aabo.com',
    thumbnail: aabosc,
  },
  {
    title: 'SugandhLok',
    link: 'https://sugandhlok.com',
    thumbnail: sugandhlok,
  },
  {
    title: 'WeReduse',
    link: 'https://wereduse.com',
    thumbnail: wereduse,
  },

  {
    title: 'Evlogia',
    link: 'https://Evlogiaeco.com',
    thumbnail: evlogia,
  },
  {
    title: 'Ecobhoo',
    link: 'https://ecobhoo.com',
    thumbnail: ecobhoo,
  },
  {
    title: 'Ecobhoo',
    link: '',
    thumbnail: ecobhoo,
  },
  {
    title: 'Adukale',
    link: 'https://adukale.com',
    thumbnail: adukalesc,
  },
  {
    title: 'Shopify',
    link: 'https://shopify.com',
    thumbnail: shopify,
  },

  {
    title: 'BigCommerce',
    link: 'https://bigcommerce.com',
    thumbnail: bigCom,
  },
];
