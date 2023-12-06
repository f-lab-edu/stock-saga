import ThemeSwitcher from '@/app/components/ThemeSwitcher'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'

export default function TopBar() {
  return (
    <div className="w-full bg-neutral-950 px-5 py-3 text-white xl:flex xl:justify-center">
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
  )
}
