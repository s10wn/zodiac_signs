import { useEffect, useState } from "react";

import { Modal } from "@/components/lib/modal";
import { getHoroscope } from "@/api/zodiac-signs";

import type { ZodiacSign } from "@/api/zodiac-signs/types";

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
    <Modal isOpen={isOpen} title="Today" onClose={onClose}>
      <p>{sign}</p>
    </Modal>
  );
};
