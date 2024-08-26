import MockAdapter from "axios-mock-adapter";

import { zodiacSignClient } from "@/api/zodiac-signs/zodiac-sign-client";

import { ROUTES } from "@/api/zodiac-signs/routes";

import type { ZodiacSign } from "@/types/zodiac-sign.type";
import type { ZodiacSignRequestBody } from "@/api/zodiac-signs/types";

const mocker = new MockAdapter(zodiacSignClient, { delayResponse: 200 });

const getedHoroscope = (body: ZodiacSignRequestBody): ZodiacSign => ({
  sign: body.sign,
  language: body.language,
  period: body.period,
  horoscope:
    "Вас ждет прилив сил и вдохновения. Легко получится добиваться поставленных целей. Приятный эмоциональный настрой поможет справиться с любыми мелкими сложностями. Благоприятный день чтобы учиться новому, эти знания вскоре вам пригодятся. Вероятны незапланированные финансовые поступления. Хороший период чтобы обсуждать важные вещи как с коллегами, так и с близкими людьми.\n\nМногим Львам предстоят неожиданные знакомства, которые могут перерасти в сотрудничество или долгую дружбу. Не исключено перерастание деловых отношений в романтические.",
});

export const setupZodiacSignApiMocks = (): void => {
  mocker.onPost(ROUTES.horoscope).reply((config) => {
    const body: ZodiacSignRequestBody = JSON.parse(config.data);
    const zodiacSign = getedHoroscope(body);

    return [200, zodiacSign];
  });
};
