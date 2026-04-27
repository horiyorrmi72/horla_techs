import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HorlaTechs — Software, Web & Mobile App Development",
  description: "HorlaTechs offers top-tier software engineering, web development, mobile app solutions, CRM, and backend services based in Lagos, Nigeria. Building scalable digital experiences for businesses worldwide.",
  keywords: "software engineering, web development, mobile apps, CRM solutions, backend services, HorlaTechs, Lagos software company",
  author: "HorlaTechs",
  openGraph: {
    title: "HorlaTechs — Software Engineering, Web & Mobile App Development",
    description: "Providing expert software, web, mobile app development, CRM, and backend services for modern businesses.",
    url: "https://www.horlatechs.com",
    siteName: "HorlaTechs",
    images: [
      {
        url: "https://www.horlatechs.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "HorlaTechs Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
<Script async src="https://www.googletagmanager.com/gtag/js?id=G-P26DDDNTD9"
strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-P26DDDNTD9');
  `}
</Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
