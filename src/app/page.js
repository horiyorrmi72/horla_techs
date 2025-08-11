import { CreativitySection } from "@/components/CreativitySection";
import { FAQ } from "@/components/FAQ";
import { GlobalClients } from "@/components/GlobalClinets";
import LandingHero, { MiniAboutUs } from "@/components/LandingHero";
import { MiniServices } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";

export const metadata = {
  title: 'HorlaTechs | Innovative Software, AI & Digital Solutions',
  description:
    'HorlaTechs delivers custom software, AI integration, web and mobile app development, digital marketing, and creative solutions to help your business grow.',
  keywords: [
    'software development',
    'AI integration',
    'web development',
    'mobile apps',
    'digital marketing',
    'HorlaTechs',
    'custom software',
    'technology solutions',
  ],
  openGraph: {
    title: 'HorlaTechs | Innovative Software, AI & Digital Solutions',
    description:
      'Empowering businesses with custom software, AI, web & mobile development, and digital marketing services.',
    url: 'https://www.horlatechs.com',
    siteName: 'HorlaTechs',
    images: [
      {
        url: '',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HorlaTechs | Innovative Software, AI & Digital Solutions',
    description:
      'Empowering businesses with custom software, AI, web & mobile development, and digital marketing services.',
    images: [''],
    creator: '@horla_techs',
  },
};

export default function Home() {
  return (
    <div>
      <LandingHero />
      <MiniAboutUs />
      <MiniServices />
      <GlobalClients />
      <CreativitySection />
      <Testimonials />
      <FAQ />
    </div>
  );
}
