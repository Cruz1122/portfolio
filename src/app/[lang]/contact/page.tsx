import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n.config';
import Navbar from '@/components/Navbar';
import { FaComment, FaEnvelope, FaLinkedin, FaUser, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import LowPolyBackground from '@/components/LowPolyBackground';

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

                    {/* Columna del Formulario */}
                    <div>
                        <form className="space-y-6 p-8 border border-white/20 rounded-lg bg-white/5 backdrop-blur-sm">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">{form.name}</label>
                                <div className="relative">
                                    <input type="text" id="name" name="name" required placeholder={form.namePlaceholder} className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">{form.email}</label>
                                <div className="relative">
                                    <input type="email" id="email" name="email" required placeholder={form.emailPlaceholder} className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">{form.message}</label>
                                <div className="relative">
                                    <textarea id="message" name="message" rows={3} required placeholder={form.messagePlaceholder} className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                                    <FaComment className="absolute left-3 top-4 text-gray-400 w-4 h-4" />
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="mx-auto border-2 border-white text-white py-2 px-4 rounded-sm tracking-widest hover:bg-white hover:text-black transition-colors duration-300 font-bold cursor-pointer gap-2 flex items-center justify-center uppercase">
                                    {form.submitButton}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Columna de Contacto Directo */}
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