interface NavItemProps {
  children: React.ReactNode
  isActive: boolean
  className?: string
}

export default function ListItem(props: NavItemProps) {
  const { children, isActive, className } = props

  return (
    <div
      className={`border-b-4 ${
        isActive ? 'border-amber-600' : 'border-transparent'
      } ${className}`}
    >
      {children}
    </div>
  )
}
