'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import NavItem from '@/app/components/NavItem'

export default function NavigationBar() {
  const navList = [
    {
      name: '시장',
      path: '/markets',
      subNav: [
        {
          name: '지수',
          path: '/equities',
        },
        {
          name: '주식',
          path: '/stocks',
        },
        {
          name: '외환',
          path: '/currecies',
        },
        {
          name: '암호화폐',
          path: '/crypto',
        },
      ],
    },
    {
      name: '뉴스',
      path: '/news',
      subNav: [
        {
          name: '경제',
          path: '/economy',
        },
        {
          name: '주식 시장',
          path: '/stock-markets',
        },
        {
          name: '상품과 선물',
          path: '/commodities',
        },
        {
          name: '외환',
          path: '/currecies',
        },
        {
          name: '암호화폐',
          path: '/crypto',
        },
        {
          name: '일반',
          path: '/general',
        },
      ],
    },
    {
      name: '관심 목록',
      path: '/favorites',
    },
  ]
  const currentPath = usePathname()
  const includesPath = (currentUrl: string, firstPath: string) =>
    currentUrl.startsWith(firstPath)

  const getSelectedNav = (currentUrl: string) =>
    navList.find((navItem) => includesPath(currentUrl, navItem.path))

  const [selectedNavPath, setSelectedNavPath] = useState<string>(() => {
    const selectedNavItem = getSelectedNav(currentPath)
    return selectedNavItem ? selectedNavItem.path : navList[0].path
  })
  const [open, setOpen] = useState(false)

  const selectMainNav = (navPath: string) => {
    setSelectedNavPath(navPath)
    setOpen(false)
  }

  return (
    <div className="h-12 w-full bg-neutral-500 px-5  dark:bg-turquoise-700 xl:flex xl:justify-center">
      <div className="relative flex h-full max-w-7xl xl:w-full">
        <button
          type="button"
          className="mr-3 h-full border-b-4 border-transparent"
          onClick={() => setOpen((prev) => !prev)}
        >
          {getSelectedNav(selectedNavPath)?.name}
          <FontAwesomeIcon
            icon={faCaretDown}
            style={{
              marginLeft: '10px',
            }}
          />
        </button>
        {open && (
          <div className="absolute top-14 rounded bg-neutral-500  dark:bg-turquoise-700">
            <ul className="p-2">
              {navList.map((navItem) => (
                <NavItem
                  key={navItem.path}
                  hasBorder={false}
                  className="rounded	 px-3 py-2 hover:bg-neutral-400 dark:hover:bg-turquoise-600"
                >
                  <button
                    type="button"
                    onClick={() => selectMainNav(navItem.path)}
                  >
                    {navItem.name}
                  </button>
                </NavItem>
              ))}
            </ul>
          </div>
        )}

        <nav className="h-full">
          <ul className="flex h-full">
            {getSelectedNav(selectedNavPath)?.subNav?.map((subNavItem, idx) => (
              <NavItem
                key={`${idx.toLocaleString()}`}
                hasBorder
                isCurrentPath={includesPath(
                  currentPath,
                  `${selectedNavPath}${subNavItem.path}`,
                )}
                className="p-2"
              >
                <Link
                  href={`${selectedNavPath}${subNavItem.path}`}
                  className="align-middle"
                  onClick={() => setOpen(false)}
                >
                  {subNavItem.name}
                </Link>
              </NavItem>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
