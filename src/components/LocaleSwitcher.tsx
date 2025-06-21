// src/components/LocaleSwitcher.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { i18n } from '@/i18n.config'
import Image from 'next/image'


export default function LocaleSwitcher() {
    const pathName = usePathname()

    // Extract the current locale from the URL
    const currentLocale = (pathName.split('/')[1] || i18n.defaultLocale) as typeof i18n.locales[number]

    const redirectedPathName = (locale: string) => {
        if (!pathName) return '/'
        const segments = pathName.split('/')
        segments[1] = locale
        return segments.join('/')
    }

    return (
        <ul className="flex gap-x-3">
            {i18n.locales.map(locale => {
                const isSelected = locale === currentLocale
                return (
                    <li key={locale}>
                        <Link
                            href={redirectedPathName(locale)}
                            className={`
                                relative flex items-center gap-x-2 rounded-md px-3 py-1.5 
                                text-sm uppercase font-bold transition-colors duration-300
                                
                                before:content-[''] before:absolute before:top-0 before:left-0
                                before:border-l-2 before:border-t-2
                                before:border-white
                                before:transition-all before:duration-300

                                after:content-[''] after:absolute after:bottom-0 after:right-0
                                after:border-r-2 after:border-b-2
                                after:border-white
                                after:transition-all after:duration-300

                                ${isSelected
                                    ? 'text-white bg-white/10 before:w-full before:h-full after:w-full after:h-full'
                                    : `
                                        text-white/70 hover:text-white 
                                        before:w-2 before:h-2 before:opacity-0 hover:before:opacity-100 hover:before:w-full hover:before:h-full
                                        after:w-2 after:h-2 after:opacity-0 hover:after:opacity-100 hover:after:w-full hover:after:h-full
                                    `
                                }
                            `}
                        >
                            <Image
                                src={`/icons/${locale}.svg`}
                                alt={`${locale} flag`}
                                width={20}
                                height={20}
                                className="w-5 h-5 relative z-10"
                            />
                            <span className="relative z-10">{locale}</span>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}