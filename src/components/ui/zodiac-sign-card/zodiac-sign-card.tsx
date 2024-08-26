import cn from "classnames";

import styles from "./zodiac-sign-card.module.css";

type ZodiacSignCardProps = {
  sign: string;
  name: string;
  period: string;
  image: string;
  openZodiacSignModal: (sign: string) => void;
  className?: string;
};

export const ZodiacSignCard = ({ sign, name, period, image, openZodiacSignModal, className }: ZodiacSignCardProps) => {
  const handleClick = () => {
    openZodiacSignModal(sign);
  };
  return (
    <article className={cn(styles.card, className)} onClick={handleClick}>
      <img src={image} />
      <h2>{name}</h2>
      <span>{period}</span>
    </article>
  );
};
