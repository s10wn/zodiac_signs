import { useState } from "react";

import { ZodiacSignCard } from "@/components/ui/zodiac-sign-card";
import { ZodiacSignModal } from "@/components/ui/zodiac-sign-modal";

import { zodiacSigns } from "@/constants/zodiac-signs";

import styles from "./main-page.module.css";
import { ConditionalRender } from "@/components/lib/conditional-render";
import { LangSwitcher } from "@/components/lib/lang-switcher";

export const MainPage = () => {
  const [isZodiacSignModalOpen, setIsZodiacSignModalOpen] = useState(false);
  const [zodiacSign, setZodiacSign] = useState("");

  const openZodiacSignModal = (sign: string) => {
    setZodiacSign(sign);
    setIsZodiacSignModalOpen(true);
  };

  const closeZodiacSignModal = () => {
    setIsZodiacSignModalOpen(false);
  };

  return (
    <main className={styles.mainPage}>
      <LangSwitcher />
      {zodiacSigns.map((sign) => (
        <ZodiacSignCard
          openZodiacSignModal={openZodiacSignModal}
          className={styles.zodiacCard}
          key={sign.key}
          sign={sign.key}
          period={sign.period}
          image={sign.image}
        />
      ))}

      <ConditionalRender conditions={[!!zodiacSign]}>
        <ZodiacSignModal sign={zodiacSign} isOpen={isZodiacSignModalOpen} onClose={closeZodiacSignModal} />
      </ConditionalRender>
    </main>
  );
};
