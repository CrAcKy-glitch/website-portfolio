import BrandCarousel from '@/components/brandCarousel';
import ThreeAnimation from '@/components/hero';
import Layout from '@/components/layout/Layout';
import UlaiAfterSales from '@/components/ulaiAfterSales';
import UlaiAnalytics from '@/components/ulaiAnalytics';
import UlaiCampaign from '@/components/ulaiCampaign';
import UlaiDiscovery from '@/components/ulaiDiscovery';
import UlaiIntro from '@/components/ulaiIntro';
import UlaiProducts from '@/components/ulaiProducts';
import { UlaiStats } from '@/components/ulaiStats';
import UlaiVoice from '@/components/ulaiVoice';
import UlaiWhy from '@/components/ulaiWhy';

export default function Home() {
  return (
    <div className='font-roboto  h-full bg-gradient-to-br from-black to-gray-800 text-white'>
      <ThreeAnimation />
      <Layout>
        <UlaiIntro />
        <UlaiStats />
        <UlaiDiscovery />
        <UlaiAfterSales />
        <UlaiVoice />
        <UlaiAnalytics />
        <UlaiCampaign />
        <BrandCarousel />
        <UlaiProducts />
        <UlaiWhy />
      </Layout>
    </div>
  );
}
