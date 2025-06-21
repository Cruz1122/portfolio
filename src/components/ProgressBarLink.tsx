'use client'

import Link, { type LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import NProgress from 'nprogress'
import { type AnchorHTMLAttributes, type ReactNode, forwardRef } from 'react'

type ProgressBarLinkProps = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
}

const ProgressBarLink = forwardRef<HTMLAnchorElement, ProgressBarLinkProps>(
  ({ href, onClick, children, ...props }, ref) => {
    const pathname = usePathname()

    const handleOnClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      // If the route is the same, don't trigger the progress bar
      if (pathname === href) {
        e.preventDefault()
        return
      }
      
      NProgress.start()
      
      // If the user has provided their own onClick, run it too
      if (onClick) {
        onClick(e)
      }
    }

    return (
      <Link href={href} onClick={handleOnClick} {...props} ref={ref}>
        {children}
      </Link>
    )
  }
)

ProgressBarLink.displayName = 'ProgressBarLink'

export default ProgressBarLink 