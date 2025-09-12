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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        {/* DNS prefetch для внешних ресурсов */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//mc.yandex.ru" />
        
        {/* Preconnect для критических ресурсов */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Preload критических изображений - НЕ ТРОГАЕМ critical.css! */}
        <link rel="preload" as="image" href="/images/logo_footura.png" />
        <link rel="preload" as="image" href="/images/hero-bg.jpg" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4XYF0R04SD"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4XYF0R04SD');
            `,
          }}
        />
        
        {/* Yandex Metrika */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=104088996', 'ym');
              
              ym(104088996, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
            `,
          }}
        />
        <noscript>
          <div>
            <img 
              src="https://mc.yandex.ru/watch/104088996" 
              style={{position:'absolute', left:'-9999px'}} 
              alt="" 
            />
          </div>
        </noscript>
        
        {/* Критические стили - НЕ ИЗМЕНЯЕМ! */}
        <link 
          rel="stylesheet" 
          href="/critical.css"
        />
        
        {/* КРИТИЧЕСКИЕ СТИЛИ ОСТАЮТСЯ БЕЗ ИЗМЕНЕНИЙ! */}
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
            gap: 20px;
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
            object-fit: contain;
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
          footer[class*="footer"][class*="schoolVariant"] {
            background-color: #33435C !important;
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
          
          @media (min-width: 1025px) and (max-width: 1200px) {
            /* Header tablet/Small desktop layout */
            [class*="desktopNav"] {
              display: grid !important;
              grid-template-columns: 1fr auto 1fr !important;
              align-items: center !important;
              width: 100% !important;
            }
            [class*="centerLogo"] {
              position: static !important;
              left: auto !important;
              transform: none !important;
              justify-self: center !important;
              z-index: 1 !important;
            }
            [class*="leftNav"] { justify-self: start !important; gap: 20px !important; flex-wrap: nowrap !important; }
            [class*="rightNav"] { justify-self: end !important; gap: 20px !important; flex-wrap: nowrap !important; }
            [class*="navLink"], [class*="dropdownBtn"], [class*="langButton"] { font-size: 14px !important; }
            [class*="centerLogo"] img { width: 100px !important; height: 28px !important; }
          }

          @media (min-width: 769px) and (max-width: 1024px) {
            /* Use mobile-style header on tablets */
            [class*="desktopNav"] { display: none !important; }
            [class*="mobileNav"] { display: flex !important; }
            [class*="mobileMenu"] { display: block !important; }
            [class*="navbar"] { height: 80px !important; }

            /* Footer tablet centering */
            footer [class*="container"] {
              padding: 40px 30px !important;
            }
            [class*="mainGrid"] {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
              text-align: center !important;
              justify-items: center !important;
              align-items: center !important;
            }
            footer [class*="logoImage"] { 
              width: 180px !important;
              margin: 0 auto !important; 
            }
            footer [class*="logoSection"],
            footer [class*="navigationSection"],
            footer [class*="contactSection"],
            footer [class*="legalSection"],
            footer [class*="bottomSection"] {
              justify-content: center !important;
              align-items: center !important;
              text-align: center !important;
              width: 100% !important;
            }
            footer [class*="navLinks"] { align-items: center !important; }
            footer [class*="bottomSection"] { flex-direction: column !important; gap: 12px !important; }
            footer [class*="companyInfo"] { text-align: center !important; font-size: 13px !important; }
            footer [class*="address"] { font-size: 28px !important; text-align: center !important; }
            footer [class*="phone"], footer [class*="email"] { font-size: 24px !important; text-align: center !important; }
          }

          @media (max-width: 768px) {
            [class*="desktopNav"] { display: none !important; }
            [class*="mobileNav"] { display: flex !important; }
            [class*="mobileMenu"] { display: block !important; }

            /* Footer mobile centering */
            [class*="mainGrid"] {
              grid-template-columns: 1fr !important;
              gap: 30px !important;
              justify-items: center !important;
              align-items: center !important;
              text-align: center !important;
            }
            footer [class*="container"] {
              padding: 30px 20px !important;
              align-items: center !important;
              text-align: center !important;
            }
            footer [class*="logoImage"] { margin: 0 auto !important; }
            footer [class*="logoSection"],
            footer [class*="navigationSection"],
            footer [class*="contactSection"],
            footer [class*="legalSection"],
            footer [class*="bottomSection"] {
              justify-content: center !important;
              align-items: center !important;
              text-align: center !important;
              width: 100% !important;
            }
            footer [class*="navLinks"] { align-items: center !important; }
            footer [class*="bottomSection"] { flex-direction: column !important; }
            footer [class*="companyInfo"] { text-align: center !important; }
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
          {/* <Preloader /> */}
          {children}
          <OnlineBookingButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
