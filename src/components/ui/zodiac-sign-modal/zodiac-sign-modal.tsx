import { useEffect, useState } from "react";

import { Modal } from "@/components/lib/modal";
import { getHoroscope } from "@/api/zodiac-signs";

import styles from "./zodiac-sign-modal.module.css";

import type { ZodiacSign } from "@/types/zodiac-sign.type";

type ZodiacSignModalProps = {
  sign: string;
  isOpen: boolean;
  onClose: () => void;
};

export const ZodiacSignModal = ({ sign, isOpen, onClose }: ZodiacSignModalProps) => {
  const [zodiacSign, setZodiacSign] = useState<ZodiacSign | null>(null);

  useEffect(() => {
    getHoroscope({
      sign,
      language: "original",
      period: "today",
    }).then((zodiac) => {
      setZodiacSign(zodiac);
    });
  }, [zodiacSign, sign]);

  return (
    zodiacSign && (
      <Modal isOpen={isOpen} title={zodiacSign.sign} onClose={onClose}>
        <p className={styles.zodiacDescription}>{sign}</p>
      </Modal>
    )
  );
};
