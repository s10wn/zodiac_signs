import { useState } from "react";
import { useTranslation } from "react-i18next";

import styles from "./lang-switcher.module.css"; // Импорт стилей
import FlagRuIcon from "./assets/flag-ru.svg?react";
import FlagEnIcon from "./assets/flag-en.svg?react";

type LangSwitcherProps = {
  className?: string;
};

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { i18n } = useTranslation();

  // Установите язык по умолчанию на основе текущего языка
  const defaultLanguage = i18n.language || "en";
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage);

  // Функция для изменения языка
  const changeLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div className={`${styles.langSwitcher} ${className}`}>
      <button
        onClick={() => changeLanguage("ru")}
        className={`${styles.langButton} ${currentLanguage === "ru" ? styles.active : ""}`}
        aria-label="Switch to Russian"
      >
        <FlagRuIcon />
      </button>
      <button
        onClick={() => changeLanguage("en")}
        className={`${styles.langButton} ${currentLanguage === "en" ? styles.active : ""}`}
        aria-label="Switch to English"
      >
        <FlagEnIcon />
      </button>
    </div>
  );
};
