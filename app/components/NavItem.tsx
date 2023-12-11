interface NavItemProps {
  key: string
  hasBorder: boolean
  children: React.ReactNode
  isCurrentPath?: boolean
  className?: string
}

export default function NavItem(props: NavItemProps) {
  const { key, hasBorder, children, isCurrentPath, className } = props

  return (
    <li
      key={key}
      className={`${hasBorder ? 'border-b-4' : 'border-none'} ${
        isCurrentPath ? 'border-amber-600' : 'border-transparent'
      } ${className}`}
    >
      {children}
    </li>
  )
}
