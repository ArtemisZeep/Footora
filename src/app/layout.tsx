import type { Metadata, Viewport } from "next";
import { LanguageProvider } from "../contexts/LanguageContext";
import "../styles/globals.css";
import OnlineBookingButton from "../components/OnlineBookingButton";
import Preloader from "../components/Preloader";

export const metadata: Metadata = {
  title: "Footura - Центр подологии",
  description: "Центр FOOTURA — команда узкопрофильных специалистов в области ухода за стопами",
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
        
        {/* Critical CSS to prevent FOUC */}
        <style>{`
          * { box-sizing: border-box; margin: 0; padding: 0; }
          html, body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; 
            color: #283433;
            overflow-x: hidden;
            max-width: 100vw;
          }
          h1, h2, h3, h4, h5, h6 { 
            font-family: Georgia, 'Times New Roman', serif; 
            font-weight: 400; 
          }
          :root {
            --color-primary: #283433;
            --color-secondary: #4D5C4D;
            --color-accent: #B8C8BA;
            --color-white: #FFFFFF;
            --color-lightgray: #F4F4F4;
            --color-black: #000000;
            --color-gray: #A3A9AA;
          }
          
          /* Critical Header Styles */
          header[class*="header"] {
            position: absolute !important;
            top: 0;
            left: 0;
            right: 0;
            z-index: 100;
            width: 100%;
          }
          [class*="container"] {
            max-width: 1440px;
            margin: 0 auto;
            padding: 0 20px;
          }
          [class*="navbar"] {
            height: 118px;
            display: flex !important;
            justify-content: space-between;
            align-items: center;
          }
          [class*="desktopNav"] {
            display: flex !important;
            justify-content: space-between;
            align-items: center;
            width: 100%;
          }
          [class*="leftNav"], [class*="rightNav"] {
            display: flex !important;
            align-items: center;
            gap: 40px;
            flex: 1;
          }
          [class*="rightNav"] {
            justify-content: flex-end;
          }
          [class*="centerLogo"] {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            z-index: 10;
          }
          [class*="navLink"] {
            color: #ffffff !important;
            font-size: 18px;
            font-weight: 300;
            text-decoration: none;
            white-space: nowrap;
          }
          [class*="logoImage"] {
            height: 40px;
            width: auto;
          }
          
          /* Dropdown Menu Styles */
          [class*="dropdown"] {
            position: relative;
          }
          [class*="dropdownBtn"] {
            color: #ffffff !important;
            font-size: 18px;
            font-weight: 300;
            background: none;
            border: none;
            padding: 0;
            cursor: pointer;
            white-space: nowrap;
          }
          [class*="dropdownContent"] {
            position: absolute;
            top: 100%;
            left: 0;
            padding-top: 10px;
            min-width: 200px;
            z-index: 200;
            display: none;
          }
          [class*="dropdownContent"] > div {
            background-color: rgba(74, 74, 74, 0.95) !important;
            border-radius: 4px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
          }
          [class*="dropdown"]:hover [class*="dropdownContent"] {
            display: block !important;
          }
          [class*="dropdownContent"] a {
            color: #ffffff !important;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
          }
          
          /* Language Switcher Styles */
          [class*="langSwitcher"] {
            display: flex !important;
            align-items: center;
            margin-left: 20px;
          }
          [class*="langButton"] {
            color: #ffffff !important;
            font-size: 18px;
            font-weight: 300;
            background: none;
            border: none;
            padding: 4px 8px;
            cursor: pointer;
          }
          [class*="langActive"] {
            opacity: 1;
            font-weight: 500 !important;
            text-decoration: underline;
          }
          
          /* Critical Footer Styles */
          footer[class*="footer"] {
            background-color: #283433 !important;
            width: 100%;
          }
          footer [class*="container"] {
            padding: 59px 70px 30px;
            max-width: 1440px;
            margin: 0 auto;
            display: flex !important;
            flex-direction: column;
          }
          [class*="mainGrid"] {
            display: grid !important;
            grid-template-columns: 200px 167px 1fr;
            gap: 174px;
            margin-bottom: 30px;
          }
          footer [class*="logoImage"] {
            width: 200px;
            height: auto;
            object-fit: contain;
          }
          [class*="navLinks"] {
            display: flex !important;
            flex-direction: column;
            gap: 14px;
          }
          footer [class*="navLink"] {
            color: #F5F5F5 !important;
            font-size: 18px;
            font-weight: 300;
            text-decoration: none;
          }
          [class*="contactSection"] {
            display: flex !important;
            flex-direction: column;
            gap: 27px;
          }
          [class*="address"] {
            color: #F5F5F5;
            font-size: 32px;
            font-weight: 300;
          }
          [class*="phone"], [class*="email"] {
            color: #B8C8BA;
            font-size: 29px;
            font-weight: 400;
          }
          
          /* Footer Bottom Section */
          [class*="legalSection"] {
            margin-bottom: 20px;
          }
          [class*="companyInfo"] {
            color: #F5F5F5;
            font-size: 14px;
            font-weight: 300;
            line-height: 14px;
            text-align: right;
          }
          [class*="bottomSection"] {
            display: flex !important;
            justify-content: space-between;
            align-items: center;
            margin-top: auto;
          }
          [class*="copyrightText"] {
            color: #F5F5F5;
            font-size: 14px;
            font-weight: 300;
            line-height: 32px;
          }
          [class*="privacyLink"] {
            color: #F5F5F5;
            font-size: 14px;
            font-weight: 300;
            line-height: 14px;
            text-decoration: none;
          }
          [class*="developerSection"] {
            display: flex !important;
            justify-content: center;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid rgba(245, 245, 245, 0.1);
          }
          [class*="developerLink"] {
            display: flex !important;
            align-items: center;
            gap: 8px;
            text-decoration: none;
          }
          [class*="developerText"] {
            color: #B8C8BA;
            font-size: 12px;
            font-weight: 300;
            line-height: 12px;
          }
          [class*="zeepLogo"] {
            height: 20px;
            width: auto;
            opacity: 0.7;
            filter: brightness(0) invert(1);
          }
          
          /* Mobile Menu Hidden by default */
          [class*="mobileMenu"] { display: none !important; }
          [class*="mobileNav"] { 
            display: none;
            justify-content: space-between;
            align-items: center;
            width: 100%;
          }
          [class*="mobileLogo"] {
            display: flex;
            align-items: center;
          }
          [class*="burgerBtn"] {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 24px;
            height: 24px;
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 0;
            z-index: 1000;
          }
          [class*="burgerBtn"] span {
            width: 24px;
            height: 2px;
            background: #ffffff;
            border-radius: 1px;
            position: relative;
          }
          
          @media (max-width: 768px) {
            [class*="desktopNav"] { display: none !important; }
            [class*="mobileNav"] { display: flex !important; }
            [class*="mobileMenu"] { display: block !important; }
            [class*="mainGrid"] {
              grid-template-columns: 1fr !important;
              gap: 30px !important;
            }
            footer [class*="container"] {
              padding: 30px 20px !important;
            }
          }
        `}</style>
        
        {/* Preload critical fonts to prevent FOUC */}
        <link 
          rel="preconnect" 
          href="https://fonts.googleapis.com" 
        />
        <link 
          rel="preconnect" 
          href="https://fonts.gstatic.com" 
          crossOrigin="anonymous" 
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Tenor+Sans&display=swap"
        />
        
        {/* DNS prefetch for external resources */}
        <link 
          rel="dns-prefetch" 
          href="//fonts.googleapis.com" 
        />
        <link 
          rel="dns-prefetch" 
          href="//fonts.gstatic.com" 
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
