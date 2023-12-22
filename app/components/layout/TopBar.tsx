'use client'

import Image from 'next/image'
import Link from 'next/link'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ThemeSwitcher from '@/app/components/ThemeSwitcher'
import lightLogo from '@/app/image/full_logo_light.png'

export default function TopBar() {
  return (
    <div className="w-full bg-neutral-950 px-5 py-3 text-white dark:bg-turquoise-800 xl:flex xl:justify-center">
      <div className="flex max-w-7xl justify-between xl:w-full">
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faBars}
            size="lg"
            style={{
              marginRight: '10px',
            }}
          />
          <Link href="/">
            <Image
              src={lightLogo}
              width={130}
              height={50}
              alt="Picture of Logo"
            />
          </Link>
        </div>
        <div className="flex items-center">
          <ThemeSwitcher />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="lg"
            style={{
              marginLeft: '25px',
            }}
          />
        </div>
      </div>
    </div>
  )
}
