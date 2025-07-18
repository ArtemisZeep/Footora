import type { Metadata } from "next";
import "../styles/globals.css";

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
        {children}
      </body>
    </html>
  );
}
