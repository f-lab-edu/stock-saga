import NavigationBar from '@/app/components/layout/NavigationBar'
import TopBar from '@/app/components/layout/TopBar'

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center">
      <TopBar />
      <NavigationBar />
    </header>
  )
}
