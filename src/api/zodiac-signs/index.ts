import { ROUTES } from "./routes";
import { zodiacSignClient } from "./zodiac-sign-client";

import type { ZodiacSign, ZodiacSignRequestBody } from "./types";

export const getHoroscope = async (body: ZodiacSignRequestBody): Promise<ZodiacSign> => {
  const { data } = await zodiacSignClient.post(ROUTES.horoscope, body);

  return data;
};
