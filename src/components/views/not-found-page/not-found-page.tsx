import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { getMainPage } from "@/config/router/routes";

import styles from "./not-found-page.module.css";

export const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.notFoundPage}>
      {t("Страница не найдена")} 🙁
      <Link className={styles.backButton} to={getMainPage()}>
        Назад на главную
      </Link>
    </div>
  );
};
