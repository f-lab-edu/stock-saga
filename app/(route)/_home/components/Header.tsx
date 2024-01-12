import NavigationBar from '@/app/(route)/_home/components/NavigationBar'
import TopBar from '@/app/(route)/_home/components/TopBar'

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center">
      <TopBar />
      <NavigationBar />
    </header>
  )
}
