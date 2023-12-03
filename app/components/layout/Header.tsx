import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import ThemeSwitcher from '@/app/components/ThemeSwitcher'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'

export default function Header() {
  const navList = ['지수', '주식', '외환', '암호화폐']

  return (
    <header className="flex flex-col items-center justify-center">
      <div className="w-full bg-neutral-950	 px-5 py-3 text-white xl:flex xl:justify-center">
        <div className="flex max-w-7xl justify-between xl:w-full">
          <div>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </div>
          <div>
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

      <div className="h-12 w-full bg-neutral-500 px-5 xl:flex xl:justify-center">
        <div className="flex h-full max-w-7xl xl:w-full">
          <button
            type="button"
            className="bordser-b-4 mr-3 h-full border-transparent"
          >
            시장
            <FontAwesomeIcon
              icon={faCaretDown}
              style={{
                marginLeft: '10px',
              }}
            />
          </button>
          <nav className="h-full">
            <ul className="flex h-full">
              {navList.map((nav: string) => (
                <li key={nav} className="border-b-4 border-amber-600	p-2">
                  <Link href="/" className="align-middle">
                    {nav}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
