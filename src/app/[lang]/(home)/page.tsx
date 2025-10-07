import Image from 'next/image';
import ProgressBarLink from '@/components/ProgressBarLink';
import LowPolyBackground from '@/components/LowPolyBackground'; 
import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n.config';
import { FaEnvelope, FaFileAlt, FaFolderOpen, FaUser } from 'react-icons/fa';

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
              <p className="text-lg md:text-2xl font-light text-gray-300 drop-shadow-[0_0_10px_rgba(156,163,175,0.9)]">
                {dict.hero.subtitle}
              </p>
              <p 
                className="mt-4 max-w-md mx-auto md:mx-0 text-gray-400"
                dangerouslySetInnerHTML={{ __html: dict.hero.description }}
              />
              <div className="mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto md:mx-0">
                <ProgressBarLink
                  href={`/${lang}/about`}
                  className="group relative overflow-hidden border-2 border-white text-white font-bold py-3 px-6 rounded-sm uppercase tracking-widest hover:bg-transparent hover:text-purple-300 hover:border-purple-300 transition-all duration-300 flex items-center justify-center gap-2 text-xs md:text-sm shadow-lg hover:shadow-purple-400/30 transform hover:scale-105"
                >
                  <FaUser className="transition-transform duration-300 group-hover:scale-110" />
                  {dict.hero.aboutButton}
                </ProgressBarLink>

                {/* <ProgressBarLink
                  href={`/${lang}/cv`}
                  className="group relative overflow-hidden border-2 border-white text-white font-bold py-3 px-6 rounded-sm uppercase tracking-widest hover:bg-transparent hover:text-green-300 hover:border-green-300 transition-all duration-300 flex items-center justify-center gap-2 text-xs md:text-sm shadow-lg hover:shadow-green-400/30 transform hover:scale-105"
                >
                  <FaFileAlt className="transition-transform duration-300 group-hover:rotate-6" />
                  {dict.hero.cvButton}
                </ProgressBarLink> */}

                <ProgressBarLink 
                  href={`/${lang}/projects`} 
                  className="group relative overflow-hidden border-2 border-white text-white font-bold py-3 px-6 rounded-sm uppercase tracking-widest hover:bg-transparent hover:text-blue-300 hover:border-blue-300 transition-all duration-300 flex items-center justify-center gap-2 text-xs md:text-sm shadow-lg hover:shadow-blue-400/30 transform hover:scale-105"
                >
                  <FaFolderOpen className="transition-transform duration-300 group-hover:rotate-12" />
                  {dict.hero.projectsButton}
                </ProgressBarLink>
                
                <ProgressBarLink 
                  href={`/${lang}/contact`} 
                  className="group relative overflow-hidden border-2 border-white text-white font-bold py-3 px-6 rounded-sm uppercase tracking-widest hover:bg-transparent hover:text-white hover:border-white transition-all duration-300 flex items-center justify-center gap-2 text-xs md:text-sm shadow-lg hover:shadow-white/30 transform hover:scale-105"
                >
                  <FaEnvelope className="transition-transform duration-300 group-hover:scale-110" />
                  {dict.hero.contactButton}
                </ProgressBarLink>
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