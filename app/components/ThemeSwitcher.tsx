'use client'

import { useEffect } from 'react'
import { faMoon } from '@fortawesome/free-solid-svg-icons/faMoon'
import { faSun } from '@fortawesome/free-solid-svg-icons/faSun'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import useLocalStorage from '@/app/hooks/useLocalStorage'

export default function ThemeSwitcher() {
  const THEME_NAME = 'stock-saga-theme'
  const THEME_DARK = 'dark'
  const [isDark, setIsDark] = useLocalStorage(THEME_NAME, true)

  const onChangeTheme = (isDarkMode: boolean) => setIsDark(!isDarkMode)

  useEffect(() => {
    document.documentElement.classList.toggle(THEME_DARK, isDark)
  }, [isDark])

  return (
    <FontAwesomeIcon
      onClick={() => onChangeTheme(isDark)}
      icon={isDark ? faSun : faMoon}
      size="lg"
    />
  )
}
