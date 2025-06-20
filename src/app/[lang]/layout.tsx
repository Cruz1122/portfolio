import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css"; 
import { i18n } from "@/i18n.config"; 
import Navbar from "@/components/Navbar";
import { getDictionary } from "@/dictionaries";
import PageTransition from '@/components/PageTransition' 


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// This allows Next.js to know all the languages you support
export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: "Camilo Cruz | Frontend Developer",
  description: "Portfolio of Camilo Cruz, a frontend web developer.",
};

export default async function RootLayout({
  children,
  params, // The 'lang' parameter is passed here
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: any }>;
}>) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const navigation = dict.navigation;
  return (
    <html lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PageTransition>
          <Navbar navigation={navigation} lang={lang} />
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
