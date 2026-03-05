import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const suisseIntl = localFont({
  src: "../public/6804c6e6e59f54740751a4b4_SuisseIntl-Regular.otf",
  variable: "--font-suisse-intl",
  display: "swap",
});

const apparel = localFont({
  src: "../public/Apparel-RegularIt.woff2",
  variable: "--font-apparel",
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Rishit Gupta — Creative Web Designer & AI Specialist',
  description:
    'Portfolio of Rishit Gupta — creative web designer and AI automations specialist.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${suisseIntl.variable} ${apparel.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
