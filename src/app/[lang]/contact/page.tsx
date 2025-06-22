import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n.config';
import { FaEnvelope, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import LowPolyBackground from '@/components/LowPolyBackground';
import ContactForm from '@/components/ContactForm';

export default async function ContactPage({ params }: Readonly<{ params: Promise<{ lang: Locale }> }>) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const { title, subtitle, form, directContactTitle, email, linkedin, whatsappTitle } = dict.contactPage;

    return (
        <div className="relative w-full min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)]">
            <LowPolyBackground />
            <div className="relative z-10 container mx-auto px-6 py-8">
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-4xl font-black text-white uppercase tracking-wider">{title}</h1>
                    <p className="mt-4 text-sm text-gray-400">{subtitle}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

                    <div>
                        <ContactForm form={form} />
                    </div>

                    {/* Direct contact */}
                    <div className="space-y-8">
                        <div className="bg-white/5 border border-white/20 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center justify-center gap-2">{directContactTitle}</h3>
                            <div className="space-y-4">
                                <a href={`mailto:${email}`} className="flex items-center gap-4 text-gray-300 hover:text-white/80 transition-colors">
                                    <FaEnvelope className="w-6 h-6 text-white/80" />
                                    <span>{email}</span>
                                </a>
                                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors">
                                    <FaLinkedin className="w-6 h-6 text-blue-400" />
                                    <span>Juan Camilo Cruz Parra</span>
                                </a>
                                <a href={`https://wa.me/573178191919`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-green-400 transition-colors">
                                    <FaWhatsapp className="w-6 h-6 text-green-400" />
                                    <span>+57 321 465 07 54</span>
                                </a>
                            </div>
                        </div>

                        <div className="bg-white/5 border border-white/20 rounded-lg p-6 text-center">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center justify-center gap-2">
                                {whatsappTitle}
                            </h3>
                            <div className="flex justify-center">
                                <Image
                                    src="/images/whatsapp-qr-placeholder.png" // Reemplaza con tu QR real
                                    alt="WhatsApp QR Code"
                                    width={120}
                                    height={120}
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}