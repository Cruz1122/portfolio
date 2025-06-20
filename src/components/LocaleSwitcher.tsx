'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { i18n } from '@/i18n.config'
import Image from 'next/image'


export default function LocaleSwitcher() {
    const pathName = usePathname()

    // Extraer el locale actual de la URL
    const currentLocale = pathName ? pathName.split('/')[1] : i18n.defaultLocale

    const redirectedPathName = (locale: string) => {
        if (!pathName) return '/'
        const segments = pathName.split('/')
        segments[1] = locale
        return segments.join('/')
    }

    return (
        <ul className="flex gap-x-3 bg-black/30 backdrop-blur-sm p-2 rounded-md">
            {i18n.locales.map(locale => {
                const isSelected = locale === currentLocale
                return (
                    <li key={locale}>
                        <Link
                            href={redirectedPathName(locale)}
                            className={`rounded-md border-2 px-2 text-l uppercase font-bold transition-colors flex items-center gap-x-2 ${
                                isSelected 
                                    ? 'border-white text-white bg-white/10' 
                                    : 'border-transparent text-white/70 hover:border-white hover:text-white'
                            }`}
                        >

                            <Image
                                src={`/icons/${locale}.svg`}
                                alt={`${locale} flag`}
                                width={2}
                                height={2}
                                className="w-5"
                            /> {locale}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}