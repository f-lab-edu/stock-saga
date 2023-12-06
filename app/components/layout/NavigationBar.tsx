import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown'
import Link from 'next/link'

export default function NavigationBar() {
  const navList = ['지수', '주식', '외환', '암호화폐']

  return (
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
  )
}
