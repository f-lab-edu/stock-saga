import { createContext, ReactNode, useContext, useMemo } from 'react'

type DropdownItemProps = {
  children: React.ReactNode
  className?: string
}

type DropdownProps = {
  isOpen: boolean
  openDropdown: () => void
  closeDropdown: () => void
}

type DropdownWrapperProps = DropdownProps & {
  children: ReactNode
}

const DropdownContext = createContext<DropdownProps>({
  isOpen: false,
  openDropdown: () => {},
  closeDropdown: () => {},
})

export default function DropdowndownWrapper({
  isOpen,
  openDropdown,
  closeDropdown,
  children,
}: DropdownWrapperProps) {
  const value = useMemo(
    () => ({ isOpen, openDropdown, closeDropdown }),
    [isOpen, openDropdown, closeDropdown],
  )
  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  )
}

const Trigger = ({ children, className }: DropdownItemProps) => {
  const { isOpen, openDropdown, closeDropdown } = useContext(DropdownContext)
  return (
    <button
      type="button"
      className={className}
      onClick={isOpen ? closeDropdown : openDropdown}
    >
      {children}
    </button>
  )
}

const List = ({ children, className }: DropdownItemProps) => {
  const { isOpen } = useContext(DropdownContext)
  return isOpen && <ul className={className}> {children}</ul>
}

const Item = ({ children, className }: DropdownItemProps) => {
  const { closeDropdown } = useContext(DropdownContext)
  return (
    <li role="presentation" className={className} onClick={closeDropdown}>
      {children}
    </li>
  )
}
DropdowndownWrapper.Trigger = Trigger
DropdowndownWrapper.List = List
DropdowndownWrapper.Item = Item
