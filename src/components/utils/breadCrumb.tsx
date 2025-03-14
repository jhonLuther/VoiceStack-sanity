import { useState, useEffect, Fragment, useMemo, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ArrowRightIcon } from '@sanity/icons'
import { removeUnwantedCharacters } from '~/utils/common'
import Anchor from '../common/anchor'

interface BreadCrumbProps {
  className?: string
}

const Breadcrumb = ({ className }: BreadCrumbProps) => {
  const router = useRouter()
  const [breadcrumbs, setBreadcrumbs] = useState([])
  const pathSegments = useRef(
    router.asPath.split('/').filter((segment) => segment !== '')
  )
  const excludedSegments = useMemo(() => ['en', 'en-GB', 'en-AU'], [])

  const breadcrumbLabels = useMemo(
    () => ({
      blogs: 'Blogs',
      articles: 'Articles',
      ebooks: 'eBooks',
      podcasts: 'Podcasts',
    }),
    []
  )

  useEffect(() => {
    pathSegments.current = router.asPath.split('/').filter((segment) => segment !== '')
  }, [router.asPath])

  useEffect(() => {
    const breadcrumbList = pathSegments?.current
      .filter((segment) => !excludedSegments.includes(segment))
      .map((segment, index) => {
        const href = `/${pathSegments?.current.slice(0, index + 1).join('/')}`
        const label = (breadcrumbLabels[segment] || segment).replace(/-/g, ' ')
        return { href, label }
      })
    setBreadcrumbs(breadcrumbList)
  }, [router.asPath, breadcrumbLabels, pathSegments, excludedSegments])

  return (
    <Fragment>
      <nav
        className={`mb-4 ${className}`}
        aria-label="Breadcrumb"
      >
        <div className="flex items-center justify-evenly rounded-full border border-white/20 backdrop-blur-md px-5  py-[10px]  border-gray-20   text-white text-xs font-medium">
          {/* Home Link */}
          <span className="flex items-center">
            <Anchor href="/" className="text-white uppercase">
              Home
            </Anchor>
            {breadcrumbs.length > 0 && (
              <span className="mx-3 opacity-75">
                <ArrowRightIcon width={16} height={16} />
              </span>
            )}
          </span>

          {/* Dynamic Breadcrumbs */}
          {breadcrumbs.map((breadcrumb, index) => {
            const isLast = index === breadcrumbs.length - 1
            return (
              <span key={breadcrumb.href} className="flex items-center text-xs tracking-[0.84px]">
                {isLast ? (
                  <span className="text-white uppercase ">
                    {removeUnwantedCharacters(breadcrumb.label)}
                  </span>
                ) : (
                  <Anchor href={breadcrumb.href} className="text-white uppercase">
                    {removeUnwantedCharacters(breadcrumb.label)}
                  </Anchor>
                )}
                {!isLast && (
                  <span className="mx-3 opacity-75">
                    <ArrowRightIcon width={16} height={16} />
                  </span>
                )}
              </span>
            )
          })}
        </div>
      </nav>
    </Fragment>
  )
}

export default Breadcrumb
