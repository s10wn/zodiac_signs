import { ROUTES } from "./routes";
import { zodiacSignClient } from "./zodiac-sign-client";

import type { ZodiacSignRequestBody } from "./types";
import type { ZodiacSign } from "@/types/zodiac-sign.type";

export const getHoroscope = async (body: ZodiacSignRequestBody): Promise<ZodiacSign> => {
  const { data } = await zodiacSignClient.post(ROUTES.horoscope, body);

  return data;
};
