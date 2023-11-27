"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons/faMoon";
import { faSun } from "@fortawesome/free-solid-svg-icons/faSun";
import { useEffect } from "react";
import useLocalStorage from "@/app/hooks/useLocalStorage";

export default function ThemeSwitcher() {
  const THEME_NAME = "stock-saga-theme";
  const THEME_DARK = "dark";
  const [isDark, setIsDark] = useLocalStorage(THEME_NAME, true);

  const onChangeTheme = (isDarkMode: boolean) => setIsDark(!isDarkMode);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add(THEME_DARK);
      return;
    }
    document.documentElement.classList.remove(THEME_DARK);
  }, [isDark]);

  return (
    <FontAwesomeIcon
      onClick={() => onChangeTheme(isDark)}
      icon={isDark ? faMoon : faSun}
      style={{ color: isDark ? "white" : "black" }}
    />
  );
}
