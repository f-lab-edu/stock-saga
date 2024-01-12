'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ROUTES from '@/app/(route)/_home/constants/routes'
import ListItem from '@/app/components/ListItem'

export default function NavigationBar() {
  const currentPath = usePathname()
  const includesPath = (currentUrl: string, firstPath: string) =>
    currentUrl.startsWith(firstPath)

  const getSelectedNav = (currentUrl: string) =>
    ROUTES.find((navItem) => includesPath(currentUrl, navItem.path))

  const [selectedNavPath, setSelectedNavPath] = useState<string>(() => {
    const selectedNavItem = getSelectedNav(currentPath)
    return selectedNavItem ? selectedNavItem.path : ROUTES[0].path
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
              {ROUTES.map((navItem) => (
                <li
                  key={navItem.path}
                  className="rounded  px-3 py-2 hover:bg-neutral-400 dark:hover:bg-turquoise-600"
                >
                  <button
                    type="button"
                    onClick={() => selectMainNav(navItem.path)}
                  >
                    {navItem.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <nav className="h-full">
          <ul className="flex h-full">
            {getSelectedNav(selectedNavPath)?.subNav?.map((subNavItem, idx) => (
              <li>
                <ListItem
                  key={`${idx.toLocaleString()}`}
                  isActive={includesPath(
                    currentPath,
                    `${selectedNavPath}${subNavItem.path}`,
                  )}
                  className="h-full p-2"
                >
                  <Link
                    href={`${selectedNavPath}${subNavItem.path}`}
                    className="align-middle"
                    onClick={() => setOpen(false)}
                  >
                    {subNavItem.name}
                  </Link>
                </ListItem>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
