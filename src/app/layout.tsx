import type { Metadata, Viewport } from "next";
import { LanguageProvider } from "../contexts/LanguageContext";
import "../styles/globals.css";
import OnlineBookingButton from "../components/OnlineBookingButton";
import Preloader from "../components/Preloader";

export const metadata: Metadata = {
  title: "Footura - Центр подологии",
  description: "Центр FOOTURA — команда узкопрофильных специалистов в области ухода за стопами",
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "Footura - Центр подологии",
    description: "Центр FOOTURA — команда узкопрофильных специалистов в области ухода за стопами",
    type: "website",
    locale: "ru_RU",
    alternateLocale: "cs_CZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Footura - Центр подологии",
    description: "Центр FOOTURA — команда узкопрофильных специалистов в области ухода за стопами",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function generateViewport(): Viewport {
  return {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#ffffff',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        {/* Preload critical CSS file */}
        <link 
          rel="preload" 
          as="style" 
          href="/critical.css"
        />
        <link 
          rel="stylesheet" 
          href="/critical.css"
        />
        
        {/* Google Fonts preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Tenor+Sans&display=swap"
        />
      </head>
      <body>
        <LanguageProvider>
          <Preloader />
          {children}
          <OnlineBookingButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
