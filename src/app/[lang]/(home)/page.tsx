import Image from 'next/image';
import Link from 'next/link';
import LowPolyBackground from '@/components/LowPolyBackground'; 
import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n.config';
import LocaleSwitcher from '@/components/LocaleSwitcher';

export default async function HomePage({
  params,
}: Readonly<{
  params: Promise<{ lang: Locale }>;
}>) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <LowPolyBackground/>
      <main className="relative z-10 flex items-center justify-center w-full h-full text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wider">
                {dict.hero.title}
              </h1>
              <p className="mt-4 text-lg md:text-2xl font-light text-gray-300">
                {dict.hero.subtitle}
              </p>
              <p 
                className="mt-4 max-w-md mx-auto md:mx-0 text-gray-400"
                dangerouslySetInnerHTML={{ __html: dict.hero.description }}
              />
              <div className="mt-8 flex justify-center md:justify-start gap-4">
                <Link href={`/${lang}#proyectos`} className="border-2 border-white text-white font-bold py-3 px-8 rounded-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300">
                  {dict.hero.projectsButton}
                </Link>
                <Link href={`/${lang}/contacto`} className="border-2 border-gray-500 text-gray-300 font-bold py-3 px-8 rounded-sm uppercase tracking-widest hover:bg-gray-500 hover:text-white transition-colors duration-300">
                  {dict.hero.contactButton}
                </Link>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 border-2 border-gray-500 animate-pulse"></div>
                <Image
                  src="/images/foto.png" 
                  alt="Foto de perfil de Camilo Cruz"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full p-2"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}