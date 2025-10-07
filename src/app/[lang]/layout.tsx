import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css"; 
import { i18n, type Locale } from "@/i18n.config"; 
import Navbar from "@/components/Navbar";
import { getDictionary } from "@/dictionaries";
import PageTransition from '@/components/PageTransition' 
import 'nprogress/nprogress.css'
import NavigationProgress from '@/components/NavigationProgress';
import { Suspense } from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: "Camilo Cruz | Fullstack Developer",
  description: "Portfolio of Camilo Cruz, a fullstack web developer.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}>) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const navigation = dict.navigation;
  return (
    <html lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense>
          <NavigationProgress /> 
        </Suspense>
          <Navbar navigation={navigation} lang={lang} />
          <PageTransition>
              {children}
          </PageTransition>
      </body>
    </html>
  );
}
