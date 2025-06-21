import Image from 'next/image';
import Link from 'next/link';
import LowPolyBackground from '@/components/LowPolyBackground'; 
import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n.config';
import { FaEnvelope, FaFileAlt, FaFolderOpen } from 'react-icons/fa';

export default async function HomePage({
  params,
}: Readonly<{
  params: Promise<{ lang: Locale }>;
}>) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="relative w-full min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)]">
      <LowPolyBackground/>
      <main className="relative z-10 flex items-center justify-center w-full min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] py-8 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

            <div className="text-center md:text-left flex flex-col items-center justify-center">
              <h1 className="text-4xl font-black uppercase tracking-wider md:text-4xl lg:text-5xl">
                {dict.hero.title}
              </h1>
              <p className="text-lg md:text-2xl font-light text-gray-300 drop-shadow-[0_0_10px_rgba(156,163,175,0.5)]">
                {dict.hero.subtitle}
              </p>
              <p 
                className="mt-4 max-w-md mx-auto md:mx-0 text-gray-400"
                dangerouslySetInnerHTML={{ __html: dict.hero.description }}
              />
              <div className="mt-8 flex justify-center md:justify-start gap-4">
                <Link href={`/${lang}/projects`} className="border-2 border-white text-white font-bold py-3 px-8 rounded-sm uppercase tracking-widest hover:bg-white hover:text-gray-900 hover:border-gray-200 transition-all duration-300 flex items-center gap-2 text-xs md:text-base shadow-lg hover:shadow-xl">
                  <FaFolderOpen />
                  {dict.hero.projectsButton}
                </Link>
                <Link href={`/${lang}/contact`} className="border-2 border-gray-300 text-gray-300 font-bold py-3 px-8 rounded-sm uppercase tracking-widest hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300 flex items-center gap-2 text-xs md:text-base shadow-lg hover:shadow-xl">
                  <FaEnvelope />
                  {dict.hero.contactButton}
                </Link>
              </div>
              <Link href={`/${lang}/cv`} className="mt-4 flex justify-center items-center border-2 border-gray-300 text-gray-300 font-bold py-3 px-8 rounded-sm uppercase tracking-widest hover:bg-green-600 hover:text-white hover:border-green-500 transition-all duration-300 gap-2 text-xs md:text-base shadow-lg hover:shadow-xl">
                <FaFileAlt />
                {dict.hero.cvButton}
              </Link>
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