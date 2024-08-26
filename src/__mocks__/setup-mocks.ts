import { setupZodiacSignApiMocks } from "./zodiac-sign-api.mock";

export const setupMocks = (): void => {
  if (import.meta.env.DEV || import.meta.env.MODE === "staging") {
    setupZodiacSignApiMocks();
  }
};
