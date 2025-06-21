'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import NProgress from 'nprogress'

export default function NavigationProgress() {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        NProgress.done()
    }, [pathname, searchParams])

    // Note: We don't need a NProgress.start() here because we will trigger it
    // on each Link component manually for better control.

    return null // This component renders nothing. Its only job is to run the effect.
}