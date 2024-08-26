import cn from "classnames";
import { useTranslation } from "react-i18next";

import styles from "./zodiac-sign-card.module.css";

type ZodiacSignCardProps = {
  sign: string;
  period: string;
  image: string;
  openZodiacSignModal: (sign: string) => void;
  className?: string;
};

export const ZodiacSignCard = ({ sign, period, image, openZodiacSignModal, className }: ZodiacSignCardProps) => {
  const { t } = useTranslation();

  const handleClick = () => {
    openZodiacSignModal(sign);
  };

  return (
    <article className={cn(styles.card, className)} onClick={handleClick}>
      <img src={image} />
      <h2>{t(sign)}</h2>
      <span>{period}</span>
    </article>
  );
};
