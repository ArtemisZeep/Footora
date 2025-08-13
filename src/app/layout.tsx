import type { Metadata } from "next";
import { LanguageProvider } from "../contexts/LanguageContext";
import "../styles/globals.css";
import OnlineBookingButton from "../components/OnlineBookingButton";
import Preloader from "../components/Preloader";

export const metadata: Metadata = {
  title: "Footura - Центр подологии",
  description: "Центр FOOTURA — команда узкопрофильных специалистов в области ухода за стопами",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
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
