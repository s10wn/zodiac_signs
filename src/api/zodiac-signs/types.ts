export type ZodiacSignRequestBody = {
  sign: string;
  language: string;
  period: string;
};

export type ZodiacSign = {
  sign: string;
  language: string;
  period: string;
  horoscope: string;
};
