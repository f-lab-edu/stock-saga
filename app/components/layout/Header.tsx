import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import ThemeSwitcher from "@/app/components/ThemeSwitcher";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

export default function Header() {
  const navList = ["지수", "주식", "외환", "암호화폐"];
  return (
    <header className="flex justify-center items-center flex-col">
      <div className="bg-neutral-950 text-white	 w-full xl:flex xl:justify-center px-5 py-3">
        <div className="flex justify-between max-w-7xl xl:w-full">
          <div>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </div>
          <div>
            <ThemeSwitcher />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="lg"
              style={{ marginLeft: "25px" }}
            />
          </div>
        </div>
      </div>

      <div className=" bg-neutral-500 xl:flex xl:justify-center h-12 px-5 w-full">
        <div className="flex max-w-7xl xl:w-full h-full">
          <button
            type="button"
            className="mr-3 border-b-4 border-transparent h-full"
          >
            시장
            <FontAwesomeIcon
              icon={faCaretDown}
              style={{ marginLeft: "10px" }}
            />
          </button>
          <nav className="h-full">
            <ul className="flex h-full">
              {navList.map((nav: string) => (
                <li key={nav} className="p-2 border-b-4	border-amber-600">
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
  );
}
