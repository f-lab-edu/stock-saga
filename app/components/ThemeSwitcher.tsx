"use client";

import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons/faMoon";
import { faSun } from "@fortawesome/free-solid-svg-icons/faSun";

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false);

  const onChangeTheme = () => setIsDark((prev) => !prev);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <FontAwesomeIcon
      onClick={onChangeTheme}
      icon={isDark ? faMoon : faSun}
      style={{ color: isDark ? "white" : "black" }}
    />
  );
}
