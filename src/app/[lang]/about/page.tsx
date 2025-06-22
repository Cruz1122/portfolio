import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n.config';
import AboutContent from '@/components/AboutContent'; // Import our new client component
import LowPolyBackground from '@/components/LowPolyBackground';
export default async function AboutPage({ params }: Readonly<{ params: Promise<{ lang: Locale }> }>) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <div className="relative w-full min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)]">
            <LowPolyBackground />
            <div className="relative z-10">
                <AboutContent aboutPage={dict.aboutPage} hero={dict.hero} />
            </div>
        </div>
    );
}